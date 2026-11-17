import Link from "next/link";
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, Clapperboard } from "lucide-react";
import { offers, formatOfferPrice } from "@/lib/offers";
const icons=[BrainCircuit,BriefcaseBusiness,Clapperboard];
export function OfferGrid({compact=false}:{compact?:boolean}){
 return <div className={"offer-grid "+(compact?"offer-grid-compact":"")}>{offers.map((offer,index)=>{const Icon=icons[index];return <article key={offer.slug} className={"offer-card offer-"+offer.accent}>
  <div className="offer-card-top"><span>{offer.number} / VEYLAN ACADEMY</span><Icon size={22} strokeWidth={1.5}/></div>
  <div className="offer-card-main"><span className="offer-eyebrow">{offer.eyebrow}</span><h3>{offer.title}</h3><p>{offer.tagline}</p></div>
  <div className="offer-card-bottom"><strong>{formatOfferPrice(offer.price)}</strong><Link href={"/formations/"+offer.slug}>Découvrir le programme <ArrowUpRight size={16}/></Link></div>
  <span className="offer-card-watermark">{offer.number}</span>
 </article>})}</div>;
}
