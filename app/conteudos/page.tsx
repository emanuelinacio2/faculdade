"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ContentItem,
  clearItems,
  loadItems,
  removeItem,
} from "../lib/adsContent";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function ContentsPage() {
  const [items, setItems] = useState<ContentItem[]>([]);

  const handleRemove = (id: string) => {
    const confirmed = window.confirm(
      "Deseja apagar este conteudo? Essa acao nao pode ser desfeita."
    );
    if (!confirmed) {
      return;
    }
    setItems(removeItem(id));
  };

  const handleClearAll = () => {
    const confirmed = window.confirm(
      "Apagar todos os conteudos salvos? Essa acao nao pode ser desfeita."
    );
    if (!confirmed) {
      return;
    }
    setItems(clearItems());
  };

  useEffect(() => {
    setItems(loadItems());
  }, []);

  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
            Conteudos salvos
          </p>
          <h1 className="text-3xl font-[var(--font-display)] text-black">
            Tudo o que voce ja registrou.
          </h1>
          <p className="text-sm text-black/70">
            Esses dados ficam salvos no navegador.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setItems(loadItems())}
            className="rounded-full border border-black/15 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5 hover:border-black/30"
          >
            Atualizar lista
          </button>
          <button
            onClick={handleClearAll}
            className="rounded-full border border-black/20 bg-black/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/80 transition hover:-translate-y-0.5 hover:border-black/40"
          >
            Apagar tudo
          </button>
          <Link
            href="/adicionar"
            className="rounded-full bg-[#f26b4f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#e45e45]"
          >
            Novo conteudo
          </Link>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 text-sm text-black/70">
          Nenhum conteudo salvo. Adicione o primeiro na pagina de cadastro.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(32,31,26,0.7)]"
            >
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-black/50">
                <span>{item.subject}</span>
                <span>{formatDate(item.createdAt)}</span>
              </div>
              <h2 className="mt-4 text-lg font-[var(--font-display)] text-black">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-black/70">{item.summary}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="rounded-full border border-black/15 bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-black/70 transition hover:-translate-y-0.5 hover:border-black/35"
                >
                  Apagar
                </button>
                {item.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-black/60">
                    {item.tags.map((tag) => (
                      <span
                        key={`${item.id}-${tag}`}
                        className="rounded-full border border-black/10 bg-white px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
