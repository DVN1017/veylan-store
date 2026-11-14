import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><Link href="/" className="text-xl font-semibold tracking-[-.04em]">veylan <span className="font-normal text-[#d2b887]">store.</span></Link><p className="mt-4 max-w-sm text-sm leading-7 text-white/60">Des ressources numériques pour apprendre, créer et faire avancer vos projets.</p><p className="mt-6 text-[10px] uppercase tracking-[.16em] text-white/35">Apprendre avec intention. Évoluer avec confiance.</p></div>
      <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.16em] text-[#d2b887]">Explorer</p><div className="flex flex-col gap-3 text-sm text-white/70"><Link href="/boutique">La boutique</Link><Link href="/categories">Catégories</Link><Link href="/a-propos">Notre approche</Link></div></div>
      <div><p className="mb-4 text-xs font-semibold uppercase tracking-[.16em] text-[#d2b887]">Informations</p><div className="flex flex-col gap-3 text-sm text-white/70"><span>Contact : à configurer</span><span>Conditions de vente : à rédiger</span><span>Confidentialité : à rédiger</span></div></div>
    </div>
    <div className="container border-t border-white/10 py-5 text-xs text-white/45">© {new Date().getFullYear()} Veylan Store. Tous droits réservés.</div>
  </footer>;
}