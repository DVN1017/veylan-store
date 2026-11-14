import type { Product } from "@/lib/products";
import { Sparkles } from "lucide-react";

const palettes: Record<string, { bg: string; ink: string; accent: string; mark: string }> = {
  "maitriser-le-digital": { bg: "#e9d8bd", ink: "#172a25", accent: "#a65e3d", mark: "01" },
  "creer-son-premier-site": { bg: "#dce5f0", ink: "#17243a", accent: "#4775a4", mark: "02" },
  "guide-productivite": { bg: "#ead9d1", ink: "#4a2d2a", accent: "#b36b52", mark: "03" },
  "kit-createur-digital": { bg: "#e5dff0", ink: "#342746", accent: "#8165a8", mark: "04" },
};

export function BookCover({ product, compact = false }: { product: Product; compact?: boolean }) {
  const p = palettes[product.slug] ?? palettes["maitriser-le-digital"];
  return <div className={"book-scene " + (compact ? "book-scene-compact" : "")}>
    <div className="book-object" style={{ "--cover-bg": p.bg, "--cover-ink": p.ink, "--cover-accent": p.accent } as React.CSSProperties}>
      <div className="book-topline"><span>VEYLAN / ÉDITIONS</span><span>{p.mark}</span></div>
      <div className="book-art" aria-hidden="true"><span/><i/><b/></div>
      <div className="book-copy"><span className="book-category">{product.category} · ÉDITION NUMÉRIQUE</span><h3>{product.title}</h3><p>APPRENDRE · CONSTRUIRE · ÉVOLUER</p></div>
      <div className="book-bottom"><span>VEYLAN STORE</span><Sparkles size={14}/></div>
    </div>
    <div className="book-shadow"/>
  </div>;
}