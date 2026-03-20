import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Info } from 'lucide-react';
import { TextAnimate } from '@/components/ui/text-animate';

const AboutHero = () => {
    return (
        <div className="mx-auto w-full max-w-[1100px] px-8 pt-32 pb-16 flex flex-col items-center">

            {/* Pill Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/5 backdrop-blur-md shadow-(--shadow-gdg-blue-glow) mb-8"
            >
                <Info className="w-4 h-4 text-gdg-yellow" />
                <span className="text-gdg-blue font-bold tracking-[0.1em] uppercase text-xs">About GDG GESCOE</span>
            </motion.div>

            {/* Main Headline */}
            <div className="flex flex-col items-center text-center gap-2 mb-10">
                <TextAnimate
                    animation="blurInUp"
                    as="h1"
                    by="word"
                    once
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black italic tracking-tighter uppercase text-white leading-tight"
                >
                    Building the future,
                </TextAnimate>
                <TextAnimate
                    animation="blurInUp"
                    as="h1"
                    by="word"
                    delay={0.2}
                    once
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black italic tracking-tighter uppercase text-gdg-blue leading-tight"
                >
                    Together
                </TextAnimate>
            </div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-[900px] text-center text-[15px] md:text-[17px] text-zinc-300 leading-relaxed font-medium mb-24"
            >
                We are a chapter of the global Google Developer Groups community, based at GESCOE. We bridge the gap between theory and practice, connecting passionate students with the latest technologies from Google and the open-source world.
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.02)]"
                >
                    <div className="w-12 h-12 rounded-full bg-gdg-blue/10 border border-gdg-blue/20 flex items-center justify-center shrink-0">
                        <Rocket className="w-5 h-5 text-gdg-blue" fill="currentColor" fillOpacity="0.2" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-black italic tracking-tight uppercase text-white mb-4">
                            Our Mission
                        </h2>
                        <p className="text-[14px] md:text-[15.5px] text-zinc-400 leading-relaxed font-medium">
                            To empower every student developer with the resources, and community support needed to turn ideas into reality. We believe in learning by doing and growing by sharing.
                        </p>
                    </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.02)]"
                >
                    <div className="w-12 h-12 rounded-full bg-gdg-yellow/10 border border-gdg-yellow/20 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-5 h-5 text-gdg-yellow" fill="currentColor" fillOpacity="0.2" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-black italic tracking-tight uppercase text-white mb-4">
                            Our Vision
                        </h2>
                        <p className="text-[14px] md:text-[15.5px] text-zinc-400 leading-relaxed font-medium">
                            To be the premier hub of innovation at GESCOE, fostering a community where technology solves real-world problems and shaping students as industry-ready leaders.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default React.memo(AboutHero);
