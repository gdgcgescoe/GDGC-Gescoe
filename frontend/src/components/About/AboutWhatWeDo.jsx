import React from 'react';
import { motion } from 'framer-motion';
import { WHAT_WE_DO } from './aboutData';
import { TextAnimate } from "@/components/ui/text-animate";

const ActivityCard = ({ item, index }) => {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex flex-col gap-5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.02)] overflow-hidden`}
        >
            {/* Squared Icon badge */}
            <div className={`w-12 h-12 rounded-sm border ${item.border} ${item.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-lg font-black italic tracking-tight uppercase text-foreground mb-3">
                    {item.label}
                </h3>
                <p className="text-[13px] text-foreground/50 leading-relaxed font-medium">
                    {item.desc}
                </p>
            </div>

            {/* Subtle inset shadow */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] pointer-events-none" />
        </motion.div>
    );
};

const AboutWhatWeDo = () => {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-8 py-24 flex flex-col items-center">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-12">
                <div className="mb-4">
                    <TextAnimate
                        animation="blurInUp"
                        as="h2"
                        by="word"
                        once
                        className="text-4xl md:text-4xl font-black italic tracking-tight uppercase text-foreground leading-none"
                    >
                        What We Do
                    </TextAnimate>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl text-[15px] text-foreground/50 tracking-wide font-medium"
                >
                    Diverse activities to fuel your developer journey
                </motion.p>
            </div>

            {/* Flat 4-column horizontal grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
                {WHAT_WE_DO.map((item, i) => (
                    <ActivityCard key={item.id} item={item} index={i} />
                ))}
            </div>
        </div>
    );
};

export default React.memo(AboutWhatWeDo);
