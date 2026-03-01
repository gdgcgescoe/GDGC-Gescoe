import React from 'react';
import { motion } from 'framer-motion';
import { NumberTicker } from "@/components/ui/number-ticker";
import { ABOUT_STATS } from './aboutData';

const AboutStats = () => {
    return (
        <div className="mx-auto w-full max-w-5xl px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
            >
                {/* Subtle radial center glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(66,133,244,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative flex flex-col md:flex-row items-center justify-between divide-y divide-white/5 md:divide-y-0 md:divide-x divide-white/5">
                    {ABOUT_STATS.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex-1 flex flex-col items-center justify-center p-12 w-full group transition-colors duration-500 hover:bg-white/[0.02]"
                        >
                            <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-foreground mb-3 flex items-baseline">
                                <NumberTicker value={stat.value} delay={0.2} />
                                <span className={stat.color}>{stat.suffix}</span>
                            </div>
                            <div className="text-[13px] font-bold tracking-[0.2em] uppercase text-foreground/50">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default React.memo(AboutStats);
