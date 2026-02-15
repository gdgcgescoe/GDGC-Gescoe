import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselItem from "./CarouselItem";

/**
 * Reusable image carousel with 3D stacked effect, arrows, dot indicators,
 * optional autoplay, and pause-on-hover.
 */
function ImageCarousel({
    images,
    autoPlay = true,
    autoPlayDelay = 3500,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = useMemo(() => images?.length ?? 0, [images]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    }, [totalSlides]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    }, [totalSlides]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    useEffect(() => {
        if (!autoPlay || isPaused || totalSlides <= 1) return;

        const id = setInterval(goToNext, autoPlayDelay);
        return () => clearInterval(id);
    }, [autoPlay, autoPlayDelay, isPaused, totalSlides, goToNext]);

    const slides = useMemo(() => {
        if (!Array.isArray(images) || images.length === 0) return null;

        return images.map((src, index) => {
            let offset = index - currentIndex;
            if (offset > images.length / 2) offset -= images.length;
            if (offset < -images.length / 2) offset += images.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            return (
                <CarouselItem
                    key={index}
                    src={src}
                    index={index}
                    offset={offset}
                    isActive={isActive}
                    isVisible={isVisible}
                    onClick={goToSlide}
                />
            );
        });
    }, [images, currentIndex, goToSlide]);

    const handleMouseEnter = useCallback(() => setIsPaused(true), []);
    const handleMouseLeave = useCallback(() => setIsPaused(false), []);

    if (!images?.length) return null;

    return (
        <div
            className="relative w-[400px] lg:w-[600px] h-[300px] lg:h-[400px] flex items-center justify-center scale-95 lg:scale-[0.9] origin-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {slides}

            {/* Controls: arrows + dots */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={goToPrevious}
                    className="text-foreground/40 hover:text-foreground transition-colors p-1 rounded-lg focus:ring-2 focus:ring-gdg-blue/20 focus:ring-offset-2 focus:ring-offset-background"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3" role="tablist" aria-label="Slide navigation">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            role="tab"
                            aria-label={`Go to slide ${index + 1}`}
                            aria-selected={index === currentIndex}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gdg-blue/20 focus:ring-offset-2 focus:ring-offset-background ${index === currentIndex
                                ? "w-2.5 h-2.5 bg-gdg-blue scale-110"
                                : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40"
                                }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    aria-label="Next slide"
                    onClick={goToNext}
                    className="text-foreground/40 hover:text-foreground transition-colors p-1 rounded-lg focus:ring-2 focus:ring-gdg-blue/20 focus:ring-offset-2 focus:ring-offset-background"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default React.memo(ImageCarousel);
