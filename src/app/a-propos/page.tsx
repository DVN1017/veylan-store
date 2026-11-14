import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Compass, HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "À propos", description: "Découvrez la vision et les engagements de Veylan Store." };

const values = [
  { icon: Compass, number: "01", title: "Clarté", text: "Vous comprenez ce que contient chaque ressource, à qui elle s'adresse et ce qu'elle peut vous aider à faire." },
  { icon: Lightbulb, number: "02", title: "Utilité", text: "Des contenus conçus autour de situations concrètes, avec des étapes et des exemples applicables." },
  { icon: HeartHandshake, number: "03", title: "Confiance", text: "Des prix affichés clairement, de vraies informations et aucun faux avis client." },
];

export default function AboutPage() {
  return <>
    <section className="about-hero">
      <div className="container about-hero-inner">
        <div className="about-copy">
          <p className="about-kicker"><Sparkles size={14}/> QUI NOUS SOMMES</p>
          <h1>Le prochain déclic<br/>peut commencer <em>ici.</em></h1>
          <p>Veylan Store rassemble des ressources numériques pour celles et ceux qui veulent apprendre une compétence, lancer une idée ou faire avancer un projet.</p>
          <div className="about-actions">
            <Link href="/boutique" className="about-primary">Découvrir les ressources <ArrowUpRight size={17}/></Link>
            <a href="#notre-approche" className="about-secondary">Notre approche <ArrowDownRight size={16}/></a>
          </div>
        </div>
        <div className="about-visual" aria-label="Notre méthode : apprendre, appliquer, progresser">
          <div className="about-visual-top"><span>LA MÉTHODE VEYLAN</span><span>01 — 03</span></div>
          <div className="about-steps">
            <div className="about-step about-step-one"><span>01</span><strong>Apprendre.</strong><small>Comprendre l'essentiel.</small></div>
            <div className="about-step about-step-two"><span>02</span><strong>Appliquer.</strong><small>Passer à l'action.</small></div>
            <div className="about-step about-step-three"><span>03</span><strong>Progresser.</strong><small>Construire la suite.</small></div>
          </div>
          <div className="about-visual-bottom">DU CONTENU UTILE. DES ACTIONS CONCRÈTES.</div>
        </div>
      </div>
    </section>
    <section id="notre-approche" className="container about-intro">
      <div><p className="eyebrow">Notre raison d'être</p><h2>Pas juste accumuler<br/>des informations.<br/><em>Avancer pour de vrai.</em></h2></div>
      <div className="about-intro-copy"><p>Internet ne manque pas de contenu. Ce qui manque souvent, c'est le bon guide au bon moment : une ressource claire, bien structurée, qui aide à savoir quoi faire ensuite.</p><p>C'est l'idée derrière Veylan Store. Proposer des ebooks, des formations et des outils numériques qui transforment l'apprentissage en action.</p><Link href="/boutique" className="about-inline-link">Trouver une ressource adaptée <ArrowUpRight size={16}/></Link></div>
    </section>
    <section className="about-values-wrap"><div className="container about-values">
      <div className="about-values-heading"><p className="eyebrow">Ce que vous pouvez attendre de nous</p><h2>Trois engagements.<br/><em>Sans compromis.</em></h2></div>
      <div className="about-value-grid">{values.map(({icon:Icon,number,title,text})=><article className="about-value" key={number}><div className="about-value-top"><span>{number}</span><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="container about-final">
      <div><p className="eyebrow">À vous de jouer</p><h2>Votre prochaine étape<br/><em>commence maintenant.</em></h2><p>Explorez la boutique et choisissez une ressource qui correspond à votre objectif du moment.</p></div>
      <Link href="/boutique" className="about-primary">Explorer la boutique <ArrowUpRight size={17}/></Link>
    </section>
  </>;
}