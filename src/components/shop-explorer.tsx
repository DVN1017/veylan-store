"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { offers, formatOfferPrice } from "@/lib/offers";

export function ShopExplorer({ initialCategory }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(initialCategory && initialCategory !== "Formation" ? "Aucun résultat" : "Tout");
  const visible = useMemo(() => offers.filter((offer) => {
    const term = query.trim().toLocaleLowerCase("fr");
    return active !== "Aucun résultat" && (!term || (offer.title + " " + offer.description + " " + offer.tagline).toLocaleLowerCase("fr").includes(term));
  }), [active, query]);

  return <div>
    <div className="shop-toolbar">
      <div className="shop-tabs" aria-label="Filtrer par catégorie">
        <button onClick={() => setActive("Tout")} className={active === "Tout" ? "shop-tab shop-tab-active" : "shop-tab"} aria-pressed={active === "Tout"}>Toutes les offres</button>
        <button onClick={() => setActive("Aucun résultat")} className={active === "Aucun résultat" ? "shop-tab shop-tab-active" : "shop-tab"} aria-pressed={active === "Aucun résultat"}>Autres catégories</button>
      </div>
      <label className="shop-search"><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une formation..." aria-label="Rechercher une formation"/>{query && <button onClick={() => setQuery("")} aria-label="Effacer"><X size={16}/></button>}</label>
    </div>
    <div className="mb-6 flex items-center justify-between text-xs text-[var(--muted)]"><span>{visible.length} formation(s)</span><span>Sélection Veylan Academy</span></div>
    {visible.length ? <div className="offer-grid">{visible.map((offer) => <article key={offer.slug} className={"offer-card offer-" + offer.accent}>
      <div className="offer-card-top"><span>{offer.number} / VEYLAN ACADEMY</span><span aria-hidden="true">✦</span></div>
      <div className="offer-card-main"><span className="offer-eyebrow">{offer.eyebrow}</span><h3>{offer.title}</h3><p>{offer.tagline}</p></div>
      <div className="offer-card-bottom"><strong>{formatOfferPrice(offer.price)}</strong><Link href={"/formations/" + offer.slug}>Découvrir le programme ↗</Link></div>
      <span className="offer-card-watermark">{offer.number}</span>
    </article>)}</div> : <div className="rounded-2xl border border-dashed border-[var(--line)] px-6 py-20 text-center"><p className="font-serif text-2xl">Aucune formation trouvée.</p><button onClick={() => {setQuery("");setActive("Tout");}} className="mt-4 text-sm font-semibold">Voir toutes les formations</button></div>}
  </div>;
}
