'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, ChevronRight, Sparkles, Activity, ShieldCheck, Cpu, Globe2,
  BarChart3, Workflow, Brain, HeartPulse, Database, CloudCog, Stethoscope, Hospital,
  CheckCircle2, Zap, Network, LineChart, Layers, GitBranch, Quote, Star,
  TrendingUp
} from 'lucide-react';
import { useRef } from 'react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';
import AnimatedCounter from '@/components/site/AnimatedCounter';
import ServiceIcon from '@/components/site/ServiceIcon';
import AccuracyChart from '@/components/site/AccuracyChart';
import { services, stats, partners } from '@/lib/services-data';

const FloatingCard = ({ children, className = '', delay = 0, x = 0, y = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92, x, y }}
    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute rounded-xl p-4 bg-white shadow-[0_18px_60px_-15px_rgba(11,110,79,0.25)] border border-[#0B6E4F]/12 ${className}`}
  >{children}</motion.div>
);

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  return (
    <section ref={ref} className="relative min-h-[100vh] pt-32 pb-32 overflow-hidden">
      <div className="absolute inset-0 radial-green" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <Particles density={60} />
      <motion.div style={{ y }} className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#10B981]/12 rounded-full blur-[120px]" />
      <motion.div style={{ y }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#0B6E4F]/12 rounded-full blur-[140px]" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#0B6E4F]/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#0a1f17]/80 font-semibold">Enterprise Healthcare Intelligence</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-7 text-[2.7rem] md:text-[3.6rem] lg:text-[4.4rem] font-bold leading-[1.02] tracking-tight text-[#08130d]">
                Transforming Healthcare
                <br />
                Through <span className="text-gradient-emerald">AI, Data &amp;</span>
                <br />
                <span className="text-gradient-green">Intelligent Operations</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 text-lg text-[#0a1f17]/65 max-w-xl leading-relaxed">
                Enterprise healthcare solutions powered by AI, analytics, interoperability, diagnostics and smart operational systems — engineered for billion-dollar healthcare organizations.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/services" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white font-medium text-sm green-glow hover:from-[#0e8460] hover:to-[#053826] transition-all">
                  Explore Healthcare Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-[#0B6E4F]/20 bg-white text-[#0a1f17] font-medium text-sm hover:border-[#0B6E4F] hover:bg-[#0B6E4F]/5 transition-all">
                  Book Consultation <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 flex items-center gap-7 flex-wrap">
                {[
                  { Ic: ShieldCheck, t: 'HIPAA & GDPR' },
                  { Ic: Sparkles, t: 'AI-Native' },
                  { Ic: Network, t: 'FHIR / HL7 Ready' },
                  { Ic: CloudCog, t: 'Cloud & Sovereign' },
                ].map(({ Ic, t }) => (
                  <div key={t} className="flex items-center gap-2 text-[#0a1f17]/55 text-xs tracking-wider">
                    <Ic className="w-4 h-4 text-[#0B6E4F]" strokeWidth={1.6} /> {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <div className="relative h-[540px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(11,110,79,0.35)] border border-[#0B6E4F]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f17] via-[#08160f] to-[#02110a]" />
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="relative p-6 h-full text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10B981] to-[#0B6E4F] flex items-center justify-center">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/45 uppercase tracking-wider">Hospital OS</div>
                        <div className="text-sm text-white font-medium">Real-time Operations</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#10B981]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                      LIVE
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {[
                      { l: 'ICU Beds', v: '94%', sub: 'Util' },
                      { l: 'ED Wait', v: '12m', sub: '-22%' },
                      { l: 'AI Alerts', v: '37', sub: 'Active' },
                    ].map(s => (
                      <div key={s.l} className="rounded-lg p-3 bg-white/[0.04] border border-white/8">
                        <div className="text-[10px] text-white/45 uppercase tracking-wider">{s.l}</div>
                        <div className="text-xl font-semibold text-white mt-1">{s.v}</div>
                        <div className="text-[10px] text-[#10B981] mt-0.5">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg p-4 bg-white/[0.03] border border-white/8">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-[11px] text-white/55">Patient Flow · 24h</div>
                      <div className="text-[10px] text-white/40">FHIR Stream</div>
                    </div>
                    <svg viewBox="0 0 300 80" className="w-full h-20">
                      <defs>
                        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#10B981" stopOpacity="0.5" />
                          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,55 C25,40 50,52 75,38 C100,24 125,42 150,30 C175,20 200,38 225,22 C250,10 275,28 300,18 L300,80 L0,80 Z" fill="url(#area)" />
                      <path d="M0,55 C25,40 50,52 75,38 C100,24 125,42 150,30 C175,20 200,38 225,22 C250,10 275,28 300,18" stroke="#10B981" strokeWidth="1.8" fill="none" />
                      {[55,38,30,22,18].map((y,i) => (
                        <circle key={i} cx={i*75} cy={y} r="2.2" fill="#fff" />
                      ))}
                    </svg>
                  </div>
                  <div className="mt-5 space-y-2">
                    {[
                      { t: 'Sepsis Risk Detected — Ward 4B', s: 'Critical', c: 'bg-amber-400' },
                      { t: 'OR Schedule Optimized (+18%)', s: 'AI Auto', c: 'bg-[#10B981]' },
                      { t: 'EHR sync · 14,832 records', s: 'Synced', c: 'bg-sky-400' },
                    ].map(a => (
                      <div key={a.t} className="flex items-center gap-3 rounded-md px-3 py-2 bg-white/[0.04] border border-white/8">
                        <div className={`w-1.5 h-1.5 rounded-full ${a.c} animate-pulse`}></div>
                        <div className="flex-1 text-xs text-white/85">{a.t}</div>
                        <div className="text-[10px] text-white/40">{a.s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <FloatingCard className="-left-10 top-6 w-44" delay={0.6} x={-20}>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#0B6E4F]" />
                  <div className="text-[10px] text-[#0a1f17]/50 uppercase tracking-wider">Clinical AI</div>
                </div>
                <div className="text-sm font-semibold text-[#0a1f17] mt-2">Risk Prediction</div>
                <div className="text-[10px] text-[#10B981] font-medium">+93% accuracy</div>
              </FloatingCard>
              <FloatingCard className="-right-6 top-44 w-48" delay={0.8} x={20}>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#0B6E4F]" />
                  <div className="text-[10px] text-[#0a1f17]/50 uppercase tracking-wider">FHIR Engine</div>
                </div>
                <div className="text-sm font-semibold text-[#0a1f17] mt-2">Interoperability</div>
                <div className="mt-2 h-1.5 bg-[#0B6E4F]/10 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-gradient-to-r from-[#0B6E4F] to-[#10B981]"></div>
                </div>
              </FloatingCard>
              <FloatingCard className="-left-4 -bottom-6 w-52" delay={1} y={20}>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#10B981]" />
                  <div className="text-[10px] text-[#0a1f17]/50 uppercase tracking-wider">ICU Monitor</div>
                </div>
                <div className="flex items-end gap-1 mt-2 h-8">
                  {[6,9,5,12,8,14,10,16,11,15,9,18,12,17,14].map((h,i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#0B6E4F]/30 to-[#10B981] rounded-sm" style={{ height: `${h*5}%` }} />
                  ))}
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersStrip() {
  return (
    <section className="relative py-10 border-y border-[#0B6E4F]/8 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-[10px] text-center tracking-[0.4em] uppercase text-[#0a1f17]/40 mb-6 font-medium">Trusted by leading healthcare organizations</div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map(p => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0a1f17]/45 hover:text-[#0B6E4F] transition-colors tracking-wide"
              aria-label={`Visit ${p.name} website`}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutDivision() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Healthcare Division</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#08130d] leading-[1.05]">
                The enterprise platform powering the world&rsquo;s most ambitious healthcare programs.
              </h2>
              <p className="mt-6 text-[#0a1f17]/65 text-lg leading-relaxed">
                WSC Healthcare is the dedicated healthcare technology division engineered for hospitals, ministries of health, payers and life-sciences leaders — combining clinical depth, data fluency and AI-native engineering.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { Ic: Stethoscope, t: 'Clinician-led product' },
                  { Ic: Layers, t: 'Composable architecture' },
                  { Ic: Zap, t: 'Real-time, event-driven' },
                  { Ic: ShieldCheck, t: 'Enterprise security' },
                ].map(({ Ic, t }) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-[#0a1f17]/85">
                    <div className="w-9 h-9 rounded-md bg-[#0B6E4F]/8 border border-[#0B6E4F]/20 flex items-center justify-center">
                      <Ic className="w-4 h-4 text-[#0B6E4F]" strokeWidth={1.6} />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-9 inline-flex items-center gap-2 text-sm text-[#0B6E4F] border-b-2 border-[#0B6E4F] pb-1 hover:gap-3 transition-all font-medium">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: 'Patient Records', v: '40M+', Ic: Database },
                  { l: 'AI Models Deployed', v: '180+', Ic: Brain },
                  { l: 'FHIR Integrations', v: '950+', Ic: Network },
                  { l: 'Hospitals Powered', v: '250+', Ic: Hospital },
                ].map(({ l, v, Ic }) => (
                  <motion.div
                    key={l}
                    whileHover={{ y: -4 }}
                    className="rounded-xl p-6 bg-white border border-[#0B6E4F]/10 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.25)] hover:border-[#0B6E4F]/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center mb-4 green-glow-sm">
                      <Ic className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl font-bold text-[#08130d]">{v}</div>
                    <div className="text-xs text-[#0a1f17]/50 mt-1 tracking-wider uppercase font-medium">{l}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { Ic: Brain, t: 'AI-Native Architecture', d: 'Built from the ground up on generative AI, LLMs, agents and modern ML — not retrofitted.' },
    { Ic: Network, t: 'Interoperability First', d: 'FHIR R4, HL7, CDA, X12 — designed to integrate, not lock you in.' },
    { Ic: ShieldCheck, t: 'Healthcare-Grade Security', d: 'HIPAA, GDPR, HITRUST, NCA — with zero-trust networking and full audit lineage.' },
    { Ic: Zap, t: 'Real-Time Intelligence', d: 'Event-driven streaming and edge AI for ICU, ED and operational command centers.' },
    { Ic: Globe2, t: 'Sovereign & Global', d: 'Multi-region, sovereign-cloud ready with strict data residency controls.' },
    { Ic: Workflow, t: 'Composable Platform', d: 'Microservices, FHIR-native APIs and AI-ready data fabric — use any module.' },
  ];
  return (
    <section className="relative py-28 surface-mute">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Why WSC Healthcare</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#08130d] leading-[1.05]">A different kind of healthcare technology partner.</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="group relative p-7 rounded-xl bg-white border border-[#0B6E4F]/10 hover:border-[#0B6E4F]/35 transition-all overflow-hidden h-full shadow-sm hover:shadow-[0_25px_60px_-20px_rgba(11,110,79,0.25)]">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#10B981]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-[#0B6E4F]/8 border border-[#0B6E4F]/20 flex items-center justify-center mb-5 group-hover:bg-[#0B6E4F] transition-colors">
                    <it.Ic className="w-5 h-5 text-[#0B6E4F] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="text-lg font-semibold text-[#08130d]">{it.t}</div>
                  <div className="text-sm text-[#0a1f17]/60 mt-2 leading-relaxed">{it.d}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const featured = services.slice(0, 9);
  return (
    <section className="relative py-28 surface-mute">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Service Categories</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">21 enterprise healthcare capabilities, one unified platform.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#0a1f17] border border-[#0B6E4F]/20 bg-white rounded-md px-4 py-2.5 hover:border-[#0B6E4F] hover:bg-[#0B6E4F]/5 transition-all">
              View all 21 services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
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
                    <div className="mt-6 inline-flex items-center gap-2 text-xs text-[#0B6E4F] group-hover:gap-3 transition-all font-medium">
                      Explore Service <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="relative py-28 overflow-hidden mesh-soft">
      <div className="absolute inset-0 radial-green opacity-50" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Enterprise Architecture</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">From bedside to boardroom, in one architecture.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative rounded-2xl p-8 lg:p-12 border border-[#0B6E4F]/10 bg-gradient-to-br from-white to-[#f4faf6] shadow-sm">
            <svg viewBox="0 0 1000 380" className="w-full h-auto">
              <defs>
                <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#0B6E4F" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#10B981" stopOpacity="1" />
                  <stop offset="1" stopColor="#0B6E4F" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="boxG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#f0f7f3" />
                </linearGradient>
              </defs>
              {['EHR / EMR','Lab Analyzers','IoMT Devices','Imaging','Wearables'].map((s, i) => (
                <g key={s}>
                  <rect x={20 + i*195} y="20" width="170" height="50" rx="8" fill="url(#boxG)" stroke="rgba(11,110,79,0.4)" />
                  <text x={105 + i*195} y="50" fill="#08130d" fontSize="13" fontWeight="500" textAnchor="middle">{s}</text>
                  <line x1={105 + i*195} y1="70" x2={105 + i*195} y2="110" stroke="url(#lineG)" strokeWidth="1.5" />
                  <circle cx={105 + i*195} cy="110" r="3" fill="#10B981">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" begin={`${i*0.2}s`} />
                  </circle>
                </g>
              ))}
              <rect x="20" y="115" width="960" height="60" rx="10" fill="#0a1f17" stroke="#0B6E4F" strokeWidth="1.5" />
              <text x="500" y="152" fill="#ffffff" fontSize="15" fontWeight="600" textAnchor="middle">FHIR-Native Healthcare Data Fabric · Real-Time Streaming · Governance</text>
              <line x1="500" y1="175" x2="500" y2="205" stroke="url(#lineG)" strokeWidth="1.5" />
              <rect x="200" y="205" width="600" height="55" rx="10" fill="url(#boxG)" stroke="rgba(11,110,79,0.5)" />
              <text x="500" y="238" fill="#08130d" fontSize="14" fontWeight="600" textAnchor="middle">AI Intelligence Layer · LLMs · Agents · Predictive ML · CDS</text>
              {['Clinical Apps','Operational AI','Analytics & BI','Engagement'].map((s, i) => (
                <g key={s}>
                  <line x1={140 + i*240} y1="260" x2={140 + i*240} y2="290" stroke="url(#lineG)" strokeWidth="1.5" />
                  <rect x={50 + i*240} y="290" width="180" height="55" rx="8" fill="url(#boxG)" stroke="rgba(11,110,79,0.3)" />
                  <text x={140 + i*240} y="322" fill="#08130d" fontSize="13" textAnchor="middle">{s}</text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorkflowAnim() {
  const steps = [
    { Ic: Database, t: 'Ingest', d: 'FHIR, HL7, IoMT, imaging — unified in real time.' },
    { Ic: Brain, t: 'Reason', d: 'Clinical AI, LLMs and predictive models continuously evaluate.' },
    { Ic: Workflow, t: 'Orchestrate', d: 'AI agents trigger workflows and notify the right clinician.' },
    { Ic: HeartPulse, t: 'Deliver', d: 'Outcomes at the bedside, command center and patient app.' },
  ];
  return (
    <section className="relative py-28 surface-mute overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">AI Healthcare Workflow</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">From clinical signal to clinical action — in seconds.</h2>
          </div>
        </Reveal>
        <div className="relative grid md:grid-cols-4 gap-5">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-[#0B6E4F]/50 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.15}>
              <div className="relative">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="absolute w-24 h-24 rounded-full bg-[#10B981]/20 animate-pulse-ring"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow z-10">
                    <s.Ic className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-[#0a1f17]/45 tracking-wider uppercase font-mono">Step {i + 1}</div>
                  <div className="text-xl font-semibold text-[#08130d] mt-1">{s.t}</div>
                  <div className="text-sm text-[#0a1f17]/60 mt-2 leading-relaxed max-w-[240px] mx-auto">{s.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-24 border-y border-[#0B6E4F]/10 overflow-hidden bg-gradient-to-br from-[#0a1f17] to-[#02110a]">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#10B981]/15 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="text-5xl md:text-6xl font-bold text-white leading-none">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-[#10B981] tracking-[0.2em] uppercase mt-3 font-semibold">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    { q: 'WSC Healthcare consolidated 11 hospital systems into a single FHIR fabric in 9 months — the velocity is unmatched in our industry.', a: 'Dr. A. Al-Mansour', r: 'CMIO, National Health Network' },
    { q: 'Their AI command center reduced our ED length-of-stay by 27% in the first quarter. Truly enterprise-grade.', a: 'Sarah Whitfield', r: 'COO, Metropolitan Health' },
    { q: 'The most clinically thoughtful AI partner we have engaged. Built for healthcare, not retrofitted from another vertical.', a: 'Prof. R. Iyer', r: 'Director of Innovation, Apex Medical' },
  ];
  return (
    <section className="relative py-28 mesh-soft">
      <div className="absolute inset-0 pattern-diag opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Voices from the field</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Trusted by leaders of the world&rsquo;s most ambitious healthcare programs.</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {list.map((t, i) => (
            <Reveal key={t.a} delay={i * 0.1}>
              <div className="h-full p-8 rounded-xl border border-[#0B6E4F]/10 bg-gradient-to-b from-white to-[#f6faf7] hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] transition-all">
                <Quote className="w-7 h-7 text-[#0B6E4F] mb-5" />
                <p className="text-[#0a1f17]/85 text-[15px] leading-relaxed">“{t.q}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#08130d]">{t.a}</div>
                    <div className="text-xs text-[#0a1f17]/55">{t.r}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(n => <Star key={n} className="w-3.5 h-3.5 fill-[#0B6E4F] text-[#0B6E4F]" />)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl p-10 lg:p-16 overflow-hidden bg-gradient-to-br from-[#0a1f17] to-[#02110a] text-white green-glow">
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#10B981]/22 rounded-full blur-3xl" />
            <Particles density={40} color="16,185,129" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[11px] tracking-[0.32em] uppercase text-[#10B981] mb-4 font-semibold">Schedule a private briefing</div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.05]">Ready to transform your healthcare enterprise?</h3>
                <p className="mt-6 text-white/70 text-lg max-w-xl">Speak directly with our healthcare AI leadership team about your roadmap, architecture and transformation goals.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#08130d] font-medium text-sm hover:bg-[#10B981] hover:text-white transition">
                    Book Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/20 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition">
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['NDA-protected briefings','Architecture review','Tailored ROI model','Direct CTO access'].map(x => (
                  <div key={x} className="rounded-lg p-4 flex items-center gap-3 text-sm text-white/90 bg-white/8 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />{x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PartnersStrip />
      <AboutDivision />
      <WhyChooseUs />
      <AccuracyChart />
      <ServicesGrid />
      <Architecture />
      <WorkflowAnim />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
