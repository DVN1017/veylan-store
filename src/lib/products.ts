export type ProductCategory = "Formation" | "Ebook" | "Guide" | "Outil";

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  currency: "XOF";
  badge?: string;
  cover: string;
  featured?: boolean;
  checkoutUrl?: string;
};

/**
 * Catalogue Veylan Store : les anciennes fiches ont été remplacées
 * par les trois parcours Veylan Academy.
 */
export const products: Product[] = [
  {
    id: "academy-001",
    slug: "ai-productivity-mastery",
    title: "AI Productivity Mastery",
    description: "Apprenez à utiliser l'intelligence artificielle pour gagner du temps, mieux organiser vos idées et produire des résultats concrets.",
    category: "Formation",
    price: 7500,
    currency: "XOF",
    badge: "Nouveau",
    cover: "linear-gradient(145deg, #153b42, #5ec5c8)",
    featured: true,
  },
  {
    id: "academy-002",
    slug: "business-sales-system",
    title: "Business Sales System",
    description: "Structurez vos offres, prospectez, suivez vos clients et pilotez vos ventes avec une méthode simple.",
    category: "Formation",
    price: 9900,
    currency: "XOF",
    badge: "Nouveau",
    cover: "linear-gradient(145deg, #30234f, #9b7ce0)",
    featured: true,
  },
  {
    id: "academy-003",
    slug: "ai-creator-studio",
    title: "AI Creator Studio",
    description: "Concevez des visuels, vidéos courtes et publicités avec un workflow créatif assisté par l'intelligence artificielle.",
    category: "Formation",
    price: 9900,
    currency: "XOF",
    badge: "Nouveau",
    cover: "linear-gradient(145deg, #54331e, #e6a34b)",
    featured: true,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price);
}
