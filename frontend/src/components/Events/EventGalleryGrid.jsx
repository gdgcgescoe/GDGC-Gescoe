import React from "react";

const EventGalleryGrid = ({ gallery }) => {
    if (!gallery || gallery.length === 0) return null;

    return (
        <div className="space-y-3">
            <h4 className="text-lg font-bold flex items-center gap-2">
                <span role="img" aria-label="gallery">🖼️</span> GALLERY
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {gallery.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-video overflow-hidden rounded-xl border border-card-border bg-white/5"
                    >
                        <img
                            src={typeof image === 'string' ? image : (image?.url || image)}
                            alt={image?.title || `Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(EventGalleryGrid);
