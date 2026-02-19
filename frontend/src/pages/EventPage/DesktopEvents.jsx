import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEvents } from "./hooks/useEvents";
import EventTabs from "../../components/Events/EventTabs";
import EventGrid from "../../components/Events/EventGrid";
import EventSkeleton from "../../components/Events/EventSkeleton";

const DesktopEvents = () => {
    const [activeTab, setActiveTab] = useState("upcoming");
    const { loading, error, getEventsByStatus } = useEvents();

    const filteredEvents = getEventsByStatus(activeTab);

    return (
        <section className="hidden md:flex min-h-screen flex-col items-center pt-32 pb-24 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gdg-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gdg-green/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="mx-auto w-full max-w-7xl px-8 lg:px-12 flex flex-col items-center text-center relative z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/10 px-5 py-2 backdrop-blur-md shadow-(--shadow-gdg-blue-glow) mb-10"
                >
                    <Calendar className="w-4 h-4 text-gdg-blue" strokeWidth={2.5} />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-black text-gdg-blue/90">
                        Community Gatherings
                    </span>
                </motion.div>

                {/* Heading */}
                <div className="mb-8">
                    <TextAnimate
                        animation="blurInUp"
                        as="h1"
                        by="word"
                        once
                        className="text-6xl lg:text-8xl font-black italic tracking-tighter text-foreground block mb-2"
                    >
                        Events
                    </TextAnimate>

                    <div className="flex items-center justify-center gap-6">
                        <TextAnimate
                            animation="blurInUp"
                            as="span"
                            by="character"
                            delay={0.3}
                            once
                            className="text-gdg-blue text-6xl lg:text-8xl font-black not-italic"
                        >
                            &
                        </TextAnimate>

                        <TextAnimate
                            animation="blurInUp"
                            as="h1"
                            by="word"
                            delay={0.5}
                            once
                            className="text-6xl lg:text-8xl font-black italic tracking-tighter text-foreground block"
                        >
                            Workshops
                        </TextAnimate>
                    </div>
                </div>

                {/* Description */}
                <TextAnimate
                    animation="blurIn"
                    as="p"
                    by="word"
                    delay={0.8}
                    once
                    className="max-w-2xl text-lg lg:text-xl font-medium text-foreground/50 leading-relaxed mb-16"
                >
                    Join Us To Learn, Share, And Connect. From Technical Deep-Dives To
                    Casual Meetups, Find Your Next Developer Experience Here.
                </TextAnimate>

                {/* Event Tabs */}
                <EventTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Content Area */}
                {loading ? (
                    <EventSkeleton />
                ) : error ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20">
                        <p className="text-gdg-red font-bold italic">{error}</p>
                    </motion.div>
                ) : (
                    <EventGrid events={filteredEvents} activeTab={activeTab} />
                )}

            </div>
        </section>
    );
};

export default React.memo(DesktopEvents);
