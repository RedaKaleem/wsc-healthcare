'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Zap, TrendingDown, Sparkles, ArrowUpRight, BadgeCheck, Activity, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const tabs = [
  { key: 'accuracy', label: 'Clinical Accuracy', Ic: Award, suffix: '%', maxScale: 100,
    kpi: 'Average AI Accuracy', kpiValue: '93.4%', kpiSub: '+27 pts vs industry baseline',
    headline: 'Diagnostic-grade accuracy across every clinical surface.',
    blurb: 'WSC Healthcare AI models are benchmarked against industry leaders and traditional workflows \u2014 across six high-stakes healthcare use cases.' },
  { key: 'speed', label: 'Decision Speed', Ic: Zap, suffix: '\u00d7', maxScale: 14,
    kpi: 'Faster Clinical Decisions', kpiValue: '9.6\u00d7', kpiSub: 'vs manual workflows',
    headline: 'Sub-second intelligence at the point of care.',
    blurb: 'From clinical signal to action in seconds. Our real-time pipeline beats traditional batch workflows by an order of magnitude.' },
  { key: 'cost', label: 'Cost Reduction', Ic: TrendingDown, suffix: '%', maxScale: 80,
    kpi: 'Operational Cost Reduction', kpiValue: '54%', kpiSub: 'avg. across deployments',
    headline: 'Material savings, validated in production.',
    blurb: 'Independent CFO-validated savings across hospital service lines. Every percentage point measured, audited and reported.' },
];

const rows = [
  { name: 'Sepsis Prediction', sub: 'ICU early warning',
    accuracy: { wsc: 94, industry: 76, traditional: 58 },
    speed:    { wsc: 11, industry: 4,  traditional: 1 },
    cost:     { wsc: 62, industry: 28, traditional: 0 } },
  { name: 'Readmission Risk', sub: '30-day stratification',
    accuracy: { wsc: 91, industry: 73, traditional: 55 },
    speed:    { wsc: 9,  industry: 3,  traditional: 1 },
    cost:     { wsc: 48, industry: 22, traditional: 0 } },
  { name: 'Imaging Diagnostics', sub: 'AI-assisted reads',
    accuracy: { wsc: 96, industry: 81, traditional: 68 },
    speed:    { wsc: 13, industry: 5,  traditional: 1 },
    cost:     { wsc: 58, industry: 30, traditional: 0 } },
  { name: 'Clinical Documentation', sub: 'Ambient AI scribe',
    accuracy: { wsc: 95, industry: 70, traditional: 50 },
    speed:    { wsc: 10, industry: 3,  traditional: 1 },
    cost:     { wsc: 67, industry: 25, traditional: 0 } },
  { name: 'Patient Triage', sub: 'ED arrival routing',
    accuracy: { wsc: 92, industry: 71, traditional: 54 },
    speed:    { wsc: 8,  industry: 3,  traditional: 1 },
    cost:     { wsc: 44, industry: 18, traditional: 0 } },
  { name: 'OR Scheduling', sub: 'Resource optimization',
    accuracy: { wsc: 93, industry: 74, traditional: 56 },
    speed:    { wsc: 7,  industry: 2,  traditional: 1 },
    cost:     { wsc: 51, industry: 24, traditional: 0 } },
];

function Bar({ value, max, color, delay, label, suffix }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 shrink-0 text-[10px] tracking-[0.18em] uppercase text-[#0a1f17]/55 font-semibold">{label}</div>
      <div className="flex-1 h-2.5 rounded-full bg-[#0B6E4F]/8 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{ background: color }}
        >
          <div className="absolute inset-0 animate-shine rounded-full" />
        </motion.div>
      </div>
      <div className="w-14 text-right text-[13px] font-semibold tabular-nums" style={{ color: color.includes('linear') ? '#0B6E4F' : color.replace('0.95', '1') }}>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }}>
          {value}{suffix}
        </motion.span>
      </div>
    </div>
  );
}

export default function AccuracyChart() {
  const [active, setActive] = useState('accuracy');
  const tab = tabs.find(t => t.key === active);
  const Ic = tab.Ic;
  return (
    <section className="relative py-28 overflow-hidden aurora">
      <div className="absolute inset-0 pattern-ring opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <BadgeCheck className="w-4 h-4 text-[#0B6E4F]" />
              <span className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] font-semibold">Benchmarked AI Performance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">
              <AnimatePresence mode="wait">
                <motion.span key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="block">
                  {tab.headline}
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="mt-5 text-[#0a1f17]/65 text-lg leading-relaxed max-w-2xl">{tab.blurb}</p>
          </div>
        </Reveal>

        {/* Tab switcher */}
        <Reveal delay={0.1}>
          <div className="mt-10 inline-flex p-1.5 rounded-xl bg-white border border-[#0B6E4F]/12 shadow-sm">
            {tabs.map(t => {
              const isActive = t.key === active;
              const TI = t.Ic;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`relative px-4 md:px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${isActive ? 'text-white' : 'text-[#0a1f17]/65 hover:text-[#0B6E4F]'}`}
                >
                  {isActive && (
                    <motion.div layoutId="tab-pill" className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] green-glow-sm" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                  <TI className={`relative w-4 h-4 ${isActive ? 'text-white' : 'text-[#0B6E4F]'}`} strokeWidth={1.6} />
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          {/* KPI panel */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl p-7 bg-gradient-to-br from-[#0a1f17] to-[#02110a] text-white overflow-hidden green-glow border border-[#10B981]/15 h-full"
              >
                <div className="absolute inset-0 pattern-ring opacity-15" />
                <div className="absolute -top-28 -right-28 w-72 h-72 bg-[#10B981]/22 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#0B6E4F] flex items-center justify-center">
                      <Ic className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#10B981] font-semibold">Headline KPI</span>
                  </div>
                  <div className="mt-6 text-[11px] tracking-[0.28em] uppercase text-white/55 font-semibold">{tab.kpi}</div>
                  <div className="mt-3 text-7xl font-bold text-white leading-none tabular-nums">{tab.kpiValue}</div>
                  <div className="mt-3 text-sm text-[#10B981] font-medium">{tab.kpiSub}</div>

                  <div className="mt-7 pt-6 border-t border-white/10 space-y-3">
                    {[
                      { Ic: CheckCircle2, t: 'Validated against industry benchmarks' },
                      { Ic: CheckCircle2, t: 'Independent CFO / clinical audit' },
                      { Ic: CheckCircle2, t: 'Continuous live model evaluation' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-white/85">
                        <b.Ic className="w-4 h-4 text-[#10B981]" />{b.t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-xs text-white/70">
                    <span className="flex h-2 w-2"><span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#10B981] opacity-70"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span></span>
                    Updated continuously from production fleet
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bars panel */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#0B6E4F]/12 p-6 lg:p-8 shadow-sm">
              {/* Legend */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-[#0B6E4F]/8">
                <div className="text-sm font-semibold text-[#08130d]">Per-use-case comparison</div>
                <div className="flex flex-wrap items-center gap-5 text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#0B6E4F]" />
                    <span className="text-[#0a1f17]/80 font-medium">WSC Healthcare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded-full bg-[#9ca3af]" />
                    <span className="text-[#0a1f17]/55">Industry Average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded-full bg-[#d1d5db]" />
                    <span className="text-[#0a1f17]/55">Traditional / Manual</span>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {rows.map((r, idx) => {
                    const d = r[active];
                    const lead = d.wsc - d.industry;
                    return (
                      <div key={r.name} className="group">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-[15px] font-semibold text-[#08130d] flex items-center gap-2">
                              {r.name}
                              <span className="inline-flex items-center gap-0.5 text-[10px] tracking-wider uppercase font-semibold text-[#0B6E4F] bg-[#10B981]/12 px-1.5 py-0.5 rounded">
                                <ArrowUpRight className="w-3 h-3" />+{lead}{tab.suffix} vs industry
                              </span>
                            </div>
                            <div className="text-xs text-[#0a1f17]/50 mt-0.5">{r.sub}</div>
                          </div>
                          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#0a1f17]/50">
                            <Activity className="w-3 h-3 text-[#10B981]" /> Live model
                          </div>
                        </div>
                        <div className="space-y-2.5">
                          <Bar value={d.wsc} max={tab.maxScale} suffix={tab.suffix} label="WSC AI"
                            color="linear-gradient(90deg, #10B981, #0B6E4F)" delay={idx * 0.06} />
                          <Bar value={d.industry} max={tab.maxScale} suffix={tab.suffix} label="Industry"
                            color="#9ca3af" delay={idx * 0.06 + 0.05} />
                          <Bar value={d.traditional} max={tab.maxScale} suffix={tab.suffix} label="Traditional"
                            color="#d1d5db" delay={idx * 0.06 + 0.1} />
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 pt-5 border-t border-[#0B6E4F]/8 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-[#0a1f17]/55 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B6E4F]" />
                  Benchmarks sourced from production deployments across 250+ healthcare clients.
                </div>
                <div className="text-xs text-[#0B6E4F] font-medium tracking-wide">
                  Updated {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
