import React from "react";
import { Clock, MapPin, Calendar, Info } from "lucide-react";

const EventIntelligence = ({ displayDate, time, venue, description }) => {
    return (
        <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <section className="space-y-4 md:space-y-6 p-5 md:p-8 rounded-card md:rounded-dialog bg-white/[0.02] border border-card-border shadow-2xl">
                <h3 className="text-[9px] font-black text-gdg-blue flex items-center gap-2 md:gap-3 tracking-[0.3em] uppercase opacity-60">
                    <div className="w-8 md:w-10 h-[1px] bg-gdg-blue/30" /> <Info size={12} /> Intelligence
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-0.5 group">
                        <p className="text-[9px] uppercase font-black text-foreground/20 tracking-[0.2em] group-hover:text-gdg-blue/40 transition-colors">Date</p>
                        <div className="flex items-center gap-2 md:gap-3">
                            <Calendar size={14} className="text-gdg-blue md:size-[16px]" />
                            <p className="text-base md:text-lg font-bold">{displayDate?.day} {displayDate?.monthShort} {displayDate?.year}</p>
                        </div>
                    </div>

                    <div className="space-y-0.5 group">
                        <p className="text-[9px] uppercase font-black text-foreground/20 tracking-[0.2em] group-hover:text-gdg-blue/40 transition-colors">Clock</p>
                        <div className="flex items-center gap-2 md:gap-3">
                            <Clock size={12} className="text-gdg-blue" />
                            <p className="text-base md:text-lg font-bold">{time}</p>
                        </div>
                    </div>

                    <div className="space-y-0.5 group sm:col-span-2">
                        <p className="text-[9px] uppercase font-black text-foreground/20 tracking-[0.2em] group-hover:text-gdg-blue/40 transition-colors">Base</p>
                        <div className="flex items-center gap-2 md:gap-3">
                            <MapPin size={14} className="text-gdg-blue md:size-[16px]" />
                            <p className="text-base md:text-lg font-bold truncate">{venue}</p>
                        </div>
                    </div>
                </div>
            </section>

            {description && (
                <article className="space-y-6">
                    <div className="h-px w-24 bg-gdg-blue/20" />
                    <p className="text-muted-foreground/80 text-base md:text-xl leading-relaxed whitespace-pre-wrap font-medium">
                        {description}
                    </p>
                </article>
            )}
        </div>
    );
};

export default React.memo(EventIntelligence);
