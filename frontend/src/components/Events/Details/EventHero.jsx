import React from "react";

const CATEGORY_STYLE = {
    Cloud: "bg-gdg-blue",
    Android: "bg-gdg-red",
    Web: "bg-gdg-yellow",
    ML: "bg-gdg-green",
    default: "bg-gdg-blue",
};

const DEFAULT_IMAGE = "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/file%20(1).svg";

const EventHero = ({ title, category, status, coverImage }) => {
    const categoryColor = CATEGORY_STYLE[category] || CATEGORY_STYLE.default;

    return (
        <div className="relative w-full h-[200px] md:h-[450px] overflow-hidden shrink-0">
            <img
                src={coverImage || DEFAULT_IMAGE}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 scale-100"
            />
            {/* Dynamic Gradient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {/* Close button area shim for layout */}
            <div className="absolute top-6 right-12 z-50 flex gap-2">
                {/* Floating Status / Category badges */}
                <div className="flex bg-black/40 backdrop-blur-xl border border-card-border rounded-full p-1 shadow-2xl">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-white ${categoryColor}`}>
                        {category}
                    </span>
                    {status && (
                        <span className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white/70">
                            {status}
                        </span>
                    )}
                </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-4 right-4 md:bottom-8 md:left-10 md:right-10 space-y-2 md:space-y-3">
                <h2 className="text-2xl md:text-5xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                    {title?.toUpperCase()}
                </h2>
            </div>
        </div>
    );
};

export default React.memo(EventHero);
