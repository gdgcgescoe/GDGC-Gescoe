/**
 * @file EventCard.jsx
 * @purpose Renders a single event as a card.
 */

import React from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";

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

const EventCard = ({ event }) => {
    const {
        coverImage,
        title,
        category,
        displayDate,
        time,
        venue,
        shortDescription,
        link,
    } = event;

    const styles = CATEGORY_STYLE[category] || CATEGORY_STYLE.default;

    return (
        <a
            href={link}
            className={`group relative flex flex-col w-[300px] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all duration-500 ease-out hover:-translate-y-2 no-underline ${styles.border}`}
        >
            {/* Animated gradient background */}
            <div
                className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.accent}`}
            />

            {/* Glassmorphic shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Cover Area */}
            <div className="relative h-[180px] w-full overflow-hidden shrink-0">
                <img
                    src={coverImage || DEFAULT_IMAGE}
                    alt={title}
                    onError={(e) => {
                        if (e.currentTarget.src !== DEFAULT_IMAGE) {
                            e.currentTarget.src = DEFAULT_IMAGE;
                        }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10" />

                {/* Date Badge */}
                <div
                    className={`absolute top-4 right-4 z-10 w-12 h-12 rounded-xl flex flex-col items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 ${styles.badge}`}
                >
                    <span className="text-white font-black leading-none text-[10px] tracking-wider uppercase">
                        {displayDate.monthShort}
                    </span>
                    <span className="text-white font-black leading-none text-[16px] mt-0.5">
                        {displayDate.day}
                    </span>
                </div>

                {/* Category Chip */}
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">
                        {category}
                    </span>
                </div>
            </div>

            {/* Body */}
            <div className="relative flex flex-col gap-3 px-6 pt-6 pb-6 z-10">
                <h3
                    className={`font-bold leading-tight line-clamp-2 m-0 text-lg transition-colors duration-300 ${styles.title}`}
                >
                    {title}
                </h3>

                <div className="flex flex-col gap-2 text-foreground/50 font-medium text-[12px]">
                    <span className="flex items-center gap-2">
                        <Clock size={14} className={styles.title} strokeWidth={2.5} />
                        {time}
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={14} className={styles.title} strokeWidth={2.5} />
                        {venue}
                    </span>
                </div>

                <p className="text-foreground/40 leading-relaxed line-clamp-3 m-0 font-medium mt-1 text-[13px]">
                    {shortDescription}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span
                        className={`flex items-center gap-1 font-bold text-[13px] group-hover:gap-2 transition-[gap] duration-200 ${styles.title}`}
                    >
                        Read More
                        <ArrowRight size={15} strokeWidth={3} />
                    </span>
                </div>
            </div>

            {/* Decorative corner accent */}
            <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.accent}`}
            />

            {/* Bottom glow line */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.glowLine}`}
            />
        </a>
    );
};

export default React.memo(EventCard);
