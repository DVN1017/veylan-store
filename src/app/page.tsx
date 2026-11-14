import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check, GraduationCap, Play, Sparkles, Zap } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { TestimonialSection } from "@/components/testimonial-section";

const categories = [
  { n: "01", title: "Formations", sub: "Apprendre une compétence", href: "/boutique?type=Formation", mark: "↗", tone: "mint" },
  { n: "02", title: "Ebooks & guides", sub: "Comprendre, puis appliquer", href: "/boutique?type=Ebook", mark: "↗", tone: "sand" },
  { n: "03", title: "Outils pratiques", sub: "Gagner du temps au quotidien", href: "/boutique?type=Outil", mark: "↗", tone: "lilac" },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  return <>
    <section className="premium-hero">
      <div className="hero-grain" aria-hidden="true"/>
      <div className="container premium-hero-grid">
        <div className="premium-hero-copy">
          <div className="eyebrow-pill"><span className="live-dot"/> LE SAVOIR QUI FAIT BOUGER LES CHOSES</div>
          <h1>Apprenez.<br/><span>Créez.</span><br/><em>Allez plus loin.</em></h1>
          <p className="premium-lead">Les bonnes ressources peuvent changer la suite. Découvrez des formations, ebooks et outils conçus pour transformer vos idées en actions concrètes.</p>
          <div className="premium-hero-actions">
            <Link href="/boutique" className="premium-button">Trouver ma prochaine ressource <ArrowUpRight size={18}/></Link>
            <Link href="/a-propos" className="premium-text-link">L'esprit Veylan <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-micro-proof"><span><Check size={14}/> Des contenus utiles</span><span><Check size={14}/> À votre rythme</span><span><Check size={14}/> 100% numérique</span></div>
        </div>
        <div className="premium-visual" aria-label="Aperçu de ressources numériques Veylan">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="visual-index"><span>VEYLAN / LEARNING GOODS</span><span>ÉDITION 2026</span></div>
          <div className="visual-stack">
            <div className="visual-card visual-card-back"><span>WORKBOOK / 02</span><div className="back-lines"><i/><i/><i/><i/></div><b>BUILD<br/>YOUR<br/>NEXT.</b></div>
            <div className="visual-card visual-card-front"><div className="cover-top"><span>V / ÉDITIONS</span><Sparkles size={17}/></div><div className="cover-art"><div className="cover-ring"/><div className="cover-disc"/></div><div className="cover-title"><small>LE GUIDE POUR PASSER À L'ACTION</small><strong>Maîtriser<br/>le digital.</strong></div><div className="cover-foot"><span>APPRENDRE · CRÉER · ÉVOLUER</span><span>01</span></div></div>
          </div>
          <div className="floating-label label-top"><span className="floating-icon"><GraduationCap size={17}/></span><span><b>Apprendre autrement</b><small>Le savoir devient action.</small></span></div>
          <div className="floating-label label-bottom"><span className="floating-icon"><Zap size={17}/></span><span><b>Votre prochain déclic</b><small>Commence peut-être ici.</small></span><ArrowUpRight size={16}/></div>
          <div className="visual-side-note">LEARN<br/>MAKE<br/>MATTER.</div>
        </div>
      </div>
      <div className="container hero-bottom premium-bottom"><span>01 — APPRENDRE AVEC INTENTION</span><span>02 — CRÉER AVEC MÉTHODE</span><span>03 — ÉVOLUER AVEC CONFIANCE</span><a href="#selection" aria-label="Défiler vers la sélection"><ArrowDown size={16}/></a></div>
    </section>

    <section className="container value-ribbon">
      <div className="value-ribbon-intro"><span className="eyebrow">L'EXPÉRIENCE VEYLAN</span><strong>Pas plus de contenu.<br/><em>Le bon contenu.</em></strong></div>
      <div className="value-point"><span className="value-number">01</span><div><b>Clair dès le départ</b><small>Vous savez ce que vous allez apprendre.</small></div></div>
      <div className="value-point"><span className="value-number">02</span><div><b>Conçu pour agir</b><small>Des idées à mettre en pratique.</small></div></div>
      <div className="value-point"><span className="value-number">03</span><div><b>À votre rythme</b><small>Apprenez où et quand vous voulez.</small></div></div>
    </section>

    <section className="category-section">
      <div className="container">
        <div className="section-heading premium-section-heading"><div><p className="eyebrow">Explorez par univers</p><h2 className="section-title">Quel est votre<br/><em>prochain objectif ?</em></h2></div><p className="section-aside">Une compétence à développer, une idée à lancer, une méthode à trouver. Commencez par ce qui compte pour vous.</p></div>
        <div className="category-feature-grid">{categories.map((c)=><Link key={c.n} href={c.href} className={"category-feature "+c.tone}><span className="category-feature-n">{c.n} / VEYLAN</span><span className="category-feature-arrow"><ArrowUpRight size={20}/></span><div><small>{c.sub}</small><h3>{c.title}</h3></div></Link>)}</div>
      </div>
    </section>

    <section id="selection" className="container home-products premium-products">
      <div className="section-heading premium-section-heading"><div><p className="eyebrow">La sélection Veylan</p><h2 className="section-title">Des ressources pour<br/><em>passer à l'étape suivante.</em></h2></div><Link href="/boutique" className="text-link">Voir toute la boutique <ArrowUpRight size={16}/></Link></div>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product)=><ProductCard key={product.id} product={product}/>)}</div>
    </section>

    <section className="editorial-band"><div className="container editorial-band-grid"><div><p className="eyebrow !text-[#d9bd91]">La différence Veylan</p><h2>Le déclic ne suffit pas.<br/><em>Il faut passer à l'action.</em></h2></div><div><p>Nous croyons aux contenus qui débloquent une situation, donnent une méthode et aident à construire quelque chose de concret. Pas aux promesses magiques. À la progression réelle.</p><Link href="/a-propos" className="editorial-link">Découvrir notre approche <ArrowUpRight size={17}/></Link></div></div><div className="editorial-watermark">MAKE IT<br/>HAPPEN.</div></section>

    <TestimonialSection/>
    <section className="container final-cta premium-final"><div><p className="eyebrow">Votre prochaine étape commence ici</p><h2 className="section-title">Une idée en tête ?<br/><em>Faisons-la avancer.</em></h2><p className="final-cta-copy">Explorez les ressources et choisissez celle qui correspond à votre ambition du moment.</p></div><Link href="/boutique" className="premium-button">Explorer Veylan Store <ArrowUpRight size={18}/></Link></section>
  </>;
}
