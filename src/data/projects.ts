export type Category = "Django" | "Next.js" | "Docker" | "Tempo real" | "WhatsApp";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  categories: Category[];
  repo: string;
  featured?: boolean;
};

const gh = (name: string) => `https://github.com/LuizPitohui/${name}`;

export const projects: Project[] = [
  {
    slug: "jurisagenda",
    name: "JurisAgenda",
    kind: "Agenda jurídica",
    summary:
      "Prazos, audiências e follow-ups de um escritório de advocacia em um só lugar, com alertas em tempo real e painel de TV para a recepção.",
    highlights: [
      "Notificações e painel de TV ao vivo via WebSockets (Django Channels)",
      "Tarefas agendadas com Celery Beat para lembretes de prazos",
      "Documentos em MinIO com URLs pré-assinadas",
      "LGPD: painel público anônimo, anonimização de clientes e log de auditoria",
    ],
    stack: ["Django", "DRF", "Celery", "Channels", "PostgreSQL", "Redis", "MinIO", "Next.js", "Docker"],
    categories: ["Django", "Next.js", "Docker", "Tempo real"],
    repo: gh("jurisagenda"),
    featured: true,
  },
  {
    slug: "arasaka-nexus",
    name: "Arasaka Nexus",
    kind: "Biblioteca de mangás",
    summary:
      "Biblioteca digital com leitor integrado que busca e importa títulos da API do MangaDex, combinando catálogo local com streaming das páginas.",
    highlights: [
      "Importação assíncrona: a API responde 202 e o worker Celery processa em background com retry",
      "Busca híbrida no catálogo local e no MangaDex, sem duplicar resultados",
      "Leitor com páginas locais ou em streaming e navegação entre capítulos",
      "5 serviços orquestrados em Docker Compose",
    ],
    stack: ["Next.js 16", "React 19", "Django 6", "Celery", "Redis", "PostgreSQL", "Docker"],
    categories: ["Django", "Next.js", "Docker"],
    repo: gh("arasaka-nexus"),
    featured: true,
  },
  {
    slug: "whatsapp-bot",
    name: "WhatsApp Bot",
    kind: "Atendimento automatizado",
    summary:
      "Chatbot de triagem por menu que recebe as mensagens do WhatsApp, guarda o estado de cada atendimento e encaminha para a pessoa certa.",
    highlights: [
      "WPPConnect com Chromium headless gerenciando a sessão do WhatsApp",
      "Django como máquina de estados do atendimento, recebendo webhooks",
      "Histórico de atendimentos e colaboradores no PostgreSQL",
      "4 containers em rede interna Docker",
    ],
    stack: ["WPPConnect", "Node.js", "Django", "PostgreSQL", "Redis", "Docker"],
    categories: ["Django", "Docker", "WhatsApp"],
    repo: gh("whatsapp-bot"),
    featured: true,
  },
  {
    slug: "demolay-treasury",
    name: "DeMolay Treasury",
    kind: "Tesouraria e auditoria",
    summary:
      "Sistema de tesouraria com dashboard de KPIs, balancetes mensais oficiais em PDF e rastreamento de quem fez o quê, quando e de onde.",
    highlights: [
      "Balancete em PDF com saldo anterior calculado e campos de assinatura",
      "Logs de auditoria com usuário, data e IP, exportáveis em PDF",
      "Gráficos de fluxo mensal e distribuição por categoria",
      "Health check do servidor exibido no frontend",
    ],
    stack: ["Django REST", "ReportLab", "Next.js", "Tailwind", "Recharts", "Docker"],
    categories: ["Django", "Next.js", "Docker"],
    repo: gh("demolay-treasury"),
    featured: true,
  },
  {
    slug: "joias-platform",
    name: "Joias Platform",
    kind: "E-commerce headless",
    summary:
      "Loja de joias com catálogo dinâmico, busca com autocomplete, carrinho persistente e checkout que leva o pedido direto ao WhatsApp do vendedor.",
    highlights: [
      "Login por e-mail com JWT e área do cliente com endereços via CEP",
      "Histórico de pedidos com status visual (pendente → entregue)",
      "Checkout com mensagem pré-formatada e ID único do pedido",
      "Seed automático do catálogo para demonstração",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Django REST", "SimpleJWT", "Docker"],
    categories: ["Django", "Next.js", "Docker", "WhatsApp"],
    repo: gh("joias-platform"),
    featured: true,
  },
  {
    slug: "nortetech-site",
    name: "Norte Tech Site",
    kind: "Portal corporativo + ATS",
    summary:
      "Site institucional gerenciável pelo admin e sistema de recrutamento completo: vagas, banco de talentos e acompanhamento das candidaturas.",
    highlights: [
      "Carrossel, notícias, serviços e bases operacionais editáveis pelo admin",
      "Portal do candidato com currículo, formação e experiências",
      "Linha do tempo do status de cada candidatura",
      "Aceite de LGPD obrigatório antes de aplicar",
    ],
    stack: ["Django 6", "DRF", "Bootstrap 5", "Jazzmin"],
    categories: ["Django"],
    repo: gh("NorteTech-Site"),
    featured: true,
  },
  {
    slug: "arasaka-data-fortress",
    name: "Arasaka Data Fortress",
    kind: "Drive em nuvem",
    summary: "Armazenamento de arquivos com pastas, favoritos, lixeira, cota por usuário e download por URL pré-assinada do MinIO.",
    highlights: [],
    stack: ["Django Ninja", "React", "Vite", "MinIO", "PostgreSQL", "Docker"],
    categories: ["Django", "Docker"],
    repo: gh("arasaka-data-fortress"),
  },
  {
    slug: "norte-tech-bot",
    name: "Norte Tech Bot",
    kind: "Chatbot interno",
    summary: "Triagem interna de atendimentos via WhatsApp para a Norte Tech, com WPPConnect, Django, PostgreSQL e Redis em Docker.",
    highlights: [],
    stack: ["WPPConnect", "Django", "PostgreSQL", "Redis", "Docker"],
    categories: ["Django", "Docker", "WhatsApp"],
    repo: gh("norte-tech-bot"),
  },
  {
    slug: "norte-tech-frontend",
    name: "Norte Tech Frontend",
    kind: "Portal institucional",
    summary: "Frontend do portal da Norte Tech em Next.js: notícias, serviços, bases operacionais e contato vindos da API em Django.",
    highlights: [],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind"],
    categories: ["Next.js"],
    repo: gh("norte-tech-frontend"),
  },
  {
    slug: "projeto-transparencia",
    name: "Projeto Transparência",
    kind: "Prestação de contas",
    summary: "Portal público de entradas, saídas e saldo, com painel restrito por JWT para cadastrar as movimentações.",
    highlights: [],
    stack: ["Django REST", "SimpleJWT", "React", "Chart.js"],
    categories: ["Django"],
    repo: gh("projeto-transparencia"),
  },
  {
    slug: "dashboard-financeiro",
    name: "Dashboard Financeiro",
    kind: "Controle financeiro",
    summary: "Entradas e saídas com gráficos, filtros por período, histórico e tema claro/escuro.",
    highlights: [],
    stack: ["Django", "PostgreSQL", "Bootstrap", "Chart.js", "Docker"],
    categories: ["Django", "Docker"],
    repo: gh("dashboard-financeiro"),
  },
  {
    slug: "certificate-generator",
    name: "Certificate Generator",
    kind: "Certificados em PDF",
    summary: "Emissão automática de certificados de integração de segurança em PDF, com fontes embutidas e data por extenso.",
    highlights: [],
    stack: ["Django", "fpdf2"],
    categories: ["Django"],
    repo: gh("certificate-generator"),
  },
  {
    slug: "qrcode-generator",
    name: "QR Code Generator",
    kind: "Ferramenta de intranet",
    summary: "Gerador de QR Code para a intranet: geração em tempo real, histórico e download em PNG.",
    highlights: [],
    stack: ["Django", "qrcode", "Pillow"],
    categories: ["Django"],
    repo: gh("QrcodeGenerator"),
  },
  {
    slug: "admissao-digital",
    name: "Admissão Digital",
    kind: "Protótipo de RH",
    summary: "Protótipo navegável do fluxo do candidato: vagas, currículo virtual, inscrições, notificações e proposta.",
    highlights: [],
    stack: ["HTML", "CSS", "JavaScript"],
    categories: [],
    repo: gh("admissao-digital-norte-tech"),
  },
];

export const categories: Category[] = ["Django", "Next.js", "Docker", "Tempo real", "WhatsApp"];
