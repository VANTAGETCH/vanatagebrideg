import Image from "next/image";
import Link from "next/link";
import { ConceptFrame } from "@/components/concept-frame";
import { EnquiryForm } from "@/components/enquiry-form";
import { ProposalLink } from "@/components/proposal-link";
import {
  carePlans,
  faqs,
  guarantees,
  industries,
  outcomes,
  packages,
  projects,
  services,
  steps,
  trust,
} from "@/lib/content";
import {
  formatPhone,
  phoneHref,
  site,
  whatsappHref,
} from "@/lib/site";
import {
  darkOutlineButton,
  lightOutlineButton,
  primaryButton,
  whiteButton,
} from "@/lib/styles";

const whatsappText =
  "Hello Vantage Bridge, I would like to talk about a website.";

export function HomePage() {
  const call = phoneHref(site.phone);
  const phoneLabel = formatPhone(site.phone);
  const whatsapp = whatsappHref(site.phone, whatsappText);

  return (
    <main id="content">
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:pt-12 lg:pb-16 lg:pt-16">
          <div className="relative min-h-[34rem] overflow-hidden rounded-2xl sm:min-h-[38rem]">
            <Image
              src="/photos/hero.jpg"
              alt="A designer building a website layout on a desktop screen."
              fill
              preload
              quality={90}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[68%_center]"
            />
            <div className="absolute inset-0 bg-[#07111f]/72 sm:bg-transparent sm:bg-gradient-to-r sm:from-[#07111f]/92 sm:via-[#07111f]/72 sm:to-[#07111f]/25" />
            <div className="relative z-10 flex min-h-[34rem] max-w-2xl flex-col justify-center px-6 py-12 sm:min-h-[38rem] sm:px-10 lg:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Web development company in Accra, Ghana
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="#services"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy"
                >
                  Websites
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white"
                >
                  Online stores
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white"
                >
                  Web apps
                </a>
              </div>
              <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
                Websites that bring Ghanaian businesses customers.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Fast, mobile-first business websites that rank on Google and turn
                visitors into calls, bookings and enquiries, built on a fixed
                price and a fixed launch date.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ProposalLink need="business-website" className={primaryButton}>
                  Start my website
                </ProposalLink>
                <a href="#start" className={darkOutlineButton}>
                  Book a free consultation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-16 lg:pb-20">
          <h2 className="text-lg font-semibold">Our four guarantees</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => (
              <li key={item.title} className="flex gap-3">
                <Check className="mt-0.5 text-[#8eb6ff]" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
              A website that looks good but brings no customers is an expense,
              not an investment.
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted lg:pt-2">
              Many business sites in Ghana are slow on phones, hard to find on
              Google, and impossible for the owner to update. We build sites
              that load fast, rank well, and turn visitors into calls, bookings
              and sales. Then we stay on to keep them that way.
            </p>
          </div>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
            From your first website to the systems that run your business.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <p className="text-sm font-semibold text-blue-ink">
                  {service.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Industries</SectionLabel>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
                Built around how your industry sells.
              </h2>
            </div>
            <ProposalLink className={lightOutlineButton}>
              Discuss your project
            </ProposalLink>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.number}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <p className="text-sm font-semibold text-blue-ink">
                  {industry.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{industry.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {industry.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-mist px-3 py-1 text-xs text-muted"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-24 bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <SectionLabel>Packages</SectionLabel>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
            Clear scope. Fixed price. No surprises.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Every business is different, so we price each project after a free
            discovery call. Your written proposal gives you three options, each
            with a fixed price, timeline and scope agreed before we start.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.audience}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 text-blue-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ProposalLink
                  need={item.need}
                  className={`${lightOutlineButton} mt-6 w-full`}
                >
                  Get a proposal
                </ProposalLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <SectionLabel>Work</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            See what we build.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Concept projects show what we can build for your industry. Client
            case studies replace them as projects launch.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <ConceptFrame label={project.title} />
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Concept project
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-ink">
                    {project.industry}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-xs text-muted">
                    {project.stack.join(" · ")}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-blue-ink"
                  >
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
                Most business websites go live in about six weeks, with you
                approving every stage.
              </h2>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-line">
              <Image
                src="/photos/review.jpg"
                alt="Two colleagues reviewing a website design on a laptop."
                width={2000}
                height={1500}
                quality={90}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </div>
          <ol className="mt-12 grid gap-8 border-line sm:grid-cols-2 lg:grid-cols-6 lg:border-t lg:pt-6">
            {steps.map((step) => (
              <li key={step.title} className="border-t border-line pt-4 lg:border-t-0 lg:pt-0">
                <p className="text-xs font-semibold text-blue-ink">{step.when}</p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
          <SectionLabel>Care plans</SectionLabel>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Launch is the start, not the end.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            Every project includes up to three months of Care Plus. After that,
            a monthly plan keeps your site secure and up to date for far less
            than hiring in-house IT staff.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {carePlans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-white/10 bg-navy-2 p-6"
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{plan.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
              Questions clients ask before they start.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Something else on your mind?{" "}
              <a href="#start" className="font-semibold text-blue-ink">
                Ask us directly.
              </a>
            </p>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-line py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-xl leading-none text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-xl pt-3 text-sm leading-6 text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Ready for a website that brings you customers?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
              Book a free 30-minute consultation. You get a written proposal
              with three options within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#start" className={whiteButton}>
              Book a free consultation
            </a>
            {whatsapp ? (
              <a
                href={whatsapp}
                className="inline-flex items-center justify-center rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section id="start" className="scroll-mt-24 bg-mist">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <div>
            <figure className="mb-8 overflow-hidden rounded-2xl border border-line">
              <Image
                src="/photos/consult.jpg"
                alt="A consultant at a desk with a website wireframe on a laptop."
                width={2000}
                height={1500}
                quality={90}
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
            <SectionLabel>Start a project</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
              Tell us what you want to build.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              We reply within one business day to book your free consultation,
              by video call or in person by appointment.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              {call ? (
                <div>
                  <dt className="font-semibold">Call</dt>
                  <dd>
                    <a href={call} className="text-blue-ink">
                      {phoneLabel}
                    </a>
                  </dd>
                </div>
              ) : null}
              {whatsapp ? (
                <div>
                  <dt className="font-semibold">WhatsApp</dt>
                  <dd>
                    <a href={whatsapp} className="text-blue-ink">
                      {phoneLabel}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-blue-ink">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Office</dt>
                <dd className="text-muted">
                  {site.addressLine ? `${site.addressLine}, ` : ""}
                  {site.city} · visits by appointment
                </dd>
              </div>
            </dl>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-ink">
      {children}
    </p>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`size-5 shrink-0 ${className ?? ""}`}
    >
      <path
        fill="currentColor"
        d="M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm3.72 5.9-4.2 5.35a.75.75 0 0 1-1.14.05L6.2 10.9a.75.75 0 1 1 1.06-1.06l1.6 1.6 3.66-4.66a.75.75 0 0 1 1.2.87Z"
      />
    </svg>
  );
}
