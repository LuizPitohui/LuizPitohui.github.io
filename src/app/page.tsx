import Projects from "@/components/Projects";
import { ArrowIcon, GitHubIcon, LinkedInIcon, PinIcon } from "@/components/Icons";
import { profile, services, stack } from "@/data/profile";

const nav = [
  { href: "#servicos", label: "O que faço" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
];

// Serviços reais do docker-compose do JurisAgenda
const services_ps = [
  ["db", "postgres:16"],
  ["redis", "redis:7"],
  ["minio", "minio"],
  ["backend", "django"],
  ["celery", "worker"],
  ["celerybeat", "scheduler"],
  ["frontend", "next.js"],
  ["nginx", "nginx:1.25"],
];

function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div id={id}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Terminal() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 font-mono text-xs text-faint">~/jurisagenda</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6">
        <p>
          <span className="text-accent">$</span> docker compose ps --format table
        </p>
        <div className="mt-2 grid grid-cols-[auto_1fr_auto] gap-x-5 text-muted">
          <span className="text-faint">SERVICE</span>
          <span className="text-faint">IMAGE</span>
          <span className="text-faint">STATUS</span>
          {services_ps.map(([name, image]) => (
            <div key={name} className="contents">
              <span className="text-text">{name}</span>
              <span>{image}</span>
              <span className="text-ok">running</span>
            </div>
          ))}
        </div>
        <p className="mt-3">
          <span className="text-accent">$</span> <span className="cursor-blink text-text">▍</span>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#topo" className="font-display text-lg font-bold tracking-tight">
            LF<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-text">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Contato
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
                </span>
                Disponível para freelas e novas oportunidades
              </div>
              <p className="mt-8 font-mono text-sm text-muted">
                {profile.name} · {profile.role}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Sistemas web completos,{" "}
                <span className="text-accent">do banco de dados ao deploy.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                >
                  Ver projetos <ArrowIcon className="h-4 w-4 rotate-90" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
              </div>
              <p className="mt-8 inline-flex items-center gap-2 text-sm text-faint">
                <PinIcon className="h-4 w-4" /> {profile.location}
              </p>
            </div>
            <Terminal />
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionTitle id="servicos" eyebrow="O que faço" title="Do problema da empresa ao sistema rodando em produção." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                  <p className="font-mono text-xs text-faint">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle id="projetos" eyebrow="Projetos" title="Sistemas que construí, com o código aberto no GitHub." />
              <a
                href={`${profile.github}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                Todos os repositórios <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10">
              <Projects />
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
            <SectionTitle id="stack" eyebrow="Stack" title="Ferramentas que uso no dia a dia." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((g) => (
                <div key={g.group} className="bg-surface p-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{g.group}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="text-text/90">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:py-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={`Foto de ${profile.name}`}
              width={176}
              height={176}
              className="h-36 w-36 rounded-2xl border border-line object-cover grayscale-[30%] sm:h-44 sm:w-44"
            />
            <div>
              <SectionTitle id="sobre" eyebrow="Sobre" title={`Oi, eu sou o ${profile.shortName}.`} />
              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Construo sistemas web completos para empresas que precisam organizar processos e automatizar tarefas
                  repetitivas. Cuido do banco de dados, da regra de negócio, da interface e da infraestrutura.
                </p>
                <p>{profile.current}</p>
                <p>
                  Já entreguei sistemas em produção com Django e Next.js, incluindo deploy e administração de servidores
                  com Docker, Nginx e AWS EC2, além de automação de atendimento pelo WhatsApp.
                </p>
              </div>
              <dl className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line p-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-faint">Formação</dt>
                  <dd className="mt-1">{profile.education}</dd>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-faint">Base</dt>
                  <dd className="mt-1">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contato</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Tem um projeto em mente ou uma vaga aberta?
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Me chama no LinkedIn. Respondo propostas de freela, sistemas sob medida e oportunidades de trabalho.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-opacity hover:opacity-90"
                >
                  <LinkedInIcon className="h-4 w-4" /> Falar no LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" /> Ver GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-faint sm:px-6">
          <p>
            © {year} {profile.name}
          </p>
          <p className="font-mono text-xs">Feito com Next.js · publicado no GitHub Pages</p>
        </div>
      </footer>
    </>
  );
}
