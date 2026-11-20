"use client";

import { useState } from "react";
import { categories, projects, type Category, type Project } from "@/data/projects";
import { asset } from "@/lib/asset";
import { ArrowIcon, GitHubIcon } from "./Icons";
import KiroshiCase from "./KiroshiCase";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{children}</span>
  );
}

function Cover({ p }: { p: Project }) {
  if (p.image) {
    return (
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(p.image)} alt={p.imageAlt ?? p.name} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
    );
  }
  // Sem captura real, o card fica só com o texto.
  return null;
}

function FeaturedCard({ p, number }: { p: Project; number: number }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong">
      <Cover p={p} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
      <div>
        <p className="font-mono text-xs text-accent">
          {String(number).padStart(2, "0")} · {p.kind}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
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
      <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5 text-sm">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Ver funcionando <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        )}
        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-3.5 w-3.5" /> Código
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-line px-4 py-2 text-faint">Código privado</span>
        )}
      </div>
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

      {(filter === "Todos" || filter === "Tempo real" || filter === "Docker") && (
        <div className="mt-8">
          <KiroshiCase />
        </div>
      )}

      {featured.length > 0 && (
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} p={p} number={projects.filter((x) => x.featured).indexOf(p) + 2} />
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
