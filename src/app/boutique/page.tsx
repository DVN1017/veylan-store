import type { Metadata } from "next";
import { ShopExplorer } from "@/components/shop-explorer";

export const metadata: Metadata = { title: "La boutique", description: "Explorez les ebooks, formations, guides et outils numériques Veylan." };

export default function BoutiquePage() {
  return <section className="container min-h-screen py-14 md:py-20">
    <div className="mb-12 max-w-3xl"><p className="eyebrow">La bibliothèque Veylan</p><h1 className="display-title mt-5">Trouvez la ressource<br/><em>qui vous fait avancer.</em></h1><p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">Des contenus pratiques, pensés pour vous aider à apprendre une compétence, lancer une idée ou passer au niveau supérieur.</p></div>
    <ShopExplorer/>
  </section>;
}