"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { ContentItem, loadItems, saveItems } from "../lib/adsContent";

const emptyForm = {
  title: "",
  subject: "",
  summary: "",
  tags: "",
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function AddContentPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  const handleChange = (field: keyof typeof emptyForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");

    if (!form.title.trim() || !form.summary.trim()) {
      setStatus("Preencha titulo e resumo.");
      return;
    }

    const newItem: ContentItem = {
      id: createId(),
      title: form.title.trim(),
      subject: form.subject.trim() || "Geral",
      summary: form.summary.trim(),
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      createdAt: new Date().toISOString(),
    };

    const items = loadItems();
    const updated = [newItem, ...items];
    saveItems(updated);
    setForm(emptyForm);
    setStatus("Conteudo salvo com sucesso.");
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_25px_70px_-50px_rgba(32,31,26,0.8)]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
            Adicionar conteudo
          </p>
          <h1 className="text-3xl font-[var(--font-display)] text-black">
            Cadastre novos resumos e ideias.
          </h1>
          <p className="text-sm text-black/70">
            Tudo fica salvo no navegador e pode ser visto na pagina de
            conteudos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              Titulo
            </label>
            <input
              value={form.title}
              onChange={handleChange("title")}
              className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-black/30"
              placeholder="Ex: Normalizacao em 3FN"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              Materia
            </label>
            <input
              value={form.subject}
              onChange={handleChange("subject")}
              className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-black/30"
              placeholder="Ex: Banco de Dados"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              Resumo
            </label>
            <textarea
              value={form.summary}
              onChange={handleChange("summary")}
              className="min-h-[120px] w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-black/30"
              placeholder="Escreva os pontos principais, passos ou conceitos."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              Tags
            </label>
            <input
              value={form.tags}
              onChange={handleChange("tags")}
              className="w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-black/30"
              placeholder="Ex: bd, normalizacao, sql"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#f26b4f] py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#e45e45]"
          >
            Salvar conteudo
          </button>

          {status ? (
            <p className="text-sm font-semibold text-black/70">{status}</p>
          ) : null}
        </form>
      </div>

      <aside className="space-y-6">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <h2 className="text-lg font-[var(--font-display)]">
            Dica para organizar
          </h2>
          <p className="mt-3 text-sm text-black/70">
            Mantenha um padrao de tags. Assim voce encontra rapido por tema,
            prova ou projeto.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-[#1f2f2c] p-6 text-white">
          <h2 className="text-lg font-[var(--font-display)]">Proxima etapa</h2>
          <p className="mt-3 text-sm text-white/70">
            Veja todos os conteudos e filtre por materia na pagina de
            listagem.
          </p>
          <Link
            href="/conteudos"
            className="mt-4 inline-flex rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            Ir para conteudos
          </Link>
        </div>
      </aside>
    </section>
  );
}
