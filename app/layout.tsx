import type { Metadata } from "next";
import { Newsreader, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const textFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ADS Informacoes",
  description: "Acervo local para organizar estudos de ADS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${textFont.variable} antialiased`}>
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(120%_120%_at_50%_-10%,#fff8ee_0%,#f3e7d3_45%,#e8ddc8_100%)] text-[#201f1a]">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,107,79,0.35),transparent_65%)] blur-3xl float-slow" />
          <div className="pointer-events-none absolute right-10 top-40 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(63,91,85,0.35),transparent_65%)] blur-3xl float-slower" />
          <div className="pointer-events-none absolute -bottom-16 left-6 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(241,195,109,0.4),transparent_70%)] blur-3xl float-slow" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
            <header className="flex flex-col gap-6 rounded-3xl border border-black/10 bg-white/70 px-6 py-5 shadow-[0_20px_50px_-40px_rgba(32,31,26,0.6)] backdrop-blur md:flex-row md:items-center md:justify-between">
              <Link
                href="/"
                className="text-2xl font-[var(--font-display)] tracking-tight"
              >
                ADS Informacoes
              </Link>
              <nav className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
                <Link
                  href="/adicionar"
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  Adicionar
                </Link>
                <Link
                  href="/conteudos"
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  Conteudos
                </Link>
              </nav>
            </header>

            <main className="flex-1 py-12">{children}</main>

            <footer className="pb-6 text-xs uppercase tracking-[0.2em] text-black/40">
              Feito para estudos de ADS
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
