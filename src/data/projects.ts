export type Category = "Django" | "Next.js" | "Docker" | "Tempo real" | "WhatsApp";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  categories: Category[];
  /** Sem repo: código privado. */
  repo?: string;
  /** Endereço público para ver funcionando. */
  demo?: string;
  /** Caminho em /public. Sem imagem, o card mostra um espaço reservado. */
  image?: string;
  imageAlt?: string;
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
    demo: "https://nexus.arasaka.fun/",
    image: "/projetos/arasaka-nexus.jpg",
    imageAlt: "Tela inicial do Arasaka Nexus com destaque e mangás recomendados",
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

/** Estudo de caso em destaque no topo da seção de projetos. Código privado: sem link de repositório. */
export const kiroshi = {
  name: "Kiroshi",
  kind: "Voz, vídeo e conversa auto-hospedados",
  tagline:
    "Um “Discord próprio” para um grupo fechado que precisava sair do Discord e manter os dados no próprio servidor.",
  status: ["Em produção", "+500 commits", "Código privado"],
  stack: ["Node.js", "TypeScript", "Fastify", "WebSocket", "Prisma", "PostgreSQL", "LiveKit", "Electron", "React", "Zustand", "Docker"],
  images: [
    { src: "/projetos/kiroshi-chamada.jpg", alt: "Kiroshi em uso: chamada com três transmissões de tela ao vivo e o bot de música tocando" },
    { src: "/projetos/kiroshi-transmissao.jpg", alt: "Kiroshi: transmissão de jogo em foco, com aviso de quadros por segundo para quem transmite" },
  ] as { src: string; alt: string }[],
  problem:
    "O grupo usava o Discord, e justamente o compartilhamento de tela e a câmera pararam de funcionar para eles. Queriam um substituto com os dados em servidor próprio e um instalador que cada pessoa roda uma vez.",
  solution: [
    "Canais de texto com markdown, anexos, reações, respostas, menções, busca e mensagens fixadas",
    "Voz e vídeo pelo LiveKit, com tela em até 1080p 60 fps, áudio do sistema e supressão de ruído local",
    "Várias transmissões de tela ao mesmo tempo na mesma chamada, e um bot de música que toca os pedidos do grupo",
    "Cargos com hierarquia e permissões granulares por canal, convites com validade e registro de auditoria",
    "Contas com 2FA (TOTP), senhas em Argon2id e tokens de renovação rotacionados a cada uso",
    "Instalador Windows que se atualiza em segundo plano, com bandeja, notificações nativas e reconexão automática",
  ],
  architecture: [
    { name: "shared", text: "Tipos, protocolo do gateway, permissões e validação, usados pelas duas pontas" },
    { name: "server", text: "Fastify (REST) + WebSocket com protocolo próprio + Prisma/Postgres + LiveKit" },
    { name: "desktop", text: "Electron com isolamento de contexto, React, Zustand e envio otimista de mensagens" },
  ],
  decisions: [
    {
      title: "Sinalização pelo túnel, mídia direto por IPv6",
      text: "O servidor fica atrás de CGNAT e o túnel HTTP não transporta UDP, que é o que o WebRTC usa. Testei de fora que o IPv6 público era alcançável e mandei a mídia direto por ele; quem não tem IPv6 cai num relay TURN só para si. A chamada ficou sem intermediário.",
    },
    {
      title: "A mesma função de permissões no servidor e no cliente",
      text: "Um pacote shared no monorepo define o bitfield de 64 bits e a ordem de resolução (cargos, overwrites de canal, membro). O servidor autoriza com ela e o cliente decide quais botões mostrar. Mudar o protocolo quebra a compilação das duas pontas ao mesmo tempo, em vez de virar bug em produção.",
    },
    {
      title: "Gateway com heartbeat e retomada de sessão",
      text: "App de voz fica aberto o dia todo: a máquina hiberna, o Wi-Fi troca, o túnel reinicia. Cada sessão guarda os últimos 512 eventos; ao reconectar, o cliente manda o último número de sequência e recebe só o que perdeu, sem recarregar a interface.",
    },
  ],
};
