import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, ChevronRight, GraduationCap, Sparkles, Zap } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { TestimonialSection } from "@/components/testimonial-section";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const heroProduct = products[0];
  return <>
    <section className="hero-modern">
      <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="pulse-dot"/><span>LA BOUTIQUE DES ESPRITS QUI AVANCENT</span></div>
          <h1>Vos idées méritent<br/>de devenir <em>réalité.</em></h1>
          <p>Des ebooks, formations et outils numériques pour apprendre plus vite, créer avec méthode et faire grandir vos projets.</p>
          <div className="hero-actions"><Link href="/boutique" className="button-light">Explorer les ressources <ArrowUpRight size={17}/></Link><Link href="/a-propos" className="button-ghost">Notre philosophie <ArrowRight size={16}/></Link></div>
          <div className="hero-proof"><span><BadgeCheck size={16}/> Contenus pratiques</span><span><Zap size={16}/> Accès numérique</span><span><BookOpen size={16}/> À votre rythme</span></div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-label"><span>LA SÉLECTION DU MOMENT</span><span>01 / 04</span></div>
          <div className="showcase-book"><div className="showcase-book-top"><span>VEYLAN EDITIONS</span><Sparkles size={17}/></div><div className="showcase-shape"/><div className="showcase-book-title"><span>LE GUIDE ESSENTIEL</span><strong>Maîtriser<br/>le digital.</strong><small>LES CLÉS POUR PASSER À L'ACTION</small></div><div className="showcase-book-bottom">VEYLAN STORE <span>2026</span></div></div>
          <div className="showcase-note"><span className="note-icon"><BookOpen size={18}/></span><div><strong>Un savoir utile.</strong><small>Des idées à mettre en pratique.</small></div><ArrowUpRight size={17}/></div>
          <div className="showcase-stamp">LEARN<br/>BUILD<br/>GROW</div>
        </div>
      </div>
      <div className="hero-bottom container"><span>APPRENDRE AVEC INTENTION</span><span>CRÉER AVEC MÉTHODE</span><span>ÉVOLUER AVEC CONFIANCE</span></div>
    </section>

    <section className="container trust-strip">
      <div><span className="trust-icon"><GraduationCap size={20}/></span><div><strong>Apprentissage concret</strong><small>Du contenu pensé pour l'action</small></div></div>
      <div><span className="trust-icon"><Zap size={20}/></span><div><strong>Accès numérique</strong><small>Vos ressources à portée de main</small></div></div>
      <div><span className="trust-icon"><BadgeCheck size={20}/></span><div><strong>Transparence</strong><small>Vous savez ce que vous achetez</small></div></div>
    </section>

    <section className="container home-products">
      <div className="section-heading"><div><p className="eyebrow">À découvrir maintenant</p><h2 className="section-title">Des ressources qui<br/><em>font la différence.</em></h2></div><Link href="/boutique" className="text-link">Toute la boutique <ArrowUpRight size={16}/></Link></div>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product)=><ProductCard key={product.id} product={product}/>)}</div>
    </section>

    <section className="manifesto-section"><div className="container manifesto-grid"><div><p className="eyebrow !text-[#d8b985]">La méthode Veylan</p><h2>Moins de bruit.<br/><em>Plus de progression.</em></h2></div><div><p>Le numérique ouvre des possibilités immenses. Encore faut-il trouver les bonnes ressources, comprendre quoi faire et passer à l'action.</p><Link href="/a-propos" className="manifesto-link">Découvrir notre approche <ChevronRight size={17}/></Link></div></div></section>

    <TestimonialSection/>
    <section className="container final-cta"><div><p className="eyebrow">Votre prochaine étape commence ici</p><h2 className="section-title">Prêt à faire avancer<br/><em>vos projets ?</em></h2></div><Link href="/boutique" className="button-dark">Trouver ma ressource <ArrowUpRight size={17}/></Link></section>
  </>;
}