'use client';
import {
  Database, Bot, BarChart3, Activity, Brain, FlaskConical, Microscope, Droplets,
  HeartPulse, ShieldCheck, CloudCog, Workflow, Users, Pill, Dna, Globe2, Wallet,
  Cpu, Rocket, BadgeCheck, HeartHandshake
} from 'lucide-react';

const map = {
  Database, Bot, BarChart3, Activity, Brain, FlaskConical, Microscope, Droplets,
  HeartPulse, ShieldCheck, CloudCog, Workflow, Users, Pill, Dna, Globe2, Wallet,
  Cpu, Rocket, BadgeCheck, HeartHandshake,
};

export default function ServiceIcon({ name, className = 'w-6 h-6' }) {
  const Ic = map[name] || Database;
  return <Ic className={className} strokeWidth={1.5} />;
}
