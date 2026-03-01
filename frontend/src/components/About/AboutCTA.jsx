import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TextAnimate } from '@/components/ui/text-animate';


const COMMUNITY_URL =
    'https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india/';

const AboutCTA = () => {
    return (
        <div className="mx-auto w-full max-w-5xl px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-16 md:p-24 flex flex-col items-center text-center overflow-hidden"
            >
                {/* Cinematic Background Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-gdg-blue/20 via-gdg-blue/5 to-transparent rounded-bl-[6rem] pointer-events-none opacity-40" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gdg-yellow/15 via-gdg-yellow/5 to-transparent rounded-tr-[6rem] pointer-events-none opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.03)_0%,transparent_70%)] pointer-events-none" />

                {/* Heading */}
                <div className="relative z-10 mb-6">
                    <TextAnimate
                        animation="blurInUp"
                        as="h2"
                        by="word"
                        once
                        className="text-5xl md:text-6xl font-black italic tracking-tight uppercase text-foreground leading-none"
                    >
                        Ready To Code?
                    </TextAnimate>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10 text-base text-foreground/60 font-medium max-w-xl leading-relaxed mb-12"
                >
                    Whether you are a beginner or an expert, there is a place for you here.
                    Join our chapter and start building your future today.
                </motion.p>

                {/* CTA button */}
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    href={COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 group/btn inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 bg-white/5 text-base font-bold text-foreground transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                    Be a Part of Our Journey
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.a>
            </motion.div>
        </div>
    );
};

export default React.memo(AboutCTA);
