# 🧭 Portfólio — Luiz Fernando Guedes

Site pessoal de portfólio: quem sou, o que faço, projetos com código aberto, stack e contato. Feito para recrutadores e clientes de freelance.

## 🚀 Tecnologias

- **Next.js 16** (App Router) com **export estático** (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** com tokens de cor próprios (paleta "Encontro das Águas")
- Fontes Space Grotesk, Inter e JetBrains Mono via `next/font`
- Deploy automático no **GitHub Pages** via GitHub Actions

## ✨ Seções

- **Hero** com status de disponibilidade e um terminal com os serviços reais do `docker-compose` do JurisAgenda
- **O que faço:** sistemas de gestão, interfaces web, infraestrutura e automação
- **Projetos:** 6 em destaque + outros, com **filtro por tecnologia** (Django, Next.js, Docker, Tempo real, WhatsApp)
- **Stack**, **Sobre** e **Contato**

## ✏️ Como editar o conteúdo

Todo o texto fica em dois arquivos, sem mexer no layout:

| Arquivo | O que tem |
|---------|-----------|
| `src/data/profile.ts` | Nome, resumo, links, formação, serviços e stack |
| `src/data/projects.ts` | Lista de projetos: descrição, destaques, stack, filtros e link |

Para destacar um projeto, use `featured: true`.

## 🔧 Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Build de produção (gera a pasta `out/`):

```bash
npm run build
```

> No Windows, se o build falhar com "path length ... exceeds max length", use `npx next build --webpack` ou mova o projeto para uma pasta com caminho mais curto.

## 🌐 Deploy

Cada push na `main` dispara `.github/workflows/deploy.yml`, que gera o site estático e publica no GitHub Pages. No repositório, em **Settings → Pages**, a origem deve estar como **GitHub Actions**.

Se o site for publicado em um subcaminho (ex.: `usuario.github.io/portfolio`), defina a variável `NEXT_PUBLIC_BASE_PATH=/portfolio` no passo de build.
