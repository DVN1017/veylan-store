import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, GraduationCap, Layers3, Wrench } from "lucide-react";

export const metadata: Metadata = { title: "Catégories", description: "Parcourez les univers de ressources numériques Veylan." };
const categories = [
  { title: "Ebooks", desc: "Des idées structurées à lire et à appliquer.", icon: BookOpen, count: "Lecture pratique", tone: "sand" },
  { title: "Formations", desc: "Des parcours pour acquérir de vraies compétences.", icon: GraduationCap, count: "Apprentissage guidé", tone: "blue" },
  { title: "Guides", desc: "Des méthodes claires pour résoudre un problème précis.", icon: Layers3, count: "Pas à pas", tone: "rose" },
  { title: "Outils & modèles", desc: "Des ressources prêtes à adapter à vos projets.", icon: Wrench, count: "Prêt à utiliser", tone: "lilac" },
];
export default function CategoriesPage() {
  return <section className="container min-h-screen py-16 md:py-24"><p className="eyebrow">Choisissez votre univers</p><h1 className="display-title mt-5">Un bon outil peut<br/><em>changer la suite.</em></h1><div className="mt-14 grid gap-5 sm:grid-cols-2">{categories.map(({title,desc,icon:Icon,count,tone},i)=><Link href="/boutique" key={title} className={"category-tile category-"+tone+" group"}><div className="flex items-center justify-between"><span className="text-xs tracking-widest opacity-60">0{i+1} / VEYLAN</span><Icon size={24} strokeWidth={1.4}/></div><div className="mt-16"><p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-60">{count}</p><h2 className="mt-2 font-serif text-3xl">{title}</h2><p className="mt-3 max-w-xs text-sm leading-6 opacity-75">{desc}</p></div><span className="category-arrow"><ArrowUpRight size={19}/></span></Link>)}</div></section>;
}