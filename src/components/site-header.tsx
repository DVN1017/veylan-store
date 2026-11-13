"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#f8f7f4]/95 backdrop-blur">
      <div className="container flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Veylan Store, accueil">
          <span className="grid size-9 place-items-center rounded-full bg-[#1c2823] text-sm font-semibold text-[#e3c99c]">V</span>
          <span className="text-[17px] font-semibold tracking-[-.04em]">veylan<span className="font-normal text-[#9a7a4e]"> store.</span></span>
        </Link>

        <nav className="hidden items-center gap-9 text-[13px] text-[#55574f] md:flex">
          <Link className="transition hover:text-black" href="/#boutique">La boutique</Link>
          <Link className="transition hover:text-black" href="/#categories">Catégories</Link>
          <Link className="transition hover:text-black" href="/#apropos">À propos</Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/#boutique" className="flex items-center gap-2 rounded-full bg-[#1c2823] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#34463d]">
            <ShoppingBag size={14} /> Explorer la boutique <ArrowUpRight size={14} />
          </Link>
        </div>

        <button className="grid size-10 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="container flex flex-col gap-4 border-t border-[var(--line)] py-5 text-sm md:hidden">
          <Link onClick={() => setMenuOpen(false)} href="/#boutique">La boutique</Link>
          <Link onClick={() => setMenuOpen(false)} href="/#categories">Catégories</Link>
          <Link onClick={() => setMenuOpen(false)} href="/#apropos">À propos</Link>
        </nav>
      )}
    </header>
  );
}