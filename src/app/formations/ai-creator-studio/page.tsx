import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferLanding } from "@/components/offer-landing";
import { offers } from "@/lib/offers";
const offer=offers.find((item)=>item.slug==="ai-creator-studio")!;
export const metadata:Metadata={title:offer.title,description:offer.description};
export default function Page(){if(!offer)notFound();return <OfferLanding offer={offer}/>;}
