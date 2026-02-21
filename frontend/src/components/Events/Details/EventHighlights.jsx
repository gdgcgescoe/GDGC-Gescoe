import React from "react";
import { Sparkles } from "lucide-react";

const EventHighlights = ({ highlights }) => {
    if (!highlights || highlights.length === 0) return null;

    return (
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <section className="space-y-4 md:space-y-6 p-5 md:p-8 rounded-card md:rounded-dialog bg-white/[0.02] border border-card-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-gdg-yellow/5 blur-2xl rounded-full" />
                <h3 className="text-[9px] font-black text-gdg-yellow flex items-center gap-2 md:gap-3 tracking-[0.3em] uppercase opacity-60">
                    <div className="w-8 md:w-10 h-[1px] bg-gdg-yellow/30" /> <Sparkles size={12} /> Highlights
                </h3>
                <ul className="space-y-3 md:space-y-4">
                    {highlights.map((item, idx) => (
                        <li key={idx} className="flex gap-2 md:gap-3 items-start group">
                            <div className="mt-1.5 md:mt-2 w-1 h-1 rounded-full bg-gdg-yellow shadow-[0_0_8px_rgba(251,188,4,0.4)] group-hover:scale-125 transition-all" />
                            <p className="text-xs md:text-base text-muted-foreground/90 font-bold group-hover:text-white transition-colors">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default React.memo(EventHighlights);
