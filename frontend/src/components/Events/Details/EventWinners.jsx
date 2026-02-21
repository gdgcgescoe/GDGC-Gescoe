import React from "react";
import { Trophy } from "lucide-react";

const EventWinners = ({ results }) => {
    if (!results || results.length === 0) return null;

    return (
        <section className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4">
                <Trophy className="text-gdg-yellow h-6 w-6 md:h-8 md:w-8" />
                <h4 className="text-xl md:text-2xl font-black tracking-tighter">HALL OF FAME</h4>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gdg-yellow/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {results.map((result, index) => (
                    <div key={index} className="relative group p-5 md:p-8 rounded-card md:rounded-xl bg-white/[0.02] border border-card-border hover:bg-gdg-yellow/[0.03] hover:border-gdg-yellow/20 transition-all duration-500 overflow-hidden shadow-lg hover:-translate-y-2">
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-20 md:w-32 h-20 md:h-32 bg-gdg-yellow/5 rounded-full blur-[30px] md:blur-[50px] group-hover:blur-[25px] transition-all" />
                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gdg-yellow mb-3 md:mb-4 opacity-60">{result.position}</p>
                        <p className="text-xl md:text-2xl font-black text-foreground group-hover:scale-105 transition-transform origin-left drop-shadow-md">{result.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default React.memo(EventWinners);
