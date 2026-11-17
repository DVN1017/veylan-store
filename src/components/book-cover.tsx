import type { Product } from "@/lib/products";
import { Sparkles } from "lucide-react";

const palettes: Record<string, { bg: string; ink: string; accent: string; mark: string }> = {
  "ai-productivity-mastery": { bg: "#d7eeee", ink: "#153b42", accent: "#2699a1", mark: "01" },
  "business-sales-system": { bg: "#e4def2", ink: "#30234f", accent: "#8065b7", mark: "02" },
  "ai-creator-studio": { bg: "#f0dfcc", ink: "#54331e", accent: "#c47c38", mark: "03" },
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