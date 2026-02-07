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
    title: "Normalizacao e modelo relacional",
    subject: "Banco de Dados",
    summary: "Resumo das formas normais, chaves e exemplos de modelagem.",
    tags: ["bd", "normalizacao", "modelo"],
    createdAt: "2026-02-05T10:00:00.000Z",
  },
  {
    id: "seed-2",
    title: "Analise de complexidade",
    subject: "Algoritmos",
    summary: "Notacao O, casos medio e pior, com exemplos simples.",
    tags: ["algoritmos", "complexidade", "big-o"],
    createdAt: "2026-02-04T15:30:00.000Z",
  },
  {
    id: "seed-3",
    title: "Historia de usuario bem escrita",
    subject: "Engenharia de Requisitos",
    summary: "Estrutura clara para capturar objetivo e valor de negocio.",
    tags: ["requisitos", "produto", "usuario"],
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
