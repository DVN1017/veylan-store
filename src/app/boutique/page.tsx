import type { Metadata } from "next";
import { ShopExplorer } from "@/components/shop-explorer";

export const metadata: Metadata = { title: "La boutique", description: "Explorez les ebooks, formations, guides et outils numériques Veylan." };
type Props = { searchParams: Promise<{ type?: string }> };
export default async function BoutiquePage({ searchParams }: Props) {
  const { type } = await searchParams;
  return <section className="container min-h-screen py-14 md:py-20">
    <div className="shop-page-intro"><p className="eyebrow">La bibliothèque Veylan</p><h1 className="display-title mt-5">Trouvez la ressource<br/><em>qui vous fait avancer.</em></h1><p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">Des contenus pratiques, pensés pour vous aider à apprendre une compétence, lancer une idée ou passer au niveau supérieur.</p><div className="shop-page-count"><span>APPRENDRE / CRÉER / ÉVOLUER</span><span>COLLECTION VEYLAN · 2026</span></div></div>
    <ShopExplorer initialCategory={type}/>
  </section>;
}
