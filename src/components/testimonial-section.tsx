import { MessageCircleHeart, ShieldCheck, Sparkles } from "lucide-react";

export function TestimonialSection() {
  return <section className="testimonial-section"><div className="container testimonial-grid">
    <div><p className="eyebrow !text-[#d9bb8b]">La confiance avant tout</p><h2 className="section-title mt-4 text-4xl leading-tight text-white md:text-5xl">Votre expérience<br/><span className="text-[#d9bb8b]">compte vraiment.</span></h2></div>
    <div className="testimonial-promise"><div className="flex items-center gap-3 text-[#d9bb8b]"><MessageCircleHeart size={21}/><span className="text-xs font-semibold uppercase tracking-[.16em]">Vos avis bientôt ici</span></div><p className="mt-5 max-w-xl font-serif text-2xl leading-relaxed text-white">Nous publierons les retours authentiques des premiers clients, avec leur accord. Pas de faux avis : votre confiance mérite mieux.</p><div className="mt-8 flex flex-wrap gap-5 text-xs text-white/55"><span className="inline-flex items-center gap-2"><ShieldCheck size={15}/> Avis vérifiés</span><span className="inline-flex items-center gap-2"><Sparkles size={15}/> Retours authentiques</span></div></div>
  </div></section>;
}