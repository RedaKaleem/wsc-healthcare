'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';
import { services } from '@/lib/services-data';

const companyName = 'Watania Solutions Company';
const headquartersAddress = 'Al Tafaseel Business Park, Al Takassusi St. Riyadh';
const mapSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=46.6525%2C24.6795%2C46.6925%2C24.7195&layer=mapnik&marker=24.6995%2C46.6725';

export default function ContactPage() {
  const [f, setF] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setStatus(null);
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      if (r.ok) { setStatus('ok'); setF({ name: '', email: '', company: '', phone: '', service: '', message: '' }); }
      else setStatus('err');
    } catch { setStatus('err'); }
    setLoading(false);
  };
  return (
    <main>
      <Navbar />
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-green" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles density={55} />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Contact</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#08130d] tracking-tight leading-[1.02] max-w-4xl">Let&rsquo;s build your <span className="text-gradient-emerald">healthcare future</span>.</h1>
            <p className="mt-7 text-lg text-[#0a1f17]/65 max-w-2xl leading-relaxed">Private briefings with our healthcare AI leadership team. Architecture reviews, ROI modeling and tailored roadmaps.</p>
          </Reveal>
        </div>
      </section>
      <section className="relative py-20">
        <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            {[
              { Ic: Mail, t: 'Email', v: 'info@wsc.com.sa', s: 'Replies within 1 business day' },
              { Ic: Phone, t: 'Phone', v: '+966 11 4020500', s: '9:00 – 18:00 (GMT+3)' },
              { Ic: MapPin, t: 'Headquarters', v: headquartersAddress, s: 'Offices: Egypt • India'}, 
              { Ic: Calendar, t: 'Book a meeting', v: 'Schedule a 30-minute briefing', s: 'NDA-protected, executive level' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <motion.div whileHover={{ x: 4 }} className="flex gap-5 items-start p-6 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_15px_40px_-15px_rgba(11,110,79,0.2)] transition" suppressHydrationWarning>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm flex-shrink-0"><c.Ic className="w-5 h-5 text-white" strokeWidth={1.5} /></div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#0B6E4F] font-semibold">{c.t}</div>
                    <div className="text-lg font-semibold text-[#08130d] mt-1" suppressHydrationWarning>{c.v}</div>
                    <div className="text-xs text-[#0a1f17]/55 mt-1">{c.s}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <div className="relative rounded-xl overflow-hidden border border-[#0B6E4F]/10 h-64 bg-white">
                <iframe src={mapSrc} className="w-full h-full" title={`${companyName} location map`} />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 flex items-center gap-3 border border-[#0B6E4F]/15 shadow-sm">
                  <Building2 className="w-5 h-5 text-[#0B6E4F]" />
                  <div>
                    <div className="text-sm font-semibold text-[#08130d]">{companyName}</div>
                    <div className="text-xs text-[#0a1f17]/60">{headquartersAddress}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={submit} className="rounded-2xl border border-[#0B6E4F]/12 p-8 lg:p-10 space-y-4 bg-white shadow-sm">
                <div className="text-[11px] tracking-[0.28em] uppercase text-[#0B6E4F] font-semibold">Enterprise Inquiry</div>
                <div className="text-2xl font-semibold text-[#08130d]">Talk to our healthcare leadership team</div>
                <div className="grid md:grid-cols-2 gap-3 pt-2">
                  <input required value={f.name} onChange={e=>setF({...f,name:e.target.value})} placeholder="Full name" className="bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
                  <input required type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} placeholder="Work email" className="bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
                  <input value={f.company} onChange={e=>setF({...f,company:e.target.value})} placeholder="Organization" className="bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
                  <input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} placeholder="Phone" className="bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F]" />
                </div>
                <select value={f.service} onChange={e=>setF({...f,service:e.target.value})} className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] focus:outline-none focus:border-[#0B6E4F]">
                  <option value="">Area of interest — select a service</option>
                  {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                </select>
                <textarea required rows={5} value={f.message} onChange={e=>setF({...f,message:e.target.value})} placeholder="Tell us about your healthcare transformation goals..." className="w-full bg-[#f6faf7] border border-[#0B6E4F]/12 rounded-md px-3 py-3 text-sm text-[#08130d] placeholder:text-[#0a1f17]/35 focus:outline-none focus:border-[#0B6E4F] resize-none" />
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs text-[#0a1f17]/55 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#0B6E4F]" /> NDA-protected. Replies within 1 business day.</div>
                  <button disabled={loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white font-medium text-sm green-glow hover:from-[#10785a] disabled:opacity-50">{loading ? 'Sending...' : 'Submit Inquiry'} <ArrowRight className="w-4 h-4" /></button>
                </div>
                {status === 'ok' && <div className="text-sm text-[#0B6E4F]">Thank you. We&rsquo;ll be in touch shortly.</div>}
                {status === 'err' && <div className="text-sm text-red-500">Something went wrong. Please try again.</div>}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
