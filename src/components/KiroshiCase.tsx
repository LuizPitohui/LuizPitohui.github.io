import { kiroshi } from "@/data/projects";
import { asset } from "@/lib/asset";

function Shot({ index, label }: { index: number; label: string }) {
  const img = kiroshi.images[index];
  if (img) {
    return (
      <figure className="overflow-hidden rounded-xl border border-line bg-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(img.src)} alt={img.alt} loading="lazy" className="block h-auto w-full" />
      </figure>
    );
  }
  // Espaço reservado até a captura real chegar.
  return (
    <div className="bg-grid-soft flex aspect-[16/10] items-end rounded-xl border border-line bg-bg p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{label}</p>
    </div>
  );
}

export default function KiroshiCase() {

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface">
      {/* Cabeçalho */}
      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.35fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">01 · Estudo de caso</p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{kiroshi.name}</h3>
          <p className="mt-2 font-mono text-sm text-muted">{kiroshi.kind}</p>
          <p className="mt-5 text-lg leading-relaxed text-text/90">{kiroshi.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {kiroshi.status.map((s, i) => (
              <span
                key={s}
                className={`rounded-full border px-3 py-1 text-xs ${
                  i === 0 ? "border-ok/40 bg-ok/10 text-ok" : "border-line text-muted"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <Shot index={0} label="Kiroshi · chamada com tela compartilhada" />
      </div>

      {/* Problema e solução */}
      <div className="grid gap-px border-t border-line bg-line lg:grid-cols-2">
        <div className="bg-surface p-6 sm:p-10">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">O problema</h4>
          <p className="mt-4 leading-relaxed text-muted">{kiroshi.problem}</p>
          <div className="mt-8">
            <Shot index={1} label="Kiroshi · canal de texto" />
          </div>
        </div>
        <div className="bg-surface p-6 sm:p-10">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">A solução</h4>
          <ul className="mt-4 space-y-3">
            {kiroshi.solution.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="text-text/85">{s}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-faint">Arquitetura · monorepo</h4>
          <div className="mt-4 space-y-2">
            {kiroshi.architecture.map((a) => (
              <div key={a.name} className="grid grid-cols-[6.5rem_1fr] gap-3 rounded-lg border border-line bg-bg/60 p-3 text-sm">
                <code className="font-mono text-accent">{a.name}/</code>
                <span className="text-muted">{a.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {kiroshi.stack.map((s) => (
              <span key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decisões técnicas */}
      <div className="border-t border-line p-6 sm:p-10">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Decisões técnicas</h4>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {kiroshi.decisions.map((d, i) => (
            <div key={d.title}>
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h5 className="mt-2 font-display text-lg font-semibold leading-snug">{d.title}</h5>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
