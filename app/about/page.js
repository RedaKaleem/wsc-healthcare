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
    image: '/abd-al-sharqi.png',
    bio: 'Commercial executive driving growth, strategic partnerships, and market expansion through innovative ICT solutions aligned with Saudi Vision 2030.',
    headline: 'Results-driven commercial executive focused on growth, partnerships, and business transformation. Leads market expansion and strategic initiatives that deliver measurable value across Saudi Arabia’s evolving digital landscape.',
    focus: ['Commercial strategy', 'Strategic partnerships', 'Market Expansion', 'Business growth', 'ICT Solutions Leadership'],
    portfolio: [
      'Led revenue growth initiatives across public and private sector markets.',
      'Built strategic partnerships that generated long-term business value.',
      'Expanded Watania Solutions’ market presence through targeted commercial strategies.',
      'Delivered ICT solutions that improved client efficiency and competitive positioning.'
    ],
    achievements: ['Revenue Growth Leadership', 'Vision 2030 Market Alignment', 'Enterprise Partnership Development', 'Commercial Performance Acceleration'],
  },
  {
    name: 'Mohammed Artil',
    role: 'Healthcare VP',
    image: '/mohammed-artil.png',
    bio: 'Healthcare executive focused on digital transformation, healthcare innovation, and strategic leadership, delivering large-scale modernization initiatives across healthcare ecosystems.',
    headline: 'Healthcare transformation leader with over two decades of experience driving digital health, healthcare innovation, hospital strategy, and enterprise transformation programs across global healthcare organizations.',
    focus: ['Healthcare Strategy', 'Digital Health Transformation', 'Hospital Planning & Operations', 'Healthcare Innovation', 'Executive Leadership'],
    portfolio: [
      'Led large-scale healthcare transformation and digital health initiatives across public and private healthcare sectors.',
      'Directed healthcare solutions, hospital planning, and strategic innovation programs aligned with emerging healthcare trends.',
      'Managed global healthcare programs and enterprise-level transformation projects within leading healthcare organizations.',
      'Advised healthcare institutions on operational excellence, technology adoption, and sustainable growth strategies.'
    ],
    achievements: ['22+ Years Healthcare Leadership', 'International Healthcare Management ', 'AI & Innovation in Healthcare', 'Lean Six Sigma Black Belt', 'Project Management Professional'],
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
    bio: 'Healthcare and digital transformation sales professional focused on strategic account management, business development, and client engagement across healthcare and government sectors.',
    headline: 'Sales professional specializing in healthcare technology, strategic accounts, and digital transformation initiatives across enterprise and government sectors.',
    focus: ['Strategic Account Management', 'Business Development', 'Client Relationship Management', 'Healthcare Solutions', 'Digital Transformation'],
    portfolio: [
      'Managed strategic healthcare and government sector accounts.',
      'Led sales engagements for AI, IoT, and Command Center solutions.',
      'Supported digital transformation initiatives through consultative selling.',
      'Developed client relationships that drove business growth and solution adoption.',
    ],
    achievements: ['Healthcare Technology Sales', 'Enterprise Account Growth', 'Solution Positioning Expertise', 'Stakeholder Relationship Management'],
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
      <section className="relative py-24 overflow-hidden surface-mute">
        <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
        <div className="absolute -top-40 right-[-120px] h-[360px] w-[360px] rounded-full bg-[#10B981]/12 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[340px] w-[340px] rounded-full bg-[#0B6E4F]/10 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Leadership</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Clinicians. Technologists. Operators.</h2>
                <p className="mt-5 text-base text-[#0a1f17]/62 leading-relaxed max-w-xl">Meet the team shaping strategy, healthcare delivery, technology architecture and client growth across WSC Healthcare programs.</p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0B6E4F]/15 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B6E4F] shadow-sm">
                {leaders.length} Profiles
              </div>
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
                      className="group h-full w-full text-left rounded-2xl border border-[#0B6E4F]/10 bg-white/90 p-4 shadow-sm transition hover:border-[#0B6E4F]/30 hover:shadow-[0_26px_70px_-30px_rgba(11,110,79,0.42)] focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]/25"
                    >
                      <div className="h-56 rounded-xl bg-gradient-to-br from-[#0B6E4F] via-[#053826] to-[#02110a] flex items-center justify-center mb-5 relative overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#02110a]/70 to-transparent" />
                        {p.image ? (
                          <div className="relative h-[86%] w-[70%] overflow-hidden rounded-xl border border-white/25 bg-white shadow-[0_18px_45px_-22px_rgba(0,0,0,0.5)]">
                            <img src={p.image} alt={p.name} className="h-full w-full object-cover object-top" />
                          </div>
                        ) : (
                          <span className="relative text-5xl font-bold text-white">{p.name.split(' ').map(n => n[0]).slice(0,2).join('')}</span>
                        )}
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-base font-semibold text-[#08130d] leading-snug">{p.name}</div>
                          <div className="text-xs text-[#0B6E4F] mt-1 font-medium">{p.role}</div>
                        </div>
                        <div className="mt-1 h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_18px_rgba(16,185,129,0.7)]" />
                      </div>
                      <div className="text-xs text-[#0a1f17]/60 mt-3 leading-relaxed">{p.bio}</div>
                      <div className="mt-5 inline-flex items-center rounded-full bg-[#0B6E4F]/8 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0B6E4F] transition group-hover:bg-[#0B6E4F] group-hover:text-white">View portfolio</div>
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[88vh] max-w-4xl overflow-y-auto rounded-2xl border-[#0B6E4F]/15 bg-white p-0 shadow-[0_30px_90px_-35px_rgba(11,110,79,0.45)]">
                    <div className="grid md:grid-cols-[280px_1fr]">
                      <div className="relative min-h-72 bg-gradient-to-br from-[#0B6E4F] via-[#053826] to-[#02110a] p-7 text-white overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#10B981]/20 blur-3xl" />
                        <div className="relative flex h-36 w-28 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-white/10 text-5xl font-bold shadow-[0_18px_45px_-24px_rgba(0,0,0,0.65)]">
                          {p.image ? (
                            <img src={p.image} alt={p.name} className="h-full w-full object-cover object-top" />
                          ) : (
                            p.name.split(' ').map(n => n[0]).slice(0,2).join('')
                          )}
                        </div>
                        <div className="relative mt-6 text-[11px] tracking-[0.28em] uppercase text-[#10B981] font-semibold">Portfolio</div>
                        <div className="relative mt-2 text-2xl font-bold leading-tight">{p.name}</div>
                        <div className="relative mt-2 text-sm text-white/70">{p.role}</div>
                        <div className="relative mt-6 h-px bg-white/15" />
                        <div className="relative mt-5 text-xs leading-relaxed text-white/62">Focused on measurable transformation, practical delivery and long-term healthcare value.</div>
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
