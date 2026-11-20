import Link from "next/link";
import { ArrowUpRight, BookOpen, Feather, GraduationCap, Lightbulb } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { LibraryExperience } from "@/components/library-experience";

const categories = [
  { title: "Formations", text: "Des parcours structurés pour acquérir de nouvelles compétences.", href: "/boutique?type=Formation", icon: GraduationCap },
  { title: "Intelligence artificielle", text: "Comprendre l'IA et apprendre à l'utiliser dans vos projets.", href: "/boutique?type=Formation", icon: Lightbulb },
  { title: "Ebooks & guides", text: "Des ouvrages pratiques à consulter et à appliquer à votre rythme.", href: "/boutique?type=Ebook", icon: BookOpen },
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured);
  const libraryBooks = featured.slice(0, 3);
  return <>
    <LibraryExperience books={libraryBooks} />
    <section className="library-introduction">
      <p className="library-overline">UNE MAISON POUR LES IDÉES</p>
      <h2>Le plaisir de découvrir.<br /><em>La liberté d'apprendre.</em></h2>
      <p>Veylan Digital réunit des ressources numériques pensées avec soin : des ouvrages pour comprendre, des formations pour progresser et des outils pour entreprendre.</p>
    </section>
    <section className="library-categories">
      <div className="library-section-heading"><span>01 / LES RAYONS</span><h2>Explorez nos collections</h2></div>
      <div className="library-category-grid">{categories.map(({ title, text, href, icon: Icon }) => <Link href={href} className="library-category" key={title}><Icon size={24} /><span>{title}</span><p>{text}</p><ArrowUpRight size={17} /></Link>)}</div>
    </section>
    <section className="library-featured">
      <div className="library-section-heading"><span>02 / À DÉCOUVRIR</span><h2>Quelques ouvrages choisis</h2></div>
      <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>
    <section className="library-last-word"><Feather size={24} /><p>« Un livre est une porte ouverte sur un autre monde. »</p><span>VEYLAN DIGITAL · ÉDITIONS</span></section>
  </>;
}
