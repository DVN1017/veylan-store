import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { BookCover } from "@/components/book-cover";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card group">
    <Link href={"/produits/" + product.slug} className="product-card-link">
      <div className="product-artwork">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <BookCover product={product} compact/>
        <span className="product-open"><ArrowUpRight size={18}/></span>
      </div>
    </Link>
    <div className="flex items-start justify-between gap-3 pt-5">
      <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[var(--accent-strong)]">{product.category}</p><h3 className="mt-2 text-base font-semibold tracking-tight">{product.title}</h3><p className="mt-2 max-w-[270px] text-xs leading-6 text-[var(--muted)]">{product.description}</p></div>
      <span className="shrink-0 pt-5 text-sm font-bold">{formatPrice(product.price)}</span>
    </div>
    <Link href={"/produits/" + product.slug} className="product-details-link">Découvrir le produit <ArrowUpRight size={14}/></Link>
  </article>;
}