"use client";

import { useEffect, useState, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Sparkles, ShieldCheck, Zap } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function LibraryExperience({ books }: { books: Product[] }) {
  const safeBooks = books.slice(0, 3);
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.body.classList.add("immersive-home");
    return () => document.body.classList.remove("immersive-home");
  }, []);
  const current = safeBooks[active];
  if (!current) return null;

  const move = (step: number) => {
    setActive((value) => (value + step + safeBooks.length) % safeBooks.length);
    setTilt({ x: 0, y: 0 });
  };
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((event.clientY - rect.top) / rect.height - .5) * -11,
      y: ((event.clientX - rect.left) / rect.width - .5) * 13,
    });
  };

  return (
    <main className="v4-world">
      <div className="v4-backdrop" aria-hidden="true">
        <div className="v4-ceiling"/><div className="v4-shelf v4-shelf-left"/><div className="v4-shelf v4-shelf-right"/>
        <div className="v4-floor"/><div className="v4-light-column"/><div className="v4-dust"><i/><i/><i/><i/><i/><i/><i/></div>
      </div>
      <header className="v4-nav">
        <Link href="/" className="v4-logo"><span>V</span><b>VEYLAN <em>STORE</em><small>LA BIBLIOTHÈQUE DU SAVOIR</small></b></Link>
        <nav><Link className="active" href="/">Accueil</Link><Link href="/boutique">Livres & guides</Link><Link href="/boutique">Formations</Link><Link href="/a-propos">Notre vision</Link></nav>
        <Link href="/boutique" className="v4-nav-cta">Explorer <ArrowUpRight size={15}/></Link>
      </header>

      <section className="v4-hero">
        <div className="v4-copy">
          <div className="v4-kicker"><span/> UNE BIBLIOTHÈQUE POUR ALLER PLUS LOIN</div>
          <h1>Le savoir<br/>ouvre des<br/><em>possibles.</em></h1>
          <p>Des livres, des guides et des formations conçus pour vous aider à apprendre et passer à l'action.</p>
          <div className="v4-actions"><Link href="/boutique" className="v4-primary"><BookOpen size={17}/> Découvrir la collection <ArrowUpRight size={16}/></Link><a href="#selection" className="v4-secondary">Voir la sélection <ArrowDown size={15}/></a></div>
          <div className="v4-benefits"><span><Zap/> Du concret, pas du blabla</span><span><ShieldCheck/> Accès numérique</span><span><GraduationCap/> Apprendre à son rythme</span></div>
        </div>

        <div className="v4-gallery" onPointerMove={onMove} onPointerLeave={() => setTilt({x:0,y:0})}>
          <div className="v4-gallery-meta"><span>COLLECTION VEYLAN / 2026</span><span>OBJETS DE SAVOIR <i/></span></div>
          <div className="v4-portal"><div className="v4-portal-ring ring-a"/><div className="v4-portal-ring ring-b"/><div className="v4-portal-beam"/></div>
          <div className="v4-turntable"><div className="v4-turntable-top"/><div className="v4-turntable-core">V</div><div className="v4-turntable-glow"/></div>
          <div className="v4-books">
            {safeBooks.map((book,index)=>{
              const relative=(index-active+safeBooks.length)%safeBooks.length;
              const position=relative===0?"center":relative===1?"right":"left";
              return <button key={book.id} className={`v4-book v4-book-${position}`} type="button" onClick={()=>setActive(index)} aria-label={`Découvrir ${book.title}`} aria-pressed={active===index}>
                <span className="v4-book-3d" style={{transform:`rotateX(${tilt.x}deg) rotateY(${tilt.y+(active===index?-8:0)}deg)`}}>
                  <i className="v4-book-spine"/><span className="v4-book-face">
                    <span className="v4-book-brand">VEYLAN <b>✦</b></span><span className="v4-book-symbol"><i/><b/><em/></span>
                    <strong>{book.title}</strong><small>{book.category==="Formation"?"FORMATION PRATIQUE":"GUIDE NUMÉRIQUE"}</small><span className="v4-book-publisher">ÉDITIONS VEYLAN</span>
                  </span>
                </span>
              </button>
            })}
          </div>
          <div className="v4-gallery-controls"><button onClick={()=>move(-1)} aria-label="Précédent"><ArrowLeft/></button><span>{String(active+1).padStart(2,"0")} <i>/</i> {String(safeBooks.length).padStart(2,"0")}</span><button onClick={()=>move(1)} aria-label="Suivant"><ArrowRight/></button></div>
          <div className="v4-gallery-caption"><Sparkles size={13}/> SÉLECTIONNEZ UN LIVRE POUR LE DÉCOUVRIR</div>
        </div>
      </section>

      <section className="v4-trust"><div><BookOpen/><span><b>Des ressources utiles</b><small>Des savoirs à appliquer</small></span></div><div><Zap/><span><b>Accès immédiat</b><small>Vos contenus en numérique</small></span></div><div><ShieldCheck/><span><b>Paiement sécurisé</b><small>Un parcours simple et clair</small></span></div></section>

      <section className="v4-selected" id="selection">
        <div className="v4-selected-top"><span>01 — À LA UNE</span><span>VOTRE PROCHAINE LECTURE</span></div>
        <div className="v4-selected-main"><div><span className="v4-selected-label">LE LIVRE SÉLECTIONNÉ</span><h2>{current.title}</h2><p>{current.description}</p></div><div className="v4-selected-action"><b>{formatPrice(current.price)}</b><Link href={`/produits/${current.slug}`}>Découvrir le livre <ArrowUpRight size={16}/></Link></div></div>
      </section>
      <footer className="v4-footer"><span>VEYLAN STORE</span><span>APPRENDRE · COMPRENDRE · CRÉER</span><Link href="/boutique">Entrer dans la bibliothèque <ArrowUpRight size={14}/></Link></footer>
    </main>
  );
}
