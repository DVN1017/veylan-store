/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, BrainCircuit, GraduationCap, MessageCircle, Wrench } from "lucide-react";

export const metadata: Metadata = { title: "Nos univers", description: "Formations, intelligence artificielle, coaching individuel, ebooks et outils Veylan." };
const categories = [
 { id:"formations", title:"Formations", desc:"Des parcours structurés pour acquérir des compétences qui servent dans la vraie vie.", label:"APPRENDRE · PROGRESSER", icon:GraduationCap, color:"acid", number:"01", href:"/boutique?type=Formation" },
 { id:"ia", title:"Intelligence artificielle", desc:"Comprendre l'IA de A à Z, découvrir les outils et apprendre à les utiliser dans vos projets.", label:"EXPLORER · INNOVER", icon:BrainCircuit, color:"blue", number:"02", href:"/boutique?type=Formation" },
 { id:"coaching", title:"Coaching 1:1", desc:"Un accompagnement individuel pour clarifier votre objectif et avancer avec un plan adapté.", label:"ÉCHANGER · ACCÉLÉRER", icon:MessageCircle, color:"violet", number:"03", href:"/a-propos" },
 { id:"ebooks", title:"Ebooks & guides", desc:"Des idées, méthodes et ressources à consulter à votre rythme et à mettre en pratique.", label:"LIRE · APPLIQUER", icon:BookOpen, color:"orange", number:"04", href:"/boutique?type=Ebook" },
 { id:"outils", title:"Outils & templates", desc:"Des modèles et supports pratiques pour gagner du temps et mieux exécuter vos idées.", label:"CRÉER · CONSTRUIRE", icon:Wrench, color:"steel", number:"05", href:"/boutique?type=Outil" },
];
export default function CategoriesPage() {
 return <main className="universe-page"><section className="universe-page-hero"><div className="container"><p className="eyebrow">VEYLAN / LES POSSIBLES SONT OUVERTS</p><h1>Choose your next<br/><em>level.</em></h1><p>Apprendre une nouvelle compétence. Comprendre l'intelligence artificielle. Faire avancer un projet avec un coach. Trouvez votre prochaine étape.</p><div className="universe-hero-meta"><span>5 UNIVERS À EXPLORER</span><span>LEARN / BUILD / EVOLVE</span></div></div></section><section className="container universe-page-grid">{categories.map(({id,title,desc,label,icon:Icon,color,number,href})=><article id={id} key={id} className={"universe-detail-card "+color}><div className="universe-detail-top"><span>{number} / VEYLAN</span><Icon size={26} strokeWidth={1.5}/></div><div className="universe-detail-content"><span>{label}</span><h2>{title}</h2><p>{desc}</p><Link href={href} className="universe-detail-link">Explorer les ressources <ArrowUpRight size={17}/></Link></div><span className="universe-detail-mark">{number}</span></article>)}</section></main>;
}