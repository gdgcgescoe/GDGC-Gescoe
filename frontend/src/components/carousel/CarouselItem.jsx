import React from "react";
const CarouselItem = React.memo(function CarouselItem({
    src,
    index,
    offset,
    isActive,
    isVisible,
    onClick,
}) {
    const handleClick = React.useCallback(() => {
        if (!isActive && typeof onClick === "function") {
            onClick(index);
        }
    }, [index, isActive, onClick]);

    return (
        <div
            className={`absolute transition-all duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{
                transform: `
                    translateX(${offset * 140}px)
                    scale(${isActive ? 1 : 0.85})
                    rotateY(${offset * -6}deg)
                `,
                zIndex: 10 - Math.abs(offset),
                willChange: "transform",
            }}
        >
            <div
                role="button"
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleClick();
                }}
                className={`rounded-[2rem] overflow-hidden transition-all duration-700 cursor-pointer select-none ${isActive
                    ? "brightness-100 shadow-[0_20px_50px_rgba(66,133,244,0.3)] ring-1 ring-white/20"
                    : "brightness-75 shadow-2xl"
                    }`}
                style={{
                    width: isActive ? "480px" : "400px",
                    aspectRatio: "16 / 9",
                }}
                onClick={handleClick}
            >
                <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                />

                {!isActive && (
                    <div
                        className="absolute inset-0 bg-black/20 transition-all duration-500 hover:bg-transparent"
                        aria-hidden
                    />
                )}
            </div>
        </div>
    );
});

export default CarouselItem;
