import Link from "next/link";
import { primaryButton } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="content" className="bg-mist">
      <div className="mx-auto max-w-xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-ink">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">
          This page is not on the site.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          The link may be out of date. The homepage has the services, work, and
          the enquiry form.
        </p>
        <Link href="/" className={`${primaryButton} mt-8`}>
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
