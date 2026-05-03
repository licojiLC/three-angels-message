export type QuoteItem = {
  author: string;
  text: string;
  reference?: string;
};

export const quotes: QuoteItem[] = [
  {
    author: "Jesus Cristo",
    text: "Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
    reference: "João 14:6",
  },
  {
    author: "Apocalipse 14:7",
    text: "Temei a Deus, e dai-lhe glória; porque é vinda a hora do seu juízo.",
    reference: "Primeira Mensagem Angélica",
  },
  {
    author: "Salmos 119:105",
    text: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
    reference: "Salmos 119",
  },
  {
    author: "Mateus 24:14",
    text: "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações.",
    reference: "Grande Comissão Profética",
  },
  {
    author: "Apocalipse 14:12",
    text: "Aqui está a paciência dos santos; aqui estão os que guardam os mandamentos de Deus e a fé de Jesus.",
    reference: "Terceira Mensagem Angélica",
  },
  {
    author: "Isaías 40:31",
    text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias.",
    reference: "Isaías 40",
  },
];

export function getQuotes(): QuoteItem[] {
  return quotes;
}

export function getFeaturedQuotes(limit = 3): QuoteItem[] {
  return quotes.slice(0, limit);
}
