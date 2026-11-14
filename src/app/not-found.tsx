import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container grid min-h-[60vh] place-items-center py-20 text-center">
      <div><p className="eyebrow">Erreur 404</p><h1 className="section-title mt-4 text-5xl">Cette page n'existe pas.</h1><p className="mt-4 text-sm text-[var(--muted)]">Le contenu recherché est introuvable.</p><Link href="/" className="mt-8 inline-flex bg-[#1c2823] px-6 py-4 text-xs font-semibold text-white">Retour à l'accueil</Link></div>
    </section>
  );
}