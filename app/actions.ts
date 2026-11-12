"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { needs, type NeedValue } from "@/lib/content";
import type { EnquiryField, EnquiryState } from "@/lib/enquiry";
import { site } from "@/lib/site";

const limits: Record<EnquiryField, number> = {
  name: 80,
  business: 120,
  email: 120,
  whatsapp: 24,
  need: 40,
  timeline: 80,
  message: 2000,
};

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

function needLabel(value: string) {
  return needs.find((item) => item.value === value)?.label ?? value;
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  if (readField(formData, "company_url")) {
    return {
      status: "success",
      message: "Enquiry sent. We reply within one business day.",
      errors: {},
    };
  }

  const enquiry = {
    name: readField(formData, "name"),
    business: readField(formData, "business"),
    email: readField(formData, "email").toLowerCase(),
    whatsapp: readField(formData, "whatsapp"),
    need: readField(formData, "need"),
    timeline: readField(formData, "timeline"),
    message: readField(formData, "message"),
  };

  const errors: EnquiryState["errors"] = {};

  if (enquiry.name.length < 2) errors.name = "Enter your name.";
  if (enquiry.business.length < 2) errors.business = "Enter the business name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    errors.email = "Enter a valid email address.";
  }
  const whatsappDigits = enquiry.whatsapp.replace(/\D/g, "");
  if (whatsappDigits.length < 8 || whatsappDigits.length > 15) {
    errors.whatsapp = "Enter a WhatsApp number we can message.";
  }
  if (!needs.some((item) => item.value === enquiry.need)) {
    errors.need = "Choose what you need.";
  }
  if (enquiry.timeline.length < 2) {
    errors.timeline = "Tell us roughly when you need it live.";
  }
  if (enquiry.message.length < 10) {
    errors.message = "Tell us a little about the project.";
  }

  (Object.keys(limits) as EnquiryField[]).forEach((key) => {
    if (enquiry[key].length > limits[key]) {
      errors[key] = `Keep this under ${limits[key]} characters.`;
    }
  });

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and send it again.",
      errors,
    };
  }

  const delivered = await deliver({
    ...enquiry,
    need: enquiry.need as NeedValue,
  });

  if (!delivered.ok) {
    return { status: "error", message: delivered.message, errors: {} };
  }

  return { status: "success", message: delivered.message, errors: {} };
}

async function deliver(enquiry: {
  name: string;
  business: string;
  email: string;
  whatsapp: string;
  need: NeedValue;
  timeline: string;
  message: string;
}) {
  const text = [
    `Name: ${enquiry.name}`,
    `Business: ${enquiry.business}`,
    `Email: ${enquiry.email}`,
    `WhatsApp: ${enquiry.whatsapp}`,
    `Need: ${needLabel(enquiry.need)}`,
    `Timeline: ${enquiry.timeline}`,
    "",
    enquiry.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.ENQUIRY_FROM ??
          `${site.name} <${site.email}>`,
        to: [process.env.ENQUIRY_TO ?? site.email],
        reply_to: enquiry.email,
        subject: `Website enquiry from ${enquiry.business}`.slice(0, 140),
        text,
      }),
    });

    if (!response.ok) {
      console.error("Enquiry email failed", response.status, await response.text());
      return {
        ok: false as const,
        message: `We could not send that just now. Email ${site.email} and we will reply within one business day.`,
      };
    }

    return {
      ok: true as const,
      message: "Enquiry sent. We reply within one business day.",
    };
  }

  if (process.env.NODE_ENV !== "production") {
    const directory = path.join(process.cwd(), "data");
    await mkdir(directory, { recursive: true });
    await appendFile(
      path.join(directory, "enquiries.jsonl"),
      `${JSON.stringify({ ...enquiry, at: new Date().toISOString() })}\n`,
      "utf8",
    );
    return {
      ok: true as const,
      message:
        "Enquiry received. We reply within one business day. Email delivery is not configured yet, so this copy was saved on this machine.",
    };
  }

  return {
    ok: false as const,
    message: `Enquiry delivery is not configured yet. Email ${site.email} and we will reply within one business day.`,
  };
}
