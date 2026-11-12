"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry } from "@/app/actions";
import { initialEnquiryState } from "@/lib/enquiry";
import { needs } from "@/lib/content";
import { fieldClass } from "@/lib/styles";

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialEnquiryState,
  );
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("enquiry-need");
    const select = selectRef.current;
    if (!stored || !select) return;
    if ([...select.options].some((option) => option.value === stored)) {
      select.value = stored;
    }
    sessionStorage.removeItem("enquiry-need");
  }, []);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-8"
        role="status"
      >
        <h3 className="text-xl font-semibold tracking-tight">Enquiry received</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-6"
      noValidate
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_url">Company URL</label>
        <input
          id="company_url"
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message ? (
        <p className="mb-4 rounded-lg bg-[#fff1f1] px-3 py-2 text-sm text-[#9f1239]" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" error={state.errors.name} autoComplete="name" />
        <Field
          label="Business name"
          name="business"
          error={state.errors.business}
          autoComplete="organization"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          error={state.errors.email}
          autoComplete="email"
        />
        <Field
          label="WhatsApp number"
          name="whatsapp"
          type="tel"
          error={state.errors.whatsapp}
          autoComplete="tel"
        />
        <div>
          <label htmlFor="need" className="block text-sm font-medium">
            What do you need?
          </label>
          <select
            ref={selectRef}
            id="need"
            name="need"
            defaultValue=""
            aria-invalid={state.errors.need ? true : undefined}
            aria-describedby={state.errors.need ? "need-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Select one
            </option>
            {needs.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {state.errors.need ? (
            <p id="need-error" className="mt-1.5 text-sm text-[#9f1239]">
              {state.errors.need}
            </p>
          ) : null}
        </div>
        <Field
          label="When do you need it live?"
          name="timeline"
          error={state.errors.timeline}
          placeholder="e.g. before March"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={state.errors.message ? true : undefined}
          aria-describedby={state.errors.message ? "message-error" : undefined}
          className={fieldClass}
        />
        {state.errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-[#9f1239]">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-5 w-full rounded-lg bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2457d6] disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
      <p className="mt-3 text-xs leading-5 text-muted">
        We use these details only to reply to your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-[#9f1239]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
