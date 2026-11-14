"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const filters = ["Tout", "Ebook", "Guide", "Formation", "Outil"];

export function ShopExplorer() {
  const [active, setActive] = useState("Tout");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => products.filter((product) => {
    const matchesCategory = active === "Tout" || product.category === active;
    const term = query.trim().toLocaleLowerCase("fr");
    const matchesQuery = !term || (product.title + " " + product.description + " " + product.category).toLocaleLowerCase("fr").includes(term);
    return matchesCategory && matchesQuery;
  }), [active, query]);

  return <div>
    <div className="shop-toolbar">
      <div className="shop-tabs" aria-label="Filtrer par catégorie">
        {filters.map((filter) => <button key={filter} onClick={() => setActive(filter)} className={active === filter ? "shop-tab shop-tab-active" : "shop-tab"} aria-pressed={active === filter}>{filter}</button>)}
      </div>
      <label className="shop-search"><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une ressource..." aria-label="Rechercher un produit"/>{query && <button onClick={() => setQuery("")} aria-label="Effacer"><X size={16}/></button>}</label>
    </div>
    <div className="mb-6 flex items-center justify-between text-xs text-[var(--muted)]"><span>{visible.length} ressource(s)</span><span className="inline-flex items-center gap-2"><SlidersHorizontal size={14}/> Sélection Veylan</span></div>
    {visible.length ? <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{visible.map((product) => <ProductCard key={product.id} product={product}/>)}</div> : <div className="rounded-2xl border border-dashed border-[var(--line)] px-6 py-20 text-center"><p className="font-serif text-2xl">Aucun résultat pour cette recherche.</p><button onClick={() => {setQuery("");setActive("Tout");}} className="mt-4 text-sm font-semibold">Réinitialiser les filtres</button></div>}
  </div>;
}