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

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "maitriser-le-digital",
    title: "Maîtriser le digital",
    description: "Un parcours pratique pour structurer votre présence et développer vos compétences numériques.",
    category: "Guide",
    price: 7500,
    currency: "XOF",
    badge: "Nouveau",
    cover: "linear-gradient(145deg, #1f302c, #63786a)",
    featured: true,
  },
  {
    id: "prod-002",
    slug: "creer-son-premier-site",
    title: "Créer son premier site web",
    description: "Les bases pour passer de l'idée à un site web clair et professionnel.",
    category: "Formation",
    price: 15000,
    currency: "XOF",
    cover: "linear-gradient(145deg, #27344c, #8295b2)",
    featured: true,
  },
  {
    id: "prod-003",
    slug: "guide-productivite",
    title: "Le guide de la productivité",
    description: "Des méthodes simples pour mieux organiser son temps et avancer avec régularité.",
    category: "Ebook",
    price: 5000,
    currency: "XOF",
    cover: "linear-gradient(145deg, #6c493b, #c89b73)",
    featured: true,
  },
  {
    id: "prod-004",
    slug: "kit-createur-digital",
    title: "Kit du créateur digital",
    description: "Des modèles et ressources pour lancer vos premières offres numériques.",
    category: "Outil",
    price: 10000,
    currency: "XOF",
    cover: "linear-gradient(145deg, #45385e, #9886b5)",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price);
}