export const profile = {
  name: "Luiz Fernando Guedes",
  shortName: "Luiz Fernando",
  role: "Desenvolvedor Fullstack",
  location: "Manaus, AM · Brasil",
  headline: "Sistemas web completos, do banco de dados ao deploy.",
  summary:
    "Desenvolvo sistemas de gestão e automação para empresas com Python/Django e Next.js: regra de negócio, API, interface e a infraestrutura que mantém tudo no ar.",
  github: "https://github.com/LuizPitohui",
  linkedin: "https://www.linkedin.com/in/luiz-fernando-da-silva-guedes-2a2110320/",
  avatar: "https://avatars.githubusercontent.com/u/130251261?v=4",
  education: "Engenharia da Computação · FUCAPI",
  current:
    "Hoje desenvolvo a plataforma de um escritório de advocacia: agenda de prazos, monitoramento processual e integração com IA, com adequação à LGPD.",
};

export const services = [
  {
    title: "Sistemas de gestão",
    text: "Backends em Django e Django REST Framework com regras de negócio, permissões, relatórios em PDF e trilha de auditoria.",
    tags: ["Django", "DRF", "PostgreSQL"],
  },
  {
    title: "Interfaces web",
    text: "Painéis, portais e e-commerce em Next.js e React com TypeScript e Tailwind, consumindo APIs próprias.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Infraestrutura e automação",
    text: "Tudo em Docker, com filas no Celery, tempo real com WebSockets, atendimento automatizado no WhatsApp e deploy em servidor Linux.",
    tags: ["Docker", "Celery", "WhatsApp"],
  },
];

export const stack = [
  { group: "Backend", items: ["Python", "Django", "Django REST Framework", "Django Ninja", "Celery", "Django Channels"] },
  { group: "Frontend", items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Zustand", "Recharts"] },
  { group: "Dados", items: ["PostgreSQL", "Redis", "MinIO / S3", "SQLite"] },
  { group: "Infra", items: ["Docker", "Docker Compose", "Nginx", "AWS EC2", "Linux", "Git"] },
];
