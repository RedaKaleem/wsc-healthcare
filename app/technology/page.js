'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu, Database, Cloud, Network, ShieldCheck, BarChart3, Layers, CircuitBoard,
  ArrowRight, Activity, Brain, MonitorPlay, ServerCog, FlaskConical, Stethoscope,
  Watch, Zap, AlertTriangle, BellRing, CheckCircle2, GitBranch
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import Particles from '@/components/site/Particles';
import Reveal from '@/components/site/Reveal';

const stack = [
  { Ic: Cpu, t: 'AI & Machine Learning', d: 'Generative AI, LLMs, agents, predictive ML, computer vision. Healthcare-tuned models, RAG, guardrails.' },
  { Ic: Database, t: 'Healthcare Data', d: 'FHIR R4, HL7, CDA, X12, OMOP CDM, real-time streaming, data lakes and clinical lakehouses.' },
  { Ic: Cloud, t: 'Cloud Infrastructure', d: 'Azure, AWS, GCP and sovereign cloud. Kubernetes, Terraform, multi-region resilience and DR.' },
  { Ic: Network, t: 'Interoperability', d: 'SMART on FHIR, CDS Hooks, IHE profiles, HIE integration and EHR/EMR connectors.' },
  { Ic: CircuitBoard, t: 'IoT & Edge', d: 'IoMT gateways, MQTT, OPC-UA, edge AI for ICU/ED/Lab analyzers, sensor fusion.' },
  { Ic: BarChart3, t: 'Analytics & BI', d: 'Power BI, Tableau, Looker, dbt and Snowflake/BigQuery/Databricks lakehouses.' },
  { Ic: ShieldCheck, t: 'Security & Compliance', d: 'HIPAA, GDPR, HITRUST, NCA, ISO 27001. Zero-trust, KMS, secrets management, audit lineage.' },
  { Ic: Layers, t: 'Enterprise APIs', d: 'GraphQL & REST APIs, event-driven Kafka, OAuth2 / OIDC, developer portal and SDKs.' },
];

// ====== ENHANCED LIVE DATA PIPELINE ======
function LiveDataPipeline() {
  const [tick, setTick] = useState(0);
  const [counters, setCounters] = useState({ rps: 24832, latency: 187, processed: 14289341, accuracy: 99.4 });
  useEffect(() => {
    const id = setInterval(() => {
      setTick(t => t + 1);
      setCounters(c => ({
        rps: 23500 + Math.floor(Math.random() * 3500),
        latency: 160 + Math.floor(Math.random() * 60),
        processed: c.processed + Math.floor(Math.random() * 7000) + 4000,
        accuracy: +(99.2 + Math.random() * 0.7).toFixed(2),
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const sources = [
    { Ic: Stethoscope, t: 'EHR / EMR', m: 'HL7 v2.6', c: '#10B981' },
    { Ic: FlaskConical, t: 'Lab Analyzers', m: 'ASTM', c: '#34D399' },
    { Ic: Activity, t: 'IoMT Devices', m: 'MQTT', c: '#10B981' },
    { Ic: MonitorPlay, t: 'Imaging', m: 'DICOM', c: '#22C55E' },
    { Ic: Watch, t: 'Wearables', m: 'FHIR', c: '#10B981' },
  ];
  const stages = [
    { Ic: Network, t: 'Ingest', sub: 'Kafka · NATS' },
    { Ic: GitBranch, t: 'Transform', sub: 'FHIR Mapper' },
    { Ic: Brain, t: 'AI Layer', sub: 'LLM · CDS' },
  ];
  const outputs = [
    { Ic: MonitorPlay, t: 'Apps', c: '#10B981' },
    { Ic: BarChart3, t: 'Dashboards', c: '#34D399' },
    { Ic: BellRing, t: 'Alerts', c: '#22C55E' },
    { Ic: ServerCog, t: 'Data Lake', c: '#10B981' },
  ];

  const recentEvents = [
    { t: 'FHIR Bundle synced', s: 'ICU-04', tag: 'INGEST', c: 'bg-[#10B981]' },
    { t: 'Sepsis risk — 0.84', s: 'Bed 4B', tag: 'AI', c: 'bg-amber-400' },
    { t: 'DICOM study processed', s: 'Imaging-02', tag: 'TRANSFORM', c: 'bg-sky-400' },
    { t: 'OR schedule optimized', s: 'OR-7', tag: 'AI', c: 'bg-[#10B981]' },
    { t: 'HL7 message routed', s: 'Lab-01', tag: 'INGEST', c: 'bg-emerald-300' },
    { t: 'Alert dispatched', s: 'Code-Blue', tag: 'OUTPUT', c: 'bg-rose-400' },
  ];

  return (
    <section className="relative py-28 surface-mute overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] font-semibold">Live Data Pipeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight leading-[1.05]">Healthcare data, flowing in <span className="text-gradient-emerald">real time</span>.</h2>
              <p className="mt-5 text-[#0a1f17]/65 text-lg leading-relaxed max-w-xl">From the bedside to the cloud and back — every event observable, every signal actionable.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { l: 'Events / sec', v: counters.rps.toLocaleString(), c: '#10B981' },
                { l: 'Avg latency', v: `${counters.latency}ms`, c: '#0B6E4F' },
                { l: 'Processed today', v: counters.processed.toLocaleString(), c: '#10B981' },
                { l: 'AI accuracy', v: `${counters.accuracy}%`, c: '#0B6E4F' },
              ].map(k => (
                <div key={k.l} className="px-4 py-3 rounded-xl bg-white border border-[#0B6E4F]/12 shadow-sm">
                  <div className="text-xs text-[#0a1f17]/55 tracking-wider uppercase font-medium">{k.l}</div>
                  <div className="text-lg font-bold mt-1" style={{ color: k.c }}>{k.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl p-6 lg:p-10 bg-gradient-to-br from-[#0a1f17] to-[#02110a] text-white overflow-hidden green-glow border border-[#10B981]/15">
            <div className="absolute inset-0 dot-grid opacity-15" />
            <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#10B981]/20 rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-6">
              {/* SVG diagram */}
              <div className="lg:col-span-8">
                <svg viewBox="0 0 900 460" className="w-full h-auto">
                  <defs>
                    <linearGradient id="pipeFlow" x1="0" x2="1">
                      <stop offset="0" stopColor="#10B981" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#10B981" />
                      <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="box1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0a1f17" />
                      <stop offset="1" stopColor="#053826" />
                    </linearGradient>
                    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0" stopColor="#10B981" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glowF" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="b" />
                      <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  {/* Sources column (5 boxes) */}
                  {sources.map((s, i) => (
                    <g key={s.t}>
                      <rect x="20" y={20 + i * 82} width="170" height="66" rx="10" fill="url(#box1)" stroke="rgba(16,185,129,0.35)" />
                      <circle cx="45" cy={53 + i * 82} r="14" fill="#10B981" opacity="0.18" />
                      <circle cx="45" cy={53 + i * 82} r="4" fill="#10B981">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i*0.2}s`} repeatCount="indefinite" />
                      </circle>
                      <text x="70" y={48 + i * 82} fill="#fff" fontSize="13" fontWeight="600">{s.t}</text>
                      <text x="70" y={66 + i * 82} fill="#10B981" fontSize="10" letterSpacing="1.5">{s.m}</text>
                    </g>
                  ))}

                  {/* Curves from sources to ingest hub */}
                  {sources.map((_, i) => {
                    const y1 = 53 + i * 82;
                    const path = `M190,${y1} C260,${y1} 260,230 340,230`;
                    return (
                      <g key={i}>
                        <path d={path} stroke="url(#pipeFlow)" strokeWidth="1.8" fill="none" />
                        <circle r="3" fill="#10B981" filter="url(#glowF)">
                          <animateMotion dur={`${2.2 + i * 0.18}s`} repeatCount="indefinite" begin={`${i*0.35}s`} path={path} />
                        </circle>
                      </g>
                    );
                  })}

                  {/* Stages center */}
                  {stages.map((st, i) => (
                    <g key={st.t}>
                      <ellipse cx="400" cy={130 + i * 100} rx="60" ry="60" fill="url(#glow)" />
                      <circle cx="400" cy={130 + i * 100} r="42" fill="#053826" stroke="#10B981" strokeWidth="1.5" />
                      <text x="400" y={130 + i * 100 - 2} fill="#fff" fontSize="14" fontWeight="700" textAnchor="middle">{st.t}</text>
                      <text x="400" y={130 + i * 100 + 16} fill="#10B981" fontSize="9" letterSpacing="1.5" textAnchor="middle">{st.sub}</text>
                    </g>
                  ))}
                  {/* Vertical flow between stages */}
                  {[0, 1].map(i => {
                    const path = `M400,${172 + i * 100} L400,${188 + i * 100}`;
                    return (
                      <g key={i}>
                        <line x1="400" y1={172 + i * 100} x2="400" y2={188 + i * 100} stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
                      </g>
                    );
                  })}
                  {/* Lateral flow Stage to Stage indicator (small particles between) */}
                  {[0,1].map(i => (
                    <circle key={`p${i}`} r="2.5" fill="#10B981">
                      <animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i*0.4}s`} path={`M400,${172 + i * 100} L400,${188 + i * 100}`} />
                    </circle>
                  ))}

                  {/* AI Layer to outputs (4 outputs) */}
                  {outputs.map((o, i) => {
                    const y2 = 60 + i * 100;
                    const path = `M442,330 C540,330 540,${y2} 700,${y2}`;
                    return (
                      <g key={o.t}>
                        <path d={path} stroke="url(#pipeFlow)" strokeWidth="1.8" fill="none" />
                        <circle r="3" fill="#10B981" filter="url(#glowF)">
                          <animateMotion dur={`${2.4 + i * 0.2}s`} repeatCount="indefinite" begin={`${i*0.4}s`} path={path} />
                        </circle>
                        <rect x="700" y={y2 - 26} width="170" height="54" rx="10" fill="url(#box1)" stroke="rgba(16,185,129,0.35)" />
                        <text x="760" y={y2 + 4} fill="#fff" fontSize="13" fontWeight="600" textAnchor="middle">{o.t}</text>
                      </g>
                    );
                  })}

                  {/* Source label */}
                  <text x="105" y="12" fill="#10B981" fontSize="9" letterSpacing="3" textAnchor="middle" fontWeight="600">SOURCES</text>
                  <text x="400" y="12" fill="#10B981" fontSize="9" letterSpacing="3" textAnchor="middle" fontWeight="600">STREAM PIPELINE</text>
                  <text x="785" y="12" fill="#10B981" fontSize="9" letterSpacing="3" textAnchor="middle" fontWeight="600">OUTPUTS</text>

                  {/* Live throughput meter */}
                  <g transform="translate(20,440)">
                    <text fill="#fff" fontSize="10" fontWeight="600">Throughput</text>
                    {[...Array(40)].map((_, i) => {
                      const h = ((Math.sin((tick + i) * 0.5) + 1) / 2) * 10 + 2;
                      return <rect key={i} x={70 + i * 4} y={-h} width="3" height={h} fill="#10B981" opacity={0.4 + (i / 80)} />;
                    })}
                  </g>
                </svg>
              </div>
              {/* Live event console */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.28em] uppercase text-[#10B981] font-semibold">Live Events</div>
                  <div className="text-[10px] text-white/40 font-mono">tail · stream</div>
                </div>
                <div className="rounded-xl bg-black/35 border border-[#10B981]/12 p-4 max-h-[380px] overflow-hidden flex-1">
                  <div className="space-y-2.5">
                    {recentEvents.map((e, i) => (
                      <motion.div
                        key={`${e.t}-${tick}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 p-2.5 rounded-md bg-white/[0.04] border border-white/8"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${e.c} animate-pulse flex-shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-white truncate">{e.t}</div>
                          <div className="text-[10px] text-white/45 font-mono">{e.s}</div>
                        </div>
                        <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded">{e.tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/8">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#10B981]"><CheckCircle2 className="w-3 h-3" /> Healthy</div>
                    <div className="text-sm text-white font-semibold mt-1">All systems</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/8">
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-300"><AlertTriangle className="w-3 h-3" /> 2 advisories</div>
                    <div className="text-sm text-white font-semibold mt-1">Within SLA</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer technology pills */}
            <div className="relative mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3 font-semibold">Powered by</div>
              <div className="flex flex-wrap gap-2">
                {['Apache Kafka','NATS JetStream','Apache Flink','dbt','Snowflake','Databricks','FHIR R4','HL7 v2','DICOM','MQTT','OPC-UA','Vector DBs','LangGraph','SMART on FHIR','Azure FHIR','GCP Healthcare API'].map(t => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-white/85">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TechPage() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 radial-green" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <Particles density={55} />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-[#0B6E4F] mb-4 font-semibold">Technology</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#08130d] tracking-tight leading-[1.02] max-w-5xl">The technology stack powering <span className="text-gradient-emerald">modern healthcare enterprises</span>.</h1>
            <p className="mt-7 text-lg text-[#0a1f17]/65 max-w-2xl leading-relaxed">A composable, AI-native and interoperable stack — engineered for hospitals, ministries of health and life-sciences leaders.</p>
          </Reveal>
        </div>
      </section>
      <section className="relative py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stack.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <motion.div whileHover={{ y: -6 }} className="h-full p-7 rounded-xl border border-[#0B6E4F]/10 bg-white hover:border-[#0B6E4F]/30 hover:shadow-[0_20px_50px_-15px_rgba(11,110,79,0.2)] transition">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0B6E4F] to-[#022C1F] flex items-center justify-center green-glow-sm mb-5"><s.Ic className="w-5 h-5 text-white" strokeWidth={1.5} /></div>
                  <div className="text-lg font-semibold text-[#08130d]">{s.t}</div>
                  <div className="text-sm text-[#0a1f17]/60 mt-2 leading-relaxed">{s.d}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <LiveDataPipeline />
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08130d] tracking-tight">Want a deep architecture review?</h2>
            <p className="mt-5 text-[#0a1f17]/65 max-w-xl mx-auto">Get a private session with our healthcare CTO team — your stack, your data, your roadmap.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[#0B6E4F] to-[#022C1F] text-white font-medium text-sm green-glow">Book Architecture Review <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
