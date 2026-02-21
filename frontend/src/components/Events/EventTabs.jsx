/**
 * @file EventTabs.jsx
 * @purpose Renders a tab switcher for "Upcoming" and "Past" events.
 * @responsibility 
 * - Manages user interaction for tab switching.
 * - Provides visual feedback for the active tab.
 */

import React from "react";

const EventTabs = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-card-border backdrop-blur-xl mb-16 shadow-2xl">
            <button
                onClick={() => onTabChange("upcoming")}
                className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-500 ${activeTab === "upcoming"
                    ? "bg-gdg-blue text-white shadow-(--shadow-gdg-blue-glow) scale-105"
                    : "text-foreground/40 hover:text-foreground/70 hover:bg-white/5"
                    }`}
            >
                Upcoming
            </button>

            <button
                onClick={() => onTabChange("past")}
                className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-500 ${activeTab === "past"
                    ? "bg-gdg-blue text-white shadow-(--shadow-gdg-blue-glow) scale-105"
                    : "text-foreground/40 hover:text-foreground/70 hover:bg-white/5"
                    }`}
            >
                Past Events
            </button>
        </div>
    );
};

export default React.memo(EventTabs);
