'use client';
import { motion } from 'framer-motion';
import { Crosshair, Eye, Sparkles, Compass, Rocket } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';
import AnimatedCounter from '@/components/site/AnimatedCounter';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const leaders = [
  {
    name: 'Abdul Rahman Al Sharqi',
    role: 'Founder & MD',
    bio: 'Leads WSC Healthcare strategy, enterprise partnerships and executive transformation programs.',
    headline: 'Healthcare transformation executive focused on national-scale digital health programs.',
    focus: ['Executive strategy', 'Healthcare partnerships', 'Digital transformation', 'Enterprise growth'],
    portfolio: [
      'Built executive healthcare transformation roadmaps for large public and private-sector programs.',
      'Led strategic partnerships across hospital groups, ministries, technology vendors and regional health leaders.',
      'Shaped WSC Healthcare into a delivery partner for AI, interoperability and intelligent operations programs.',
    ],
    achievements: ['Founder-led healthcare portfolio', 'Regional enterprise partnerships', 'Board-level transformation advisory'],
  },
  {
    name: 'Mohammed Artil',
    role: 'Healthcare VP',
    bio: 'Leads healthcare solution strategy, delivery governance and clinical technology partnerships.',
    headline: 'Healthcare technology leader connecting clinical workflows with enterprise-grade platforms.',
    focus: ['Healthcare platforms', 'Clinical operations', 'Solution delivery', 'Client success'],
    portfolio: [
      'Directed healthcare technology programs across interoperability, analytics and operational intelligence.',
      'Designed solution approaches for hospital command centers, data platforms and healthcare automation.',
      'Partners with client leadership teams to translate clinical priorities into deployable technology programs.',
    ],
    achievements: ['Healthcare delivery leadership', 'Clinical workflow modernization', 'Enterprise solution governance'],
  },
  {
    name: 'TBD',
    role: 'Technology Head',
    bio: 'Owns architecture, platform engineering and secure delivery standards across healthcare programs.',
    headline: 'Technology leadership profile reserved for WSC Healthcare platform and architecture ownership.',
    focus: ['FHIR architecture', 'Cloud infrastructure', 'AI platforms', 'Cybersecurity'],
    portfolio: [
      'Defines platform architecture patterns for healthcare data, AI and smart hospital systems.',
      'Guides cloud, integration and security standards for regulated healthcare deployments.',
      'Supports technical governance from discovery through implementation and scale-up.',
    ],
    achievements: ['Architecture governance', 'Secure delivery standards', 'Healthcare platform engineering'],
  },
  {
    name: 'Nora Alattas & Nura Al Ajmi',
    role: 'Sales Team',
    bio: 'Lead client engagement, healthcare account strategy and partner coordination.',
    headline: 'Client-facing team focused on healthcare relationships, opportunity design and partner alignment.',
    focus: ['Client engagement', 'Account strategy', 'Partner coordination', 'Healthcare growth'],
    portfolio: [
      'Coordinate healthcare client discovery sessions and executive briefings.',
      'Support proposals, partnership motions and opportunity development across healthcare programs.',
      'Align clients with WSC Healthcare solution teams for AI, data, infrastructure and operational needs.',
    ],
    achievements: ['Healthcare account growth', 'Executive briefing coordination', 'Partner ecosystem alignment'],
  },
];

const timeline = [
  { y: '2018', t: 'Founded', d: 'Founded as a healthcare-only enterprise technology partner.' },
  { y: '2020', t: 'FHIR Fabric Platform', d: 'Launched FHIR-native data fabric, deployed across 6 hospitals.' },
  { y: '2022', t: 'AI Command Center', d: 'Released real-time AI command center for smart hospitals.' },
  { y: '2024', t: 'Generative AI Suite', d: 'Production-grade clinical generative AI agents and copilots.' },
  { y: '2025', t: 'Global Scale', d: 'Active in 18 countries. 40M+ unified patient records.' },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-green" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles density={55} />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">About WSC Healthcare</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#08130d] tracking-tight leading-[1.02] max-w-5xl">Engineered for the <span className="text-gradient-emerald">world&rsquo;s most demanding</span> healthcare organizations.</h1>
            <p className="mt-7 text-lg text-[#0a1f17]/65 max-w-2xl leading-relaxed">We are clinicians, technologists and former hospital executives building the enterprise platform behind tomorrow&rsquo;s healthcare programs.</p>
          </Reveal>
        </div>
      </section>
      <section className="relative py-20">
        <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-5">
          {[
            { Ic: Eye, t: 'Vision', d: 'A world where every healthcare decision is augmented by AI, every patient is connected to a single record, and every hospital operates as a real-time intelligent enterprise.' },
            { Ic: Crosshair, t: 'Mission', d: 'To deliver enterprise-grade healthcare AI, data and intelligent operations platforms to the world’s most ambitious healthcare leaders.' },
            { Ic: Compass, t: 'Methodology', d: 'Clinician-led product, FHIR-native architecture, real-time event-driven design and a relentless focus on measurable outcomes.' },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="h-full p-8 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] transition">
                <div className="w-11 h-11 rounded-lg bg-[#0B6E4F]/8 border border-[#0B6E4F]/20 flex items-center justify-center mb-5"><b.Ic className="w-5 h-5 text-[#0B6E4F]" strokeWidth={1.5} /></div>
                <div className="text-2xl font-semibold text-[#08130d]">{b.t}</div>
                <div className="text-[15px] text-[#0a1f17]/65 mt-3 leading-relaxed">{b.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative py-20 border-y border-[#0B6E4F]/10 bg-gradient-to-br from-[#0a1f17] to-[#02110a]">
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#10B981]/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-8 relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: 250, s: '+', l: 'Healthcare Clients' },
            { v: 18, s: '', l: 'Countries Served' },
            { v: 950, s: '+', l: 'FHIR Integrations' },
            { v: 99.99, s: '%', l: 'Uptime SLA' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.07}>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white leading-none"><AnimatedCounter value={s.v} suffix={s.s} /></div>
                <div className="text-xs text-[#10B981] tracking-[0.2em] uppercase mt-3 font-semibold">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Leadership</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Clinicians. Technologists. Operators.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      type="button"
                      whileHover={{ y: -4 }}
                      className="group h-full w-full text-left p-6 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] transition focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/25"
                    >
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-[#0B6E4F] via-[#053826] to-[#02110a] flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <span className="relative text-5xl font-bold text-white">{p.name.split(' ').map(n => n[0]).slice(0,2).join('')}</span>
                      </div>
                      <div className="text-base font-semibold text-[#08130d]">{p.name}</div>
                      <div className="text-xs text-[#0B6E4F] mt-1 font-medium">{p.role}</div>
                      <div className="text-xs text-[#0a1f17]/60 mt-3 leading-relaxed">{p.bio}</div>
                      <div className="mt-5 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0B6E4F] opacity-80 group-hover:opacity-100">View portfolio</div>
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-2xl border-[#0B6E4F]/15 bg-white p-0 shadow-[0_30px_90px_-35px_rgba(11,110,79,0.45)]">
                    <div className="grid md:grid-cols-[240px_1fr]">
                      <div className="relative min-h-64 bg-gradient-to-br from-[#0B6E4F] via-[#053826] to-[#02110a] p-7 text-white overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-5xl font-bold">
                          {p.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                        </div>
                        <div className="relative mt-6 text-[11px] tracking-[0.28em] uppercase text-[#10B981] font-semibold">Portfolio</div>
                        <div className="relative mt-2 text-2xl font-bold leading-tight">{p.name}</div>
                        <div className="relative mt-2 text-sm text-white/70">{p.role}</div>
                      </div>
                      <div className="p-7 md:p-8">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold tracking-tight text-[#08130d]">{p.name}</DialogTitle>
                          <DialogDescription className="text-[#0a1f17]/65 leading-relaxed">
                            {p.headline}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="mt-7">
                          <div className="text-[11px] tracking-[0.24em] uppercase text-[#0B6E4F] font-semibold">Focus Areas</div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {p.focus.map(item => (
                              <span key={item} className="rounded-full border border-[#0B6E4F]/15 bg-[#0B6E4F]/6 px-3 py-1.5 text-xs font-medium text-[#0a1f17]/75">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7">
                          <div className="text-[11px] tracking-[0.24em] uppercase text-[#0B6E4F] font-semibold">Selected Portfolio</div>
                          <div className="mt-3 space-y-3">
                            {p.portfolio.map(item => (
                              <div key={item} className="rounded-lg border border-[#0B6E4F]/10 bg-[#f6faf7] p-3 text-sm leading-relaxed text-[#0a1f17]/75">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7">
                          <div className="text-[11px] tracking-[0.24em] uppercase text-[#0B6E4F] font-semibold">Highlights</div>
                          <div className="mt-3 grid sm:grid-cols-3 gap-2">
                            {p.achievements.map(item => (
                              <div key={item} className="rounded-lg border border-[#0B6E4F]/10 bg-white px-3 py-3 text-xs font-medium leading-relaxed text-[#0a1f17]/70 shadow-sm">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 surface-mute">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Healthcare Transformation Timeline</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Seven years. Real impact.</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0B6E4F]/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((m, i) => (
                <Reveal key={m.y} delay={i * 0.08}>
                  <div className={`relative grid md:grid-cols-2 gap-4 ${i % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}>
                    <div className={`${i % 2 === 0 ? '' : 'md:col-start-2'} pl-10 md:pl-0 md:pr-10`}>
                      <div className="inline-flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4 text-[#0B6E4F]" /><span className="text-2xl font-bold text-gradient-emerald">{m.y}</span></div>
                      <div className="text-lg font-semibold text-[#08130d]">{m.t}</div>
                      <div className="text-sm text-[#0a1f17]/60 mt-2 max-w-md">{m.d}</div>
                    </div>
                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-[#0B6E4F] green-glow-sm border-2 border-white" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight">Build the future of healthcare with us.</h2>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white font-medium text-sm green-glow">Contact our team <Rocket className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
