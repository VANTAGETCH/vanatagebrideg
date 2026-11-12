"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProposalLink } from "@/components/proposal-link";
import {
  formatPhone,
  nav,
  phoneHref,
  site,
} from "@/lib/site";
import { primaryButton } from "@/lib/styles";

export function Header() {
  const [open, setOpen] = useState(false);
  const call = phoneHref(site.phone);
  const phoneLabel = formatPhone(site.phone);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block text-[13px] font-semibold tracking-[0.16em] sm:text-[15px]">
            VANTAGE BRIDGE
          </span>
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.22em] text-[#8eb6ff]">
            TECHNOLOGIES
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          {call ? (
            <a href={call} className="text-sm font-medium text-white">
              {phoneLabel}
            </a>
          ) : null}
          <ProposalLink className={primaryButton} onNavigate={() => setOpen(false)}>
            Get a proposal
          </ProposalLink>
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-lg border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1" aria-hidden="true">
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
            <span className="h-px bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-5 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-2 py-3 text-base text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {call ? (
            <a href={call} className="block rounded-lg px-2 py-3 text-base">
              {phoneLabel}
            </a>
          ) : null}
          <ProposalLink
            className={`${primaryButton} my-3 w-full`}
            onNavigate={() => setOpen(false)}
          >
            Get a proposal
          </ProposalLink>
        </nav>
      ) : null}
    </header>
  );
}
