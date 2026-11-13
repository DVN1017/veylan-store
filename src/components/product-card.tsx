import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/produits/${product.slug}`} className="block">
        <div className="relative flex aspect-[4/4.7] items-end overflow-hidden rounded-sm p-6 transition duration-500 group-hover:-translate-y-1" style={{ background: product.cover }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
          {product.badge && <span className="absolute left-4 top-4 rounded-full bg-[#f8f7f4] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#34372f]">{product.badge}</span>}
          <div className="relative z-10 w-full">
            <span className="text-[10px] uppercase tracking-[.2em] text-white/75">{product.category}</span>
            <p className="mt-2 max-w-[220px] font-serif text-2xl leading-tight text-white">{product.title}</p>
          </div>
          <span className="absolute bottom-5 right-5 grid size-9 place-items-center rounded-full bg-white text-[#1c2823] transition group-hover:rotate-45"><ArrowUpRight size={16} /></span>
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h3 className="text-sm font-medium">{product.title}</h3>
          <p className="mt-1 max-w-[250px] text-xs leading-5 text-[var(--muted)]">{product.description}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold">{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}