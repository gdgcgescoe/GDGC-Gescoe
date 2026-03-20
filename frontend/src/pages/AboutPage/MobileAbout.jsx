import React from 'react';
import { Rocket, Lightbulb, Info, ArrowRight } from 'lucide-react';
import { WHAT_WE_DO, CORE_VALUES, ABOUT_STATS } from '../../components/About/aboutData';
import { NumberTicker } from "@/components/ui/number-ticker";

const COMMUNITY_URL = 'https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india/';

const MobileAbout = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-24 pb-24 px-5 text-center overflow-hidden">
      {/* Ambient Background Glows Removed for Mobile Performance */}

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col items-center mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gdg-blue/30 bg-gdg-blue/5 backdrop-blur-md">
            <Info className="w-3.5 h-3.5 text-gdg-yellow" />
            <span className="text-gdg-blue font-bold tracking-[0.1em] uppercase text-[10px]">
              About GDG GESCOE
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col items-center text-center gap-1 mb-6 text-4xl font-black italic tracking-tighter uppercase leading-tight">
            <h1 className="text-white">Building the future,</h1>
            <h1 className="text-gdg-blue">Together</h1>
          </div>

          {/* Subtitle */}
          <p className="text-[14px] text-zinc-300 leading-relaxed font-medium mb-12 px-2">
            We are a chapter of the global Google Developer Groups community, based at GESCOE. We bridge the gap between theory and practice, connecting passionate students with the latest technologies from Google and the open-source world.
          </p>

          {/* Mission & Vision Cards */}
          <div className="flex flex-col gap-5 w-full">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 flex flex-col gap-5 text-left">
              <div className="w-10 h-10 rounded-full bg-gdg-blue/10 border border-gdg-blue/20 flex items-center justify-center shrink-0">
                <Rocket className="w-4 h-4 text-gdg-blue" fill="currentColor" fillOpacity="0.2" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tight uppercase text-white mb-3">Our Mission</h2>
                <p className="text-[13px] text-zinc-400 leading-relaxed font-medium">
                  To empower every student developer with the resources, and community support needed to turn ideas into reality. We believe in learning by doing and growing by sharing.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 flex flex-col gap-5 text-left">
              <div className="w-10 h-10 rounded-full bg-gdg-yellow/10 border border-gdg-yellow/20 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-gdg-yellow" fill="currentColor" fillOpacity="0.2" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tight uppercase text-white mb-3">Our Vision</h2>
                <p className="text-[13px] text-zinc-400 leading-relaxed font-medium">
                  To be the premier hub of innovation at GESCOE, fostering a community where technology solves real-world problems and shaping students as industry-ready leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- WHAT WE DO SECTION --- */}
        <div className="w-full flex flex-col items-center mb-16 pt-8 border-t border-white/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black italic tracking-tight uppercase text-foreground mb-3">What We Do</h2>
            <p className="text-[14px] text-foreground/50 tracking-wide font-medium px-4">
              Diverse activities to fuel your developer journey
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {WHAT_WE_DO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col gap-4 text-left">
                  <div className={`w-10 h-10 rounded-sm border ${item.border} ${item.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-black italic tracking-tight uppercase text-foreground mb-2">{item.label}</h3>
                    <p className="text-[12px] text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- VALUES SECTION --- */}
        <div className="w-full flex flex-col items-center mb-16 pt-8 border-t border-white/5">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gdg-blue inline-block mb-2">Core Principles</span>
            <h2 className="text-3xl font-black italic tracking-tight uppercase text-foreground leading-[1.1] mb-2">Driven by Values,</h2>
            <h2 className="text-3xl font-black italic tracking-tight uppercase text-gdg-blue leading-[1.1] mb-4">United by Code</h2>
            <p className="text-[13px] text-foreground/50 leading-relaxed font-medium px-4">
              Our community is built on a foundation of mutual respect and a shared passion for technology.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 flex flex-row items-center gap-4 text-left">
                  <div className={`w-9 h-9 rounded-sm border ${value.iconBorder} ${value.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${value.iconColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-black italic tracking-tight uppercase text-foreground mb-1">{value.title}</h3>
                    <p className="text-[11px] text-foreground/50 leading-relaxed font-medium">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="w-full mb-16 pt-8 border-t border-white/5 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            <div className="flex flex-col divide-y divide-white/5">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center justify-center py-8 w-full">
                  <div className="text-4xl font-black italic tracking-tighter text-foreground mb-2 flex items-baseline justify-center w-full">
                    <NumberTicker value={stat.value} />
                    <span className={stat.color}>{stat.suffix}</span>
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="w-full pt-8 border-t border-white/5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-black italic tracking-tight uppercase text-foreground leading-none mb-4">
              Ready To Code?
            </h2>
            <p className="text-[13px] text-foreground/60 font-medium leading-relaxed mb-8 px-2">
              Whether you are a beginner or an expert, there is a place for you here. Join our chapter and start building your future today.
            </p>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-[13px] font-bold text-foreground w-full"
            >
              Be a Part of Our Journey
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileAbout;