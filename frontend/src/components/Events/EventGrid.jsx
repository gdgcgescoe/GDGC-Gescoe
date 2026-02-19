/**
 * @file EventGrid.jsx
 * @purpose Renders a grid of event cards with entry animations.
 * @responsibility 
 * - Manages the grid layout for event cards.
 * - Implements Framer Motion animations for card entry and tab transitions.
 * - Handles the empty state when no events are available.
 */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard/EventCard";

const EventGrid = ({ events, activeTab }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
                <AnimatePresence mode="wait">
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <motion.div
                                key={`${activeTab}-${event.id}`}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        ))
                    ) : null}
                </AnimatePresence>
            </div>

            {/* Empty State */}
            {events.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20"
                >
                    <p className="text-foreground/30 font-medium italic">
                        No events scheduled at the moment. Stay tuned!
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default React.memo(EventGrid);
