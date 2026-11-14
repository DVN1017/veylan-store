import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Download, ShieldCheck, Sparkles } from "lucide-react";
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
  return <section className="container product-detail-page">
    <Link href="/boutique" className="product-back"><ArrowLeft size={15}/> Retour à la boutique</Link>
    <div className="product-detail-grid">
      <div className="product-detail-art">
        <div className="product-detail-art-top"><span>VEYLAN / DIGITAL EDITIONS</span><span>COLLECTION 2026</span></div>
        <div className="product-detail-cover"><BookCover product={product}/></div>
        <div className="product-detail-art-bottom"><span>APPRENDRE AVEC INTENTION</span><Sparkles size={16}/></div>
      </div>
      <div className="product-detail-copy">
        <p className="eyebrow">{product.category} <span className="mx-2 text-[#b9a17d]">/</span> RESSOURCE NUMÉRIQUE</p>
        <h1>{product.title}</h1>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-price"><strong>{formatPrice(product.price)}</strong><span>Prix indicatif — fiche de démonstration</span></div>
        <div className="product-detail-includes">
          <div><span><CheckCircle2 size={17}/></span><p><b>Un contenu ciblé</b><small>La description précise l'objectif de cette ressource.</small></p></div>
          <div><span><Download size={17}/></span><p><b>Une ressource numérique</b><small>Les modalités exactes de livraison restent à confirmer.</small></p></div>
          <div><span><ShieldCheck size={17}/></span><p><b>Achat en toute transparence</b><small>Le paiement sécurisé sera activé après configuration de Chariow.</small></p></div>
        </div>
        <button disabled className="product-buy-disabled">Ouverture des ventes en préparation <ArrowUpRight size={17}/></button>
        <p className="product-demo-note">Cette fiche est encore une présentation de travail. Le contenu final, le tarif, le lien de paiement et la livraison doivent être validés avant toute vente.</p>
        <div className="product-detail-footnote"><span>VEYLAN STORE</span><span>LEARN · BUILD · GROW</span></div>
      </div>
    </div>
  </section>;
}
