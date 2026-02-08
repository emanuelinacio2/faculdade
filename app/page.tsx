import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
            Projeto de Software
          </p>
          <h1 className="text-4xl font-[var(--font-display)] leading-tight text-black sm:text-5xl lg:text-6xl">
            Seu acervo de Projeto de Software, organizado e pronto para estudar.
          </h1>
          <p className="max-w-xl text-lg text-black/70">
            Guarde resumos, exercicios e ideias de aula em um painel leve.
            Adicione notas rapidas e consulte tudo quando precisar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/adicionar"
              className="rounded-full bg-[#f26b4f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#e45e45]"
            >
              Adicionar conteudo
            </Link>
            <Link
              href="/conteudos"
              className="rounded-full border border-black/20 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5 hover:border-black/40"
            >
              Ver conteudos
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">
              Offline
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">
              LocalStorage
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">
              Pessoal
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-[0_25px_70px_-45px_rgba(32,31,26,0.8)]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-black/10 bg-[#fff4e6] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Materia em foco
              </p>
              <p className="mt-2 text-lg font-[var(--font-display)]">
                Projeto de Software
              </p>
              <p className="mt-2 text-sm text-black/70">
                Resumos de requisitos, arquitetura e planejamento do projeto.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#f2f0ea] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Checklist
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>Definir escopo e objetivos do projeto</li>
                <li>Mapear stakeholders e requisitos</li>
                <li>Planejar entregas e riscos</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                Proxima prova
              </p>
              <ul className="mt-2 space-y-2 text-sm text-black/70">
                <li>Ciclo de vida e artefatos do projeto.</li>
                <li>Levantamento de requisitos e matriz de rastreabilidade.</li>
                <li>Estimativas, cronograma e caminho critico.</li>
                <li>Riscos, mitigacao e planos de contingencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Requisitos e Escopo",
            text: "Registre objetivos, restricoes e criterios de aceite.",
          },
          {
            title: "Arquitetura e Design",
            text: "Descreva componentes, integracoes e decisoes tecnicas.",
          },
          {
            title: "Planejamento e Entregas",
            text: "Quebre em sprints, marcos e indicadores de sucesso.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(32,31,26,0.7)]"
          >
            <h3 className="text-lg font-[var(--font-display)]">{item.title}</h3>
            <p className="mt-3 text-sm text-black/70">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-black/10 bg-[#1f2f2c] px-8 py-10 text-white shadow-[0_35px_70px_-50px_rgba(20,30,28,0.9)]">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Como usar
            </p>
            <h2 className="text-3xl font-[var(--font-display)]">
              Um fluxo simples para estudar melhor.
            </h2>
            <p className="text-sm text-white/70">
              Crie resumos, salve temas importantes e acompanhe o que falta
              revisar.
            </p>
          </div>
          <ol className="space-y-4 text-sm text-white/80">
            <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
              1. Adicione um conteudo novo com titulo e topico.
            </li>
            <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
              2. Inclua tags para achar rapido por fase do projeto.
            </li>
            <li className="rounded-2xl border border-white/20 bg-white/10 p-4">
              3. Volte para revisar antes das avaliacoes.
            </li>
          </ol>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">
            Exemplo salvo
          </p>
          <h3 className="mt-3 text-lg font-[var(--font-display)]">
            Visao geral do sistema e objetivos do projeto
          </h3>
          <p className="mt-3 text-sm text-black/70">
            Pontos chave: problema, usuarios, escopo e restricoes.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-black/60">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">
              Escopo
            </span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">
              Requisitos
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">
            Exemplo salvo
          </p>
          <h3 className="mt-3 text-lg font-[var(--font-display)]">
            Matriz de riscos e plano de mitigacao
          </h3>
          <p className="mt-3 text-sm text-black/70">
            Probabilidade, impacto e responsavel por cada risco.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-black/60">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">
              Riscos
            </span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">
              Planejamento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
