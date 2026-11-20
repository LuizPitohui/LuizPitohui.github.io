"use client";

import { useState } from "react";
import { categories, projects, type Category, type Project } from "@/data/projects";
import { ArrowIcon } from "./Icons";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{children}</span>
  );
}

function FeaturedCard({ p, index }: { p: Project; index: number }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")} · {p.kind}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
        </div>
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Código de ${p.name} no GitHub`}
          className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors group-hover:border-accent group-hover:text-accent"
        >
          <ArrowIcon className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span className="text-text/85">{h}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </article>
  );
}

function CompactCard({ p }: { p: Project }) {
  return (
    <a
      href={p.repo}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-xl border border-line bg-surface/60 p-5 transition-colors hover:border-line-strong hover:bg-surface"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-display font-semibold">{p.name}</h4>
        <ArrowIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
      </div>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">{p.kind}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category | "Todos">("Todos");
  const match = (p: Project) => filter === "Todos" || p.categories.includes(filter);
  const featured = projects.filter((p) => p.featured && match(p));
  const others = projects.filter((p) => !p.featured && match(p));

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por tecnologia">
        {(["Todos", ...categories] as const).map((c) => {
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                active
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-muted hover:border-line-strong hover:text-text"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} p={p} index={projects.indexOf(p)} />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <>
          <h3 className="mt-14 font-display text-lg font-semibold text-muted">Outros projetos</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <CompactCard key={p.slug} p={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
