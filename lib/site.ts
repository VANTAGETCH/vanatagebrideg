/**
 * Contact details that were still placeholders in the site brief.
 * Fill these in and the header, footer, call links, and WhatsApp button update together.
 *
 * phone: international format, for example "+233240000000"
 * addressLine: street only. The city line is always "Accra, Ghana".
 * social values: full profile URLs. Empty values are left off the page.
 */
export const site = {
  name: "Vantage Bridge Technologies",
  shortName: "Vantage Bridge",
  parent: "Vantage Bridge Enterprise",
  tagline: "Engineering the Future. Empowering Businesses.",
  description:
    "Fast, mobile-first business websites that rank on Google and turn visitors into calls, bookings and enquiries. Fixed price and a fixed launch date. Accra, Ghana.",
  email: "info@vantagebridge.com",
  phone: "",
  addressLine: "",
  city: "Accra, Ghana",
  registration: "",
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
  },
} as const;

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function internationalDigits(phone: string) {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 10) {
    digits = `233${digits.slice(1)}`;
  }
  return digits;
}

export function formatPhone(phone: string) {
  const digits = internationalDigits(phone);
  if (!digits) return "";
  if (digits.startsWith("233") && digits.length === 12) {
    return `+233 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return `+${digits}`;
}

export function phoneHref(phone: string) {
  const digits = internationalDigits(phone);
  return digits ? `tel:+${digits}` : "";
}

export function whatsappHref(phone: string, text?: string) {
  const digits = internationalDigits(phone);
  if (!digits) return "";
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function socialLinks() {
  return [
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
    { label: "X", href: site.social.x },
  ].filter((item) => item.href.length > 0);
}
