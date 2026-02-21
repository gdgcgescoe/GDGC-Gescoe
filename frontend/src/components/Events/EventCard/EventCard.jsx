/**
 * @file EventCard.jsx
 * @purpose Renders a single event as a card.
 */

import React from "react";
import { Clock, MapPin, ArrowRight, Users, Trophy, Image as ImageIcon } from "lucide-react";

const CATEGORY_STYLE = {
    Cloud: {
        badge: "bg-gdg-blue",
        title: "text-gdg-blue",
        accent: "from-gdg-blue/20",
        border: "group-hover:border-gdg-blue/40",
        glowLine: "via-gdg-blue/50",
    },
    Android: {
        badge: "bg-gdg-red",
        title: "text-gdg-red",
        accent: "from-gdg-red/20",
        border: "group-hover:border-gdg-red/40",
        glowLine: "via-gdg-red/50",
    },
    Web: {
        badge: "bg-gdg-yellow",
        title: "text-gdg-yellow",
        accent: "from-gdg-yellow/20",
        border: "group-hover:border-gdg-yellow/40",
        glowLine: "via-gdg-yellow/50",
    },
    ML: {
        badge: "bg-gdg-green",
        title: "text-gdg-green",
        accent: "from-gdg-green/20",
        border: "group-hover:border-gdg-green/40",
        glowLine: "via-gdg-green/50",
    },
    default: {
        badge: "bg-gdg-blue",
        title: "text-gdg-blue",
        accent: "from-gdg-blue/20",
        border: "group-hover:border-gdg-blue/40",
        glowLine: "via-gdg-blue/50",
    },
};

const DEFAULT_IMAGE =
    "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/file%20(1).svg";

const EventCard = ({ event, onReadMore }) => {
    const {
        coverImage,
        title,
        category,
        displayDate,
        time,
        venue,
        shortDescription,
    } = event;

    const styles = CATEGORY_STYLE[category] || CATEGORY_STYLE.default;

    const handleClick = (e) => {
        if (onReadMore) {
            e.preventDefault();
            onReadMore(event);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`group relative flex flex-col w-full max-w-[calc(100vw-32px)] sm:max-w-sm md:max-w-[340px] rounded-card overflow-hidden bg-card border border-card-border shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-700 md:hover:-translate-y-4 md:hover:scale-[1.02] active:scale-[0.97] md:active:scale-100 cursor-pointer ${styles.border} md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}
        >
            {/* Soft Ambient Glow */}
            <div
                className={`absolute -inset-2 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl ${styles.accent}`}
            />

            {/* Top Shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Cover Image Section */}
            <div className="relative h-[200px] md:h-[220px] w-full overflow-hidden shrink-0">
                <img
                    src={coverImage || DEFAULT_IMAGE}
                    alt={title}
                    loading="lazy"
                    onError={(e) => {
                        if (e.currentTarget.src !== DEFAULT_IMAGE) {
                            e.currentTarget.src = DEFAULT_IMAGE;
                        }
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Status-based Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Glass Date Badge */}
                <div
                    className={`absolute top-4 right-4 z-20 px-3 py-2 rounded-2xl flex flex-col items-center justify-center backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 ${styles.badge}`}
                >
                    <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase leading-none opacity-80">
                        {displayDate.monthShort}
                    </span>
                    <span className="text-white font-black text-[18px] mt-1 leading-none">
                        {displayDate.day}
                    </span>
                </div>

                {/* Category Chip (Premium) */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white/90">
                            {category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative flex flex-col gap-4 p-6 pt-5 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]">
                <div className="space-y-2">
                    <h3
                        className={`text-xl md:text-2xl font-black leading-[1.2] line-clamp-2 transition-colors duration-300 group-hover:text-white ${styles.title}`}
                    >
                        {title}
                    </h3>

                    <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-2 text-muted-foreground font-bold text-[10px] md:text-[11px] uppercase tracking-widest">
                        <span className="flex items-center gap-1 md:gap-1.5 transition-colors group-hover:text-foreground/70">
                            <Clock size={11} md:size={12} className={styles.title} strokeWidth={3} />
                            {time}
                        </span>
                        <span className="flex items-center gap-1 md:gap-1.5 transition-colors group-hover:text-foreground/70">
                            <MapPin size={11} md:size={12} className={styles.title} strokeWidth={3} />
                            <span className="truncate max-w-[100px] md:max-w-[120px]">{venue}</span>
                        </span>
                    </div>
                </div>

                <p className="text-muted-foreground/80 leading-relaxed line-clamp-2 font-medium text-[13px] group-hover:text-foreground/50 transition-colors">
                    {shortDescription}
                </p>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/[0.05]">
                    <div className="flex -space-x-1.5 overflow-hidden group-hover:space-x-1 transition-all">
                        {event.speakers?.length > 0 && (
                            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-GDG-blue" title="Speakers">
                                <Users size={12} />
                            </div>
                        )}
                        {event.rewards && (
                            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-GDG-yellow" title="Rewards">
                                <Trophy size={12} />
                            </div>
                        )}
                        {event.gallery?.length > 0 && (
                            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-GDG-green" title="Gallery">
                                <ImageIcon size={12} />
                            </div>
                        )}
                    </div>

                    <button
                        className={`flex items-center gap-2 font-black text-[12px] uppercase tracking-widest transition-all duration-300 group-hover:gap-3 ${styles.title} relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all group-hover:after:w-full`}
                    >
                        Learn More
                        <ArrowRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>

            {/* Bottom Glow Line */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.glowLine}`}
            />
        </div>
    );
};

export default React.memo(EventCard);