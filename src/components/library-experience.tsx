"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function LibraryExperience({ books }: { books: Product[] }) {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);
  const current = books[active];
  const move = (direction: number) => setActive((index) => (index + direction + books.length) % books.length);

  return <section className={opened ? "library-experience library-open" : "library-experience"}>
    <div className="library-atmosphere" aria-hidden="true" />
    <div className="library-topline"><span>VEYLAN DIGITAL <i /> BIBLIOTHÈQUE PRIVÉE</span><span>COLLECTION · 2026</span></div>

    <div className="library-closed-scene">
      <div className="library-intro">
        <p className="library-overline">LE SAVOIR PREND UNE AUTRE DIMENSION</p>
        <h1>Une bibliothèque<br /><em>à explorer.</em></h1>
        <p className="library-description">Des livres, des méthodes et des idées soigneusement réunis pour nourrir votre curiosité et faire grandir vos projets.</p>
        <button className="library-discover" onClick={() => setOpened(true)}>Découvrir <BookOpen size={17} /></button>
        <span className="library-hint">POUSSEZ LES PORTES. COMMENCEZ À EXPLORER.</span>
      </div>
      <div className="library-cabinet-wrap" aria-label="Bibliothèque ancienne à deux portes">
        <div className="library-cabinet">
          <div className="cabinet-crown" /><div className="cabinet-top-shadow" />
          <div className="cabinet-inner">
            <div className="cabinet-back">
              <div className="cabinet-shelf cabinet-shelf-one"><span /><span /><span /><span /><span /><span /></div>
              <div className="cabinet-shelf cabinet-shelf-two"><span /><span /><span /><span /><span /></div>
              <div className="cabinet-shelf cabinet-shelf-three"><span /><span /><span /><span /><span /><span /></div>
            </div>
            <div className="cabinet-door cabinet-door-left"><div className="door-panel door-panel-top" /><div className="door-panel door-panel-bottom" /><i className="door-handle" /></div>
            <div className="cabinet-door cabinet-door-right"><div className="door-panel door-panel-top" /><div className="door-panel door-panel-bottom" /><i className="door-handle" /></div>
          </div>
          <div className="cabinet-base" /><div className="cabinet-feet"><i /><i /></div>
        </div>
        <div className="library-floor-shadow" />
      </div>
    </div>\n    {opened && <div className="library-open-scene">
      <div className="library-open-heading">
        <p className="library-overline">LES ÉDITIONS VEYLAN · SÉLECTION DU MOMENT</p>
        <h2>Choisissez votre<br /><em>prochaine lecture.</em></h2>
        <p>Faites tourner le présentoir, découvrez chaque ouvrage et choisissez celui qui vous accompagnera.</p>
      </div>
      <div className="book-display-area">
        <div className="book-display-halo" />
        <div className="book-carousel">
          {books.map((book, index) => {
            const offset = (index - active + books.length) % books.length;
            const position = offset === 0 ? "book-position-center" : offset === 1 ? "book-position-right" : "book-position-left";
            return <button type="button" key={book.id} className={`library-book ${position} ${index === active ? "library-book-active" : ""}`} onClick={() => setActive(index)} aria-label={`Sélectionner ${book.title}`} aria-pressed={index === active}>
              <span className="physical-book"><span className="physical-book-spine" /><span className="physical-book-cover">
                <span className="physical-book-brand">VEYLAN DIGITAL <i>✦</i></span>
                <span className="physical-book-ornament"><i /><b /><i /></span>
                <strong>{book.title}</strong><small>{book.category === "Formation" ? "PARCOURS PRATIQUE" : "GUIDE · ÉDITION NUMÉRIQUE"}</small>
                <span className="physical-book-publisher">ÉDITIONS VEYLAN</span>
              </span></span>
            </button>;
          })}
        </div>
        <div className="rotating-bookstand"><div className="stand-top"><span /><span /><span /></div><div className="stand-column" /><div className="stand-foot" /><div className="stand-base" /></div>
        <div className="bookstand-caption">PRÉSENTOIR CENTRAL · COLLECTION VEYLAN</div>
      </div>
      <div className="library-selection">
        <div className="selection-count"><span>OUVRAGE {String(active + 1).padStart(2, "0")}</span><i /> <span>{String(books.length).padStart(2, "0")}</span></div>
        <h3>{current.title}</h3><p>{current.description}</p>
        <div className="selection-meta"><strong>{formatPrice(current.price)}</strong><span>{current.category} · Format numérique</span></div>
        <div className="selection-actions">
          <button className="book-turn-button" onClick={() => move(-1)} aria-label="Livre précédent"><ChevronLeft size={19} /></button>
          <button className="book-turn-button" onClick={() => move(1)} aria-label="Livre suivant"><ChevronRight size={19} /></button>
          <Link className="library-read-button" href={`/produits/${current.slug}`}>Découvrir ce livre <ArrowUpRight size={17} /></Link>
        </div>
        <button className="library-back-button" onClick={() => setOpened(false)}><ArrowLeft size={14} /> Revenir à la bibliothèque</button>
      </div>
    </div>}
    <div className="library-bottomline"><span>APPRENDRE AVEC ÉLÉGANCE</span><span>OUVRIR · EXPLORER · ÉVOLUER</span></div>
  </section>;
}
