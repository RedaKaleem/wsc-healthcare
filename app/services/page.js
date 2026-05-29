'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';
import ServiceIcon from '@/components/site/ServiceIcon';
import { services } from '@/lib/services-data';

export default function ServicesPage() {
  const [q, setQ] = useState('');
  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(q.toLowerCase()) ||
    s.short.toLowerCase().includes(q.toLowerCase()) ||
    s.features.join(' ').toLowerCase().includes(q.toLowerCase())
  );
  return (
    <main className="relative">
      <Navbar />
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-green" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles density={55} />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Healthcare Services</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#08130d] tracking-tight leading-[1.02] max-w-5xl">
              21 enterprise capabilities engineered for the <span className="text-gradient-emerald">future of healthcare</span>.
            </h1>
            <p className="mt-7 text-lg text-[#0a1f17]/65 max-w-2xl leading-relaxed">From FHIR-native data fabrics to AI command centers and digital pathology — every layer your healthcare enterprise needs, delivered as a composable platform.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a1f17]/40" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search services, capabilities, features..." className="w-full pl-11 pr-4 py-3.5 rounded-md bg-white border border-[#0B6E4F]/15 text-[#08130d] text-sm focus:outline-none focus:border-[#0B6E4F] shadow-sm" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 9) * 0.04 }}
              >
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <motion.div whileHover={{ y: -6 }} className="relative h-full p-7 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/35 transition-all overflow-hidden shadow-sm hover:shadow-[0_25px_60px_-20px_rgba(11,110,79,0.3)]">
                    <div className="absolute -top-32 -right-32 w-60 h-60 bg-[#10B981]/12 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm group-hover:scale-110 transition-transform">
                          <ServiceIcon name={s.icon} className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs text-[#0a1f17]/30 font-mono">{s.letter}.0</span>
                      </div>
                      <div className="text-lg font-semibold text-[#08130d] leading-snug">{s.title}</div>
                      <div className="text-sm text-[#0a1f17]/60 mt-3 leading-relaxed">{s.short}</div>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.features.slice(0, 3).map(f => (
                          <span key={f} className="text-[10px] text-[#0a1f17]/65 px-2 py-1 rounded border border-[#0B6E4F]/12 bg-[#0B6E4F]/4">{f}</span>
                        ))}
                      </div>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs text-[#0B6E4F] group-hover:gap-3 transition-all font-medium">
                        Explore Service <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#0a1f17]/50">No services match your search.</div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
