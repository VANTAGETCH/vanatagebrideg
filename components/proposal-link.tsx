"use client";

import Link from "next/link";

export function ProposalLink({
  need,
  className,
  children,
  onNavigate,
}: {
  need?: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/#start"
      className={className}
      onClick={() => {
        onNavigate?.();
        if (!need) return;
        sessionStorage.setItem("enquiry-need", need);
        const select = document.getElementById("need");
        if (select instanceof HTMLSelectElement) select.value = need;
      }}
    >
      {children}
    </Link>
  );
}
