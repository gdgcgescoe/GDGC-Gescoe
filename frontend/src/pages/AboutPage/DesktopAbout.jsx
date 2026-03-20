import React from 'react';

// Section components
import AboutHero from '@/components/About/AboutHero';
import AboutWhatWeDo from '@/components/About/AboutWhatWeDo';
import AboutValues from '@/components/About/AboutValues';
import AboutStats from '@/components/About/AboutStats';
import AboutCTA from '@/components/About/AboutCTA';


const DesktopAbout = ({ className = '' }) => {
  return (
    <section className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {/* Ambient Background Glows */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-gdg-blue/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gdg-yellow/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-gdg-green/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <AboutHero />
        <AboutWhatWeDo />
        <AboutValues />
        <AboutStats />
        <AboutCTA />
      </div>
    </section>
  );
};

export default React.memo(DesktopAbout);