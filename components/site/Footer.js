import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { services } from '@/lib/services-data';

export default function Footer() {
  const cols = [
    { title: 'Solutions', links: services.slice(0,6).map(s => ({ label: s.title.split(' & ')[0].replace('Healthcare ',''), href: `/services/${s.slug}` })) },
    { title: 'Platforms', links: services.slice(6,12).map(s => ({ label: s.title.split(' & ')[0].replace('Healthcare ',''), href: `/services/${s.slug}` })) },
    { title: 'Company', links: [
      { label: 'About', href: '/about' },
      { label: 'Technology', href: '/technology' },
      { label: 'All Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ]},
  ];
  return (
    <footer className="relative border-t border-[#0B6E4F]/10 bg-gradient-to-b from-white to-[#eef5f1]">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-[#0a1f17]/65 leading-relaxed max-w-sm">
              Enterprise healthcare transformation powered by AI, data interoperability, smart hospital systems and intelligent operations — engineered for billion-dollar healthcare organizations.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#0a1f17]/80" suppressHydrationWarning>
              <div className="flex items-center gap-3" suppressHydrationWarning><Mail className="w-4 h-4 text-[#0B6E4F]" /> <span suppressHydrationWarning>enterprise@wschealthcare.com</span></div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#0B6E4F]" /> +966 11 800 0000</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#0B6E4F]" /> Riyadh · Dubai · London · Singapore</div>
            </div>
            <div className="flex items-center gap-3 mt-7">
              {[Linkedin, Twitter, Github].map((Ic, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md border border-[#0B6E4F]/15 bg-white flex items-center justify-center text-[#0a1f17]/60 hover:text-white hover:border-[#0B6E4F] hover:bg-[#0B6E4F] transition-all">
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[11px] tracking-[0.28em] text-[#0B6E4F] uppercase font-semibold mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map(l => (
                  <li key={l.label}><Link href={l.href} className="text-sm text-[#0a1f17]/70 hover:text-[#0B6E4F] inline-flex items-center gap-1 group">{l.label}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" /></Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-2">
            <div className="text-[11px] tracking-[0.28em] text-[#0B6E4F] uppercase font-semibold mb-5">Newsletter</div>
            <p className="text-sm text-[#0a1f17]/60 mb-3">Enterprise healthcare AI insights, monthly.</p>
            <form className="flex flex-col gap-2">
              <input className="bg-white border border-[#0B6E4F]/15 rounded-md px-3 py-2 text-sm text-[#0a1f17] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" placeholder="Work email" />
              <button className="bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white text-sm py-2 rounded-md hover:opacity-95">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#0B6E4F]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#0a1f17]/45" suppressHydrationWarning>© {new Date().getFullYear()} WSC Healthcare Intelligence. All rights reserved.</div>
          <div className="flex items-center gap-6 text-xs text-[#0a1f17]/45">
            <span>HIPAA · GDPR · HITRUST · ISO 27001</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
