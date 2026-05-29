'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Healthcare Services' },
  { href: '/technology', label: 'Technology' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 px-4 pt-4 transition-all duration-300 ${scrolled ? 'pb-3' : 'pb-2'}`}>
      <div className={`container mx-auto h-[70px] px-4 sm:px-5 lg:px-6 flex items-center justify-between rounded-2xl border transition-all duration-300 ${scrolled ? 'bg-white/90 border-[#0B6E4F]/12 shadow-[0_18px_60px_-28px_rgba(11,110,79,0.45)] backdrop-blur-xl' : 'bg-white/70 border-white/70 shadow-[0_12px_45px_-35px_rgba(11,110,79,0.4)] backdrop-blur-md'}`}>
        <Link href="/" className="flex min-w-0 items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/25">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#0B6E4F]/10 bg-white/55 p-1 shadow-inner shadow-[#0B6E4F]/5">
          {nav.map(n => {
            const active = pathname === n.href || (n.href !== '/' && pathname?.startsWith(n.href));
            return (
              <Link key={n.href} href={n.href}
                className={`px-4 py-2.5 text-[13px] font-medium rounded-full transition-all ${active ? 'text-white bg-[#0B6E4F] shadow-[0_8px_20px_-12px_rgba(11,110,79,0.8)]' : 'text-[#0a1f17]/68 hover:text-[#0B6E4F] hover:bg-[#0B6E4F]/7'}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="group relative inline-flex items-center gap-2 text-[13px] font-semibold pl-5 pr-4 py-3 rounded-full bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white green-glow-sm hover:from-[#10785a] hover:to-[#053826] transition-all">
            Book Consultation <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>
        <button className="lg:hidden text-[#0a1f17] p-2 rounded-full border border-[#0B6E4F]/10 bg-white/65" onClick={() => setOpen(o => !o)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-2 lg:hidden rounded-2xl border border-[#0B6E4F]/10 bg-white/95 shadow-[0_18px_45px_-30px_rgba(11,110,79,0.55)] backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="rounded-xl px-3 py-3 text-[#0a1f17]/80 hover:bg-[#0B6E4F]/7 hover:text-[#0B6E4F]">{n.label}</Link>
            ))}
            <Link href="/contact" className="mt-3 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white">Book Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
