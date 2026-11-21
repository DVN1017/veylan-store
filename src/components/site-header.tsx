"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [{href:"/boutique",label:"La boutique"},{href:"/categories",label:"Catégories"},{href:"/a-propos",label:"À propos"}];
  return <header className="site-header">
    <div className="site-header-inner">
      <Link href="/" className="flex items-center gap-2" aria-label="Veylan Store, accueil"><span className="brand-mark">V</span><span className="brand-name">veylan<span className="font-normal text-[#9a7a4e]"> store.</span></span></Link>
      <nav className="hidden items-center gap-9 md:flex">{links.map((link)=><Link key={link.href} className={pathname===link.href?"nav-link nav-link-active":"nav-link"} href={link.href}>{link.label}</Link>)}</nav>
      <Link href="/boutique" className="header-cta hidden md:inline-flex"><ShoppingBag size={14}/> Explorer la boutique <ArrowUpRight size={14}/></Link>
      <button className="grid size-10 place-items-center md:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?"Fermer le menu":"Ouvrir le menu"} aria-expanded={menuOpen}>{menuOpen?<X size={21}/>:<Menu size={21}/>}</button>
    </div>
    {menuOpen&&<nav className="container flex flex-col gap-5 border-t border-[var(--line)] py-5 text-sm md:hidden">{links.map((link)=><Link key={link.href} onClick={()=>setMenuOpen(false)} href={link.href}>{link.label}</Link>)}<Link onClick={()=>setMenuOpen(false)} href="/boutique" className="font-semibold text-[#9a7a4e]">Explorer la boutique ↗</Link></nav>}
  </header>;
}