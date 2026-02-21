/**
 * @file EventGrid.jsx
 * @purpose Renders a grid of event cards with entry animations.
 * @responsibility 
 * - Manages the grid layout for event cards.
 * - Implements Framer Motion animations for card entry and tab transitions.
 * - Handles the empty state when no events are available.
 */

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard/EventCard";
import EventDetailsDialog from "./EventDetailsDialog";

const EventGrid = ({ events, activeTab }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleOpenDialog = useCallback((event) => {
        setSelectedEvent(event);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setSelectedEvent(null);
    }, []);

    return (
        <div className="w-full flex flex-col items-center px-4 md:px-6 lg:px-8">
            {/* Event Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center w-full max-w-7xl mx-auto"
                >
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    opacity: { duration: 0.3, delay: Math.min(index * 0.05, 0.5) },
                                    scale: { duration: 0.3, delay: Math.min(index * 0.05, 0.5) },
                                    layout: { duration: 0.3 }
                                }}
                                className="w-full flex justify-center"
                            >
                                <EventCard
                                    event={event}
                                    onReadMore={handleOpenDialog}
                                />
                            </motion.div>
                        ))
                    ) : null}
                </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {events.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-32 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                        <span className="text-2xl text-foreground/20 italic">?</span>
                    </div>
                    <p className="text-foreground/30 font-medium italic text-lg px-4 max-w-md">
                        No events found in this category. Check back later or explore other tabs!
                    </p>
                </motion.div>
            )}

            {/* Event Details Dialog - Rendered once at parent level for efficiency */}
            <EventDetailsDialog
                event={selectedEvent}
                open={!!selectedEvent}
                onOpenChange={handleCloseDialog}
            />
        </div>
    );
};

export default React.memo(EventGrid);
