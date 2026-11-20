import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const description =
  "Desenvolvedor fullstack em Manaus. Sistemas de gestão e automação com Python/Django, Next.js e Docker, do banco de dados ao deploy.";

export const metadata: Metadata = {
  title: "Luiz Fernando Guedes · Desenvolvedor Fullstack",
  description,
  openGraph: {
    title: "Luiz Fernando Guedes · Desenvolvedor Fullstack",
    description,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
