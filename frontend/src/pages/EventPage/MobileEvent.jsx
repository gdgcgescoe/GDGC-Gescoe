import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEvents } from "./hooks/useEvents";
import EventCard from "../../components/Events/EventCard/EventCard";
import EventDetailsDialog from "../../components/Events/EventDetailsDialog";

const MobileEvent = () => {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { loading, error, getEventsByStatus } = useEvents();

    const filteredEvents = getEventsByStatus(activeTab);

    const handleOpenDialog = useCallback((event) => {
        setSelectedEvent(event);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setSelectedEvent(null);
    }, []);

    return (
        <section className="flex md:hidden min-h-screen flex-col items-center pt-24 pb-16 px-6 relative overflow-hidden ">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-gdg-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gdg-green/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/10 px-4 py-1.5 mb-8"
            >
                <Calendar className="w-3.5 h-3.5 text-gdg-blue" strokeWidth={2.5} />
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-gdg-blue">
                    Community Gatherings
                </span>
            </motion.div>

            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-5xl font-black italic tracking-tighter text-foreground leading-[0.9]">
                    Events <span className="text-gdg-blue not-italic">&</span>
                </h1>
                <h1 className="text-5xl font-black italic tracking-tighter text-foreground leading-[1.1]">
                    Workshops
                </h1>
            </div>

            {/* Description */}
            <p className="text-center text-muted-foreground/60 text-[15px] font-medium leading-relaxed max-w-[280px] mb-10">
                Join Us To Learn, Share, And Connect. From Technical Deep-Dives To
                Casual Meetups, Find Your Next Developer Experience Here.
            </p>

            {/* Tabs */}
            <div className="flex bg-white/[0.03] p-1 rounded-2xl border border-card-border mb-10 w-full max-w-xs backdrop-blur-md">
                {["upcoming", "past"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all duration-300 ${activeTab === tab
                            ? "bg-gdg-blue text-white shadow-[0_0_15px_rgba(66,133,244,0.3)]"
                            : "text-muted-foreground/40 hover:text-muted-foreground/60"
                            }`}
                    >
                        {tab === "upcoming" ? "Upcoming" : "Past Events"}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="w-full relative z-10">
                {loading ? (
                    <div className="flex flex-col gap-6">
                        {[1, 2].map((n) => (
                            <div key={n} className="h-72 bg-white/[0.03] rounded-3xl animate-pulse border border-card-border" />
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center py-10">
                        <p className="text-gdg-red font-bold italic">{error}</p>
                    </div>
                ) : (
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                        onReadMore={handleOpenDialog}
                                    />
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <p className="text-foreground/30 font-medium italic">
                                        No events scheduled at the moment. Stay tuned!
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            <EventDetailsDialog
                event={selectedEvent}
                open={!!selectedEvent}
                onOpenChange={handleCloseDialog}
            />
        </section>
    );
};

export default React.memo(MobileEvent);