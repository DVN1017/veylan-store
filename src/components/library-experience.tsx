"use client";

import { useEffect, useState, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function LibraryExperience({ books }: { books: Product[] }) {
  const safeBooks = books.slice(0, 3);
  useEffect(() => {\n    document.body.classList.add("immersive-home");\n    return () => document.body.classList.remove("immersive-home");\n  }, []);\n\n  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const current = safeBooks[active];

  if (!current) return null;

  const move = (step: number) => {
    setActive((index) => (index + step + safeBooks.length) % safeBooks.length);
    setTilt({ x: 0, y: 0 });
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - rect.top) / rect.height - 0.5) * -9,
      y: ((event.clientX - rect.left) / rect.width - 0.5) * 12,
    });
  };

  return (
    <section className="knowledge-world" aria-label="Bibliothèque immersive Veylan">
      <div className="knowledge-architecture" aria-hidden="true">
        <div className="library-dome" />
        <div className="library-shelves library-shelves-left" />
        <div className="library-shelves library-shelves-right" />
        <div className="library-floor" />
        <div className="library-light-beam" />
        <div className="library-stars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      </div>

      <header className="knowledge-nav">
        <Link href="/" className="knowledge-brand"><span className="brand-symbol">V</span><span>VEYLAN <b>STORE</b></span></Link>
        <span className="knowledge-nav-center"><i /> LA BIBLIOTHÈQUE DU SAVOIR</span>
        <Link href="/boutique" className="knowledge-nav-link">Explorer la boutique <ArrowUpRight size={15} /></Link>
      </header>

      <div className="knowledge-hero">
        <div className="knowledge-copy">
          <span className="knowledge-eyebrow"><Sparkles size={13} /> APPRENDRE · COMPRENDRE · CRÉER</span>
          <h1>Le savoir<br />en <em>mouvement.</em></h1>
          <p>Des livres et des formations pour transformer vos idées en compétences concrètes.</p>
          <a className="knowledge-explore" href="#collection">Explorer la collection <ArrowDown size={16} /></a>
          <div className="knowledge-proof"><span>01 — DES RESSOURCES SÉLECTIONNÉES</span><span>02 — UN SAVOIR À PORTÉE DE MAIN</span></div>
        </div>

        <div className="holo-stage" onPointerMove={onPointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
          <div className="holo-orbit holo-orbit-one" /><div className="holo-orbit holo-orbit-two" />
          <div className="holo-platform"><span /><i /><b /></div>
          <div className="holo-glass holo-glass-top" /><div className="holo-glass holo-glass-bottom" />
          <div className="holo-beam" />
          <div className="holo-book-row">
            {safeBooks.map((book, index) => {
              const offset = (index - active + safeBooks.length) % safeBooks.length;
              const position = offset === 0 ? "holo-book-main" : offset === 1 ? "holo-book-next" : "holo-book-prev";
              return (
                <button key={book.id} type="button" className={`holo-book ${position}`} onClick={() => { setActive(index); setTilt({ x: 0, y: 0 }); }} aria-label={`Voir ${book.title}`} aria-pressed={index === active}>
                  <span className="holo-book-object" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (index === active ? -8 : 0)}deg)` }}>
                    <span className="holo-book-spine" />
                    <span className="holo-book-cover">
                      <span className="holo-cover-brand">VEYLAN <i>✦</i></span>
                      <span className="holo-cover-art"><i /><b /><em /></span>
                      <strong>{book.title}</strong>
                      <small>{book.category === "Formation" ? "FORMATION PRATIQUE" : "GUIDE NUMÉRIQUE"}</small>
                      <span className="holo-cover-foot">ÉDITIONS VEYLAN</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="holo-caption"><span>HOLO / {String(active + 1).padStart(2, "0")}</span><i /> <span>COLLECTION VEYLAN</span></div>
          <div className="holo-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Livre précédent"><ArrowLeft size={17} /></button>
            <span>{String(active + 1).padStart(2, "0")} <i>/</i> {String(safeBooks.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => move(1)} aria-label="Livre suivant"><ArrowRight size={17} /></button>
          </div>
        </div>
      </div>

      <div className="knowledge-bottom">
        <span>UNE NOUVELLE FAÇON D'APPRENDRE</span>
        <span>FAITES DÉFILER POUR DÉCOUVRIR <ArrowDown size={13} /></span>
      </div>

      <section className="knowledge-selected" id="collection">
        <div className="selected-index">SÉLECTION DU MOMENT <span>{String(active + 1).padStart(2, "0")} / {String(safeBooks.length).padStart(2, "0")}</span></div>
        <div className="selected-content">
          <div><h2>{current.title}</h2><p>{current.description}</p></div>
          <div className="selected-buy"><span>{formatPrice(current.price)}</span><Link href={`/produits/${current.slug}`}>Voir le livre <ArrowUpRight size={16} /></Link></div>
        </div>
        <div className="selected-dots">{safeBooks.map((book, index) => <button key={book.id} onClick={() => setActive(index)} className={index === active ? "selected-dot active" : "selected-dot"} aria-label={`Sélectionner ${book.title}`} />)}</div>
      </section>
    </section>
  );
}
