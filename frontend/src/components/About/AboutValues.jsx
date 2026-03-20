import React from 'react';
import { motion } from 'framer-motion';
import { CORE_VALUES } from './aboutData';
import { TextAnimate } from "@/components/ui/text-animate";



const ValueCard = ({ value, index }) => {
    const Icon = value.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-row items-center gap-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.02)] overflow-hidden`}
        >
            {/* Squared Icon badge */}
            <div className={`w-10 h-10 rounded-sm border ${value.iconBorder} ${value.iconBg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-4 h-4 ${value.iconColor}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-[14px] font-black italic tracking-tight uppercase text-foreground mb-1">
                    {value.title}
                </h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed font-medium">
                    {value.desc}
                </p>
            </div>

            {/* Subtle inset shadow */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] pointer-events-none" />
        </motion.div>
    );
};

const AboutValues = () => {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                {/* Left Column: Text Content */}
                <div className="flex flex-col text-left lg:pr-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gdg-blue inline-block mb-3">
                            Core Principles
                        </span>
                    </motion.div>

                    <div className="mb-6 flex flex-col gap-1">
                        <TextAnimate
                            animation="blurInUp"
                            as="h2"
                            by="word"
                            once
                            className="text-4xl md:text-5xl font-black italic tracking-tight uppercase text-foreground leading-[1.1]"
                        >
                            Driven by Values,
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            as="h2"
                            by="word"
                            delay={0.2}
                            once
                            className="text-4xl md:text-5xl font-black italic tracking-tight uppercase text-gdg-blue leading-[1.1]"
                        >
                            United by Code
                        </TextAnimate>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="max-w-md text-[13px] md:text-[14px] text-foreground/50 leading-relaxed font-medium"
                    >
                        Our community is built on a foundation of mutual respect and a
                        shared passion for technology. These core values guide
                        everything we do.
                    </motion.p>
                </div>

                {/* Right Column: Stacked Values */}
                <div className="flex flex-col gap-4 w-full">
                    {CORE_VALUES.map((value, idx) => (
                        <ValueCard key={value.id} value={value} index={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(AboutValues);
