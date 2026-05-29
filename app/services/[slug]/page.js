'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, Layers, Workflow, Zap, ChevronDown, Star, Building2 } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';
import ServiceIcon from '@/components/site/ServiceIcon';
import AnimatedCounter from '@/components/site/AnimatedCounter';
import { getServiceBySlug, services } from '@/lib/services-data';

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-[#0B6E4F]/10 border border-[#0B6E4F]/12 rounded-xl overflow-hidden bg-white">
      {items.map((it, i) => (
        <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left bg-white hover:bg-[#0B6E4F]/4 transition">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="text-[#08130d] text-[15px] font-medium">{it.q}</div>
            <ChevronDown className={`w-4 h-4 text-[#0a1f17]/50 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </div>
          <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
            <div className="px-6 pb-5 text-sm text-[#0a1f17]/65 leading-relaxed">{it.a}</div>
          </motion.div>
        </button>
      ))}
    </div>
  );
}

function ContactForm({ service }) {
  const [s, setS] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setStatus(null);
    try {
      const r = await fetch('/api/consultation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...s, service }) });
      if (r.ok) { setStatus('ok'); setS({ name: '', email: '', company: '', message: '' }); }
      else setStatus('err');
    } catch { setStatus('err'); }
    setLoading(false);
  };
  return (
    <form onSubmit={submit} className="rounded-xl border border-[#0B6E4F]/12 p-7 space-y-3 bg-white shadow-sm">
      <div className="text-xs tracking-[0.28em] uppercase text-[#0B6E4F] font-semibold">Consultation Request</div>
      <div className="text-xl font-semibold text-[#08130d]">Speak with our healthcare team</div>
      <input required value={s.name} onChange={e=>setS({...s,name:e.target.value})} placeholder="Full name" className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-2.5 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
      <input required type="email" value={s.email} onChange={e=>setS({...s,email:e.target.value})} placeholder="Work email" className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-2.5 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
      <input value={s.company} onChange={e=>setS({...s,company:e.target.value})} placeholder="Organization" className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-2.5 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
      <textarea rows={4} value={s.message} onChange={e=>setS({...s,message:e.target.value})} placeholder="Tell us about your goals..." className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-2.5 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F] resize-none" />
      <button disabled={loading} className="w-full bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white text-sm font-medium py-3 rounded-md hover:opacity-95 green-glow-sm disabled:opacity-50">{loading ? 'Sending...' : 'Request Consultation'}</button>
      {status === 'ok' && <div className="text-xs text-[#0B6E4F]">Thank you. Our team will be in touch within 1 business day.</div>}
      {status === 'err' && <div className="text-xs text-red-500">Something went wrong. Please try again.</div>}
    </form>
  );
}

export default function ServiceDetail() {
  const params = useParams();
  const service = getServiceBySlug(params?.slug);
  if (!service) return (
    <main>
      <Navbar />
      <section className="pt-40 pb-20 container mx-auto px-6 text-center">
        <div className="text-[#0a1f17]/60">Service not found.</div>
        <Link href="/services" className="text-[#0B6E4F] underline mt-3 inline-block">Back to services</Link>
      </section>
      <Footer />
    </main>
  );
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const faqs = [
    { q: `What outcomes can we expect from ${service.title}?`, a: `Most engagements deliver measurable outcomes within 90 days, including ${service.benefits.slice(0,2).join(' and ').toLowerCase()}.` },
    { q: 'How long does an enterprise deployment take?', a: 'Production deployments typically range from 12 to 36 weeks, depending on integration footprint and data governance scope. Pilots can run in 4–8 weeks.' },
    { q: 'Which compliance frameworks are supported?', a: 'HIPAA, GDPR, HITRUST, NCA ECC, ISO 27001 and applicable regional regulations (NPHIES, SAUDI MoH, NHS DCB).' },
    { q: 'Can this integrate with our existing EHR/EMR?', a: 'Yes. We integrate natively with Epic, Cerner/Oracle Health, Meditech, Allscripts, InterSystems, openEHR and custom EHRs via FHIR R4, HL7 v2/v3 and CDA.' },
  ];
  return (
    <main className="relative">
      <Navbar />
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 radial-green" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles density={55} />
        <div className="absolute -top-32 -right-40 w-[600px] h-[600px] bg-[#10B981]/12 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#0a1f17]/55 hover:text-[#0B6E4F] mb-7"><ArrowLeft className="w-4 h-4" /> All Services</Link>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm">
                    <ServiceIcon name={service.icon} className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] font-semibold font-mono">Category {service.letter}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-[#08130d] tracking-tight leading-[1.05]">{service.title}</h1>
                <p className="mt-6 text-xl text-gradient-emerald max-w-2xl leading-relaxed font-medium">{service.tagline}</p>
                <p className="mt-5 text-base text-[#0a1f17]/65 max-w-2xl leading-relaxed">{service.description}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white font-medium text-sm green-glow hover:from-[#10785a] transition">Book a briefing <ArrowRight className="w-4 h-4" /></Link>
                  <a href="#features" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[#0B6E4F]/20 bg-white text-[#0a1f17] font-medium text-sm hover:bg-[#0B6E4F]/5 transition">View capabilities</a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#0a1f17] to-[#02110a] text-white green-glow border border-[#10B981]/15">
                  <div className="absolute inset-0 dot-grid opacity-15 rounded-2xl" />
                  <div className="relative">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#10B981] font-semibold">Outcome Snapshot</div>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                      <div>
                        <div className="text-4xl font-bold text-white">{service.benefits.length}</div>
                        <div className="text-xs text-white/55 mt-1">Documented benefits</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-white">{service.features.length}</div>
                        <div className="text-xs text-white/55 mt-1">Core capabilities</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-white">{service.tech.length}+</div>
                        <div className="text-xs text-white/55 mt-1">Tech components</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-white">12<span className="text-2xl text-white/60">wk</span></div>
                        <div className="text-xs text-white/55 mt-1">Avg. pilot timeline</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-white/45 mb-3 font-semibold">Industry use cases</div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.useCases.map(u => <span key={u} className="text-[11px] px-2.5 py-1 rounded bg-white/8 border border-white/10 text-white/85">{u}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Capabilities</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">What&rsquo;s included in this platform.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] transition h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#0B6E4F]/8 border border-[#0B6E4F]/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#0B6E4F]" strokeWidth={1.5} />
                  </div>
                  <div className="text-[15px] font-semibold text-[#08130d]">{f}</div>
                  <div className="text-xs text-[#0a1f17]/55 mt-2 leading-relaxed">Enterprise-grade implementation with security, audit and compliance built in.</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 surface-mute">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Workflow</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">How {service.title.split(' ')[0]} delivers value.</h2>
            </div>
          </Reveal>
          <div className="relative grid md:grid-cols-4 gap-5 mt-14">
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-transparent via-[#0B6E4F]/50 to-transparent" />
            {[
              { Ic: Layers, t: 'Assess', d: 'Architecture, data and clinical workflow review.' },
              { Ic: Workflow, t: 'Design', d: 'Reference architecture and roadmap tailored to your enterprise.' },
              { Ic: Cpu, t: 'Deploy', d: 'Phased rollout with integration, AI and governance.' },
              { Ic: Zap, t: 'Operate', d: 'Continuous optimization and managed services.' },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.12}>
                <div className="relative">
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm z-10">
                      <s.Ic className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#0a1f17]/45 tracking-wider uppercase font-mono">Phase {i + 1}</div>
                    <div className="text-lg font-semibold text-[#08130d] mt-1">{s.t}</div>
                    <div className="text-xs text-[#0a1f17]/60 mt-2 leading-relaxed">{s.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Technology Stack</div>
                <h2 className="text-4xl font-bold text-[#08130d] tracking-tight leading-[1.1]">Best-of-breed, enterprise-grade, AI-native.</h2>
                <p className="mt-5 text-[#0a1f17]/60 leading-relaxed">Composable modern stack covering data, AI, security and infrastructure. Vendor-neutral where it matters, opinionated where it counts.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t, i) => (
                  <Reveal key={t} delay={i * 0.03}>
                    <div className="px-4 py-2.5 rounded-md bg-white border border-[#0B6E4F]/15 text-sm text-[#0a1f17]/85 hover:border-[#0B6E4F] hover:bg-[#0B6E4F]/5 transition">{t}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 surface-mute">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Benefits</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Outcomes your board will notice.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {service.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-white border border-[#0B6E4F]/12 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-[#08130d]">{b}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1f17] to-[#02110a] text-white">
              <div className="absolute inset-0 dot-grid opacity-15" />
              <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#10B981]/15 rounded-full blur-3xl" />
              <div className="relative p-10 lg:p-14 grid lg:grid-cols-2 gap-10">
                <div>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[#10B981] font-semibold"><Building2 className="w-4 h-4" /> Case Study</div>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">National Health Network deployed {service.title} across 11 hospitals.</h3>
                  <p className="mt-5 text-white/70 leading-relaxed">In 9 months, our team designed and delivered a unified {service.title.toLowerCase()} program — driving measurable clinical and operational improvements at enterprise scale.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 self-center">
                  {[
                    { v: 11, l: 'Hospitals' },
                    { v: 9, l: 'Months to value' },
                    { v: 27, l: '% efficiency lift', s: '%' },
                    { v: 4.2, l: 'M patients impacted', s: 'M' },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl p-5 bg-white/5 border border-white/10">
                      <div className="text-4xl font-bold text-[#10B981]">
                        <AnimatedCounter value={m.v} suffix={m.s || ''} />
                      </div>
                      <div className="text-xs text-white/55 mt-1 tracking-wide uppercase">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="relative py-24 surface-mute">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">FAQ</div>
              <h2 className="text-4xl font-bold text-[#08130d] tracking-tight leading-[1.1]">Frequently asked questions.</h2>
            </Reveal>
            <div className="mt-8"><Accordion items={faqs} /></div>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}><ContactForm service={service.slug} /></Reveal>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#08130d] tracking-tight">Related healthcare capabilities</h2>
            <Link href="/services" className="text-sm text-[#0a1f17]/65 hover:text-[#0B6E4F] inline-flex items-center gap-2">All services <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map(r => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group block">
                <motion.div whileHover={{ y: -4 }} className="p-7 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] h-full transition">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm group-hover:scale-110 transition mb-5">
                    <ServiceIcon name={r.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-base font-semibold text-[#08130d]">{r.title}</div>
                  <div className="text-xs text-[#0a1f17]/55 mt-2 leading-relaxed">{r.short}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
