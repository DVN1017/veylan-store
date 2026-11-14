import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Download, ShieldCheck } from "lucide-react";
import { products, formatPrice } from "@/lib/products";
import { BookCover } from "@/components/book-cover";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.title, description: product.description } : {};
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return <section className="container min-h-screen py-12 md:py-20">
    <Link href="/boutique" className="inline-flex items-center gap-2 text-xs text-[var(--muted)] hover:text-black"><ArrowLeft size={14}/> Retour à la boutique</Link>
    <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div className="relative grid min-h-[520px] place-items-center overflow-hidden rounded-[28px] bg-[#eee8dd]"><div className="absolute left-8 top-8 text-[10px] font-bold uppercase tracking-[.2em] text-[#9a7a4e]">VEYLAN DIGITAL EDITION / 2026</div><BookCover product={product}/><div className="absolute bottom-7 right-8 rounded-full border border-[#d5cabb] bg-white/70 px-4 py-2 text-[9px] font-bold uppercase tracking-[.16em]">Couverture de présentation</div></div>
      <div className="max-w-xl py-6"><p className="eyebrow">{product.category} · Ressource numérique</p><h1 className="display-title mt-5">{product.title}</h1><p className="mt-6 text-base leading-8 text-[var(--muted)]">{product.description}</p><div className="mt-8 flex items-end gap-3"><span className="text-3xl font-bold tracking-tight">{formatPrice(product.price)}</span><span className="pb-1 text-xs text-[var(--muted)]">Prix indicatif de démonstration</span></div>
        <div className="mt-8 space-y-4 border-y border-[var(--line)] py-6 text-sm text-[#55574f]"><p className="flex items-center gap-3"><CheckCircle2 size={17} className="text-[#8b9b7e]"/> Format numérique</p><p className="flex items-center gap-3"><Download size={17} className="text-[#8b9b7e]"/> Accès au fichier après achat (à configurer)</p><p className="flex items-center gap-3"><ShieldCheck size={17} className="text-[#8b9b7e]"/> Paiement via Chariow (intégration à venir)</p></div>
        <button disabled className="mt-8 flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full bg-[#1d2b26] px-7 py-5 text-sm font-bold text-white opacity-55">Bientôt disponible <ArrowUpRight size={17}/></button><p className="mt-4 text-xs leading-6 text-[var(--muted)]">Cette fiche est une maquette. Le produit, son contenu, son tarif définitif et son lien de paiement doivent être validés avant l'ouverture des ventes.</p>
      </div>
    </div>
  </section>;
}