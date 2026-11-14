import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { formatPhone, nav, phoneHref, site, socialLinks } from "@/lib/site";

function ParentName({ className }: { className?: string }) {
  if (!site.parentUrl) {
    return <span className={className}>{site.parent}</span>;
  }
  return (
    <a
      href={site.parentUrl}
      className={`underline-offset-4 hover:text-white hover:underline ${className ?? ""}`}
      target="_blank"
      rel="noreferrer"
    >
      {site.parent}
    </a>
  );
}

export function Footer() {
  const call = phoneHref(site.phone);
  const phoneLabel = formatPhone(site.phone);
  const social = socialLinks();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark className="h-16 w-auto" />
          <p className="mt-5 text-sm font-semibold tracking-[0.12em]">
            VANTAGE BRIDGE TECHNOLOGIES
          </p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm leading-6 text-white/70">
            A division of <ParentName />
            {site.registration ? ` · ${site.registration}` : ""}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ParentName />
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {call ? (
              <li>
                <a href={call} className="hover:text-white">
                  {phoneLabel}
                </a>
              </li>
            ) : null}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.addressLine ? `${site.addressLine}, ` : ""}
              {site.city}
            </li>
          </ul>
        </div>

        {social.length > 0 ? (
          <div>
            <p className="text-sm font-semibold">Follow</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
