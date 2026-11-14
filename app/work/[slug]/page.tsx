import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ConceptFrame } from "@/components/concept-frame";
import { ProposalLink } from "@/components/proposal-link";
import { getProject, projects } from "@/lib/content";
import { primaryButton } from "@/lib/styles";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="content" className="bg-white">
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <Link href="/#work" className="text-sm font-semibold text-blue-ink">
          All work
        </Link>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
          Concept project
        </p>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-ink">
          {project.industry}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{project.summary}</p>
        <p className="mt-4 text-sm text-muted">{project.stack.join(" · ")}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <ConceptFrame label={project.title} />
        </div>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight">
          What this kind of build covers
        </h2>
        <ul className="mt-5 space-y-3">
          {project.covers.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-6 text-muted">
          This is a concept project. It shows the shape of the work. A client
          case study replaces it once a project like this launches.
        </p>

        <div className="mt-12 rounded-2xl bg-navy px-6 py-8 text-white sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Want something in this shape?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
            Book a free consultation. You get a written proposal with three
            options within 48 hours.
          </p>
          <ProposalLink className={`${primaryButton} mt-6`} need="web-app">
            Get a proposal
          </ProposalLink>
        </div>
      </article>
    </main>
  );
}

function ProjectFallback() {
  return (
    <main id="content" className="bg-white" aria-busy="true">
      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
        <p className="sr-only">Loading project</p>
        <div className="h-4 w-24 rounded bg-mist" />
        <div className="mt-8 h-3 w-32 rounded bg-mist" />
        <div className="mt-6 h-12 w-4/5 rounded bg-mist" />
        <div className="mt-8 h-5 w-full rounded bg-mist" />
        <div className="mt-10 aspect-[16/10] rounded-2xl bg-mist" />
      </article>
    </main>
  );
}
