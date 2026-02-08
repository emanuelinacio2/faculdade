export type ContentItem = {
  id: string;
  title: string;
  subject: string;
  summary: string;
  tags: string[];
  createdAt: string;
};

export const seedItems: ContentItem[] = [
  {
    id: "seed-1",
    title: "Escopo e objetivos do projeto",
    subject: "Projeto de Software",
    summary: "Problema, usuarios, objetivos SMART e entregaveis iniciais.",
    tags: ["escopo", "objetivos", "entregas"],
    createdAt: "2026-02-05T10:00:00.000Z",
  },
  {
    id: "seed-2",
    title: "Mapa de stakeholders",
    subject: "Projeto de Software",
    summary: "Interesses, influencia, comunicacao e responsabilidades.",
    tags: ["stakeholders", "comunicacao", "responsabilidades"],
    createdAt: "2026-02-04T15:30:00.000Z",
  },
  {
    id: "seed-3",
    title: "Matriz de riscos",
    subject: "Projeto de Software",
    summary: "Probabilidade, impacto e plano de mitigacao por risco.",
    tags: ["riscos", "planejamento", "mitigacao"],
    createdAt: "2026-02-03T09:45:00.000Z",
  },
];

const STORAGE_KEY = "adsConteudos";

export function loadItems(): ContentItem[] {
  if (typeof window === "undefined") {
    return seedItems;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedItems));
    return seedItems;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("Invalid storage");
    }
    return parsed as ContentItem[];
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedItems));
    return seedItems;
  }
}

export function saveItems(items: ContentItem[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function removeItem(id: string): ContentItem[] {
  const items = loadItems();
  const next = items.filter((item) => item.id !== id);
  saveItems(next);
  return next;
}

export function clearItems(): ContentItem[] {
  saveItems([]);
  return [];
}
