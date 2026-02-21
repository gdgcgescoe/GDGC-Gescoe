import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import EventGalleryGrid from "./EventGalleryGrid";
import EventSpeakers from "./EventSpeakers";
import EventRewards from "./EventRewards";

// Modular Sub-Components
import EventHero from "./Details/EventHero";
import EventIntelligence from "./Details/EventIntelligence";
import EventHighlights from "./Details/EventHighlights";
import EventWinners from "./Details/EventWinners";
import EventFooter from "./Details/EventFooter";

const EventDetailsDialog = ({ event, open, onOpenChange }) => {
    if (!event) return null;

    const {
        title,
        category,
        status,
        coverImage,
        displayDate,
        time,
        venue,
        shortDescription,
        description,
        speakers,
        rewards,
        gallery,
        highlights,
        results
    } = event;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] md:max-w-5xl w-full max-h-[92vh] p-0 gap-0 border-card-border bg-background/95 backdrop-blur-3xl text-foreground rounded-dialog shadow-[0_0_50px_rgba(0,0,0,0.8)] outline-none border-none flex flex-col overflow-hidden transition-all duration-500">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>

                {/* Main Scrollable Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar min-h-0">
                    <EventHero
                        title={title}
                        category={category}
                        status={status}
                        coverImage={coverImage}
                    />

                    <div className="px-4 pb-12 md:px-10 md:pb-20 -mt-2 relative z-10 space-y-8 md:space-y-12">
                        {/* Summary Block */}
                        <div className="max-w-3xl">
                            <p className="text-muted-foreground/80 text-base md:text-xl leading-relaxed font-medium italic border-l-4 border-gdg-blue pl-4 md:pl-6 py-1">
                                {shortDescription}
                            </p>
                        </div>

                        {/* High-Level Info Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
                            <EventIntelligence
                                displayDate={displayDate}
                                time={time}
                                venue={venue}
                                description={description}
                            />
                            <EventHighlights highlights={highlights} />
                        </div>

                        {/* Winners Section */}
                        <EventWinners results={results} />

                        {/* Large Sections (Modules) */}
                        <div className="space-y-20 md:space-y-32">
                            <EventSpeakers speakers={speakers} />
                            <EventRewards rewards={rewards} />
                            <EventGalleryGrid gallery={gallery} />
                        </div>

                        <EventFooter event={event} />
                    </div>
                </div>

                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        border: 2px solid transparent;
                        background-clip: padding-box;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.15);
                        background-clip: padding-box;
                    }
                `}</style>
            </DialogContent>
        </Dialog>
    );
};

export default React.memo(EventDetailsDialog);
