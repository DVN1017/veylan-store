import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, GraduationCap, Lightbulb, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const categories = [
  { title: "Formations", description: "Développez des compétences concrètes.", icon: GraduationCap, href: "/#boutique" },
  { title: "Ebooks & guides", description: "Apprenez à votre rythme, où que vous soyez.", icon: BookOpen, href: "/#boutique" },
  { title: "Outils & modèles", description: "Gagnez du temps avec des ressources prêtes à l'emploi.", icon: Lightbulb, href: "/#boutique" },
];

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-[#1c2823] text-white">
        <div className="absolute -right-36 -top-52 size-[620px] rounded-full border border-white/[.07]" />
        <div className="absolute -right-16 -top-32 size-[380px] rounded-full border border-white/[.07]" />
        <div className="container relative grid min-h-[610px] items-center gap-12 py-20 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div className="max-w-[640px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-[#dfc79d]"><Sparkles size={13} /> La bibliothèque de vos ambitions</div>
            <h1 className="section-title text-[clamp(3.5rem,7vw,6.3rem)] leading-[.98]">Apprenez.<br /><span className="text-[#d4b783]">Créez.</span><br />Évoluez.</h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/65 md:text-base">Des formations, ebooks et ressources pratiques pour transformer vos idées en compétences et vos projets en réalisations.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="#boutique" className="inline-flex items-center gap-3 bg-[#d4b783] px-6 py-4 text-xs font-semibold text-[#1c2823] transition hover:bg-[#e4d0ac]">Découvrir les produits <ArrowUpRight size={15} /></Link>
              <Link href="#apropos" className="text-xs text-white/70 transition hover:text-white">Découvrir notre approche <ArrowDown className="ml-2 inline" size={14} /></Link>
            </div>
            <div className="mt-16 flex gap-10 border-t border-white/15 pt-6">
              <div><p className="font-serif text-2xl text-[#d4b783]">100%</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Numérique</p></div>
              <div><p className="font-serif text-2xl text-[#d4b783]">24/7</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Accès flexible</p></div>
              <div><p className="font-serif text-2xl text-[#d4b783]">+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Pour progresser</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-5 rotate-3 border border-[#d4b783]/30" />
            <div className="relative grid aspect-[4/4.5] grid-cols-2 gap-3 bg-[#34463d] p-4">
              <div className="flex flex-col justify-between bg-[#d4b783] p-5 text-[#1c2823]">
                <span className="text-[10px] uppercase tracking-[.2em]">Veylan / Library</span>
                <div><BookOpen size={25} /><p className="mt-4 font-serif text-3xl leading-none">Le savoir<br />en action.</p></div>
                <span className="text-[9px] uppercase tracking-widest">Édition digitale</span>
              </div>
              <div className="flex flex-col justify-between bg-[#eee9df] p-5 text-[#1c2823]">
                <span className="text-[10px] uppercase tracking-[.2em]">01 — Learn</span>
                <div className="font-serif text-5xl">01</div>
                <p className="text-xs leading-5">Des idées claires. Des méthodes utiles.</p>
              </div>
              <div className="flex flex-col justify-between bg-[#a9b2a1] p-5 text-[#1c2823]">
                <span className="text-[10px] uppercase tracking-[.2em]">02 — Build</span>
                <div className="font-serif text-5xl">02</div>
                <p className="text-xs leading-5">Des outils pour passer à l'action.</p>
              </div>
              <div className="flex flex-col justify-between bg-[#f7f5ef] p-5 text-[#1c2823]">
                <span className="text-[10px] uppercase tracking-[.2em]">03 — Grow</span>
                <div className="font-serif text-5xl">03</div>
                <p className="text-xs leading-5">Une progression qui dure.</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 hidden bg-white px-5 py-4 text-[#1c2823] shadow-xl sm:block"><p className="font-serif text-xl">Votre prochain chapitre.</p><p className="mt-1 text-[10px] text-[#777970]">Commence ici.</p></div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4"><div className="container flex flex-wrap justify-between gap-3 text-[9px] uppercase tracking-[.22em] text-white/40"><span>Apprendre avec intention</span><span>Créer avec méthode</span><span>Évoluer avec confiance</span></div></div>
      </section>

      <section id="categories" className="container py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow">Explorer par univers</p><h2 className="section-title mt-4 text-4xl md:text-5xl">Des ressources pour<br />chaque ambition.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">Choisissez votre prochain apprentissage et avancez à votre propre rythme.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map(({ title, description, icon: Icon, href }, index) => (
            <Link key={title} href={href} className="group border border-[var(--line)] bg-white/50 p-7 transition hover:border-[#c5a46d] hover:bg-white">
              <div className="flex items-center justify-between"><span className="text-xs text-[#a18a65]">0{index + 1}</span><Icon size={22} strokeWidth={1.4} /></div>
              <h3 className="mt-12 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold">Explorer <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section id="boutique" className="bg-[#eeece5] py-24">
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow">La sélection Veylan</p><h2 className="section-title mt-4 text-4xl md:text-5xl">Commencez ici.</h2></div>
            <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">Une première sélection de ressources conçues pour vous aider à passer à l'étape suivante.</p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="mt-12 text-center"><Link href="/#boutique" className="inline-flex items-center gap-3 border border-[#1c2823] px-6 py-4 text-xs font-semibold transition hover:bg-[#1c2823] hover:text-white">Voir toute la sélection <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section id="apropos" className="container grid gap-12 py-24 md:grid-cols-2 md:items-center">
        <div><p className="eyebrow">Notre philosophie</p><h2 className="section-title mt-4 text-4xl leading-tight md:text-5xl">Le savoir prend<br />de la valeur quand<br /><span className="text-[#a18152]">on le met en pratique.</span></h2></div>
        <div className="max-w-lg"><p className="text-sm leading-8 text-[var(--muted)]">Veylan Store rassemble des ressources numériques accessibles et utiles. Notre ambition : rendre l'apprentissage plus concret, aider chacun à développer ses compétences et donner les bons outils pour construire ses projets.</p><div className="mt-8 border-l-2 border-[#c5a46d] pl-5"><p className="font-serif text-xl">Moins de théorie inutile. Plus de progrès mesurables.</p></div></div>
      </section>
    </>
  );
}