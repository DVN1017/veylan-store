import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { products, formatPrice } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.title, description: product.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <section className="container min-h-[70vh] py-16 md:py-24">
      <Link href="/#boutique" className="inline-flex items-center gap-2 text-xs text-[var(--muted)] hover:text-black"><ArrowLeft size={14} /> Retour à la boutique</Link>
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex aspect-[4/4.5] items-end rounded-sm p-8" style={{ background: product.cover }}>
          <div className="text-white"><p className="text-xs uppercase tracking-[.2em]">{product.category}</p><h1 className="mt-3 max-w-sm font-serif text-5xl leading-tight">{product.title}</h1><p className="mt-4 text-xs text-white/70">VE YLAN STORE / DIGITAL EDITION</p></div>
        </div>
        <div className="max-w-lg">
          <p className="eyebrow">Ressource numérique</p>
          <h2 className="section-title mt-4 text-4xl md:text-5xl">{product.title}</h2>
          <p className="mt-6 text-sm leading-7 text-[var(--muted)]">{product.description}</p>
          <p className="mt-8 text-2xl font-semibold">{formatPrice(product.price)}</p>
          <div className="mt-8 space-y-3 border-y border-[var(--line)] py-6 text-xs text-[#55574f]">
            <p className="flex items-center gap-3"><CheckCircle2 size={15} className="text-[#8b9b7e}" /> Produit numérique</p>
            <p className="flex items-center gap-3"><CheckCircle2 size={15} className="text-[#8b9b7e]" /> Paiement sécurisé à configurer</p>
            <p className="flex items-center gap-3"><CheckCircle2 size={15} className="text-[#8b9b7e]" /> Livraison numérique après achat à configurer</p>
          </div>
          <button disabled className="mt-8 flex w-full cursor-not-allowed items-center justify-center gap-3 bg-[#1c2823] px-6 py-4 text-xs font-semibold text-white opacity-60">Bientôt disponible <ArrowUpRight size={15} /></button>
          <p className="mt-3 text-[10px] leading-5 text-[var(--muted)]">Les fiches et tarifs affichés sont des exemples de démonstration. La vente sera activée après validation des produits et de leurs liens Chariow.</p>
        </div>
      </div>
    </section>
  );
}