/**
 * @file EventSkeleton.jsx
 * @purpose Renders a skeleton loader for the events grid.
 * @responsibility 
 * - Provides visual feedback during data fetching.
 * - Matches the layout and dimensions of the EventCard.
 */

import React from "react";

const EventSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl">
            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="w-[300px] h-[450px] rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden animate-pulse"
                >
                    <div className="h-[180px] bg-white/5" />
                    <div className="p-6 space-y-4">
                        <div className="h-6 w-3/4 bg-white/5 rounded" />
                        <div className="space-y-2">
                            <div className="h-4 w-1/2 bg-white/5 rounded" />
                            <div className="h-4 w-1/3 bg-white/5 rounded" />
                        </div>
                        <div className="pt-4 space-y-2">
                            <div className="h-3 w-full bg-white/5 rounded" />
                            <div className="h-3 w-full bg-white/5 rounded" />
                            <div className="h-3 w-2/3 bg-white/5 rounded" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventSkeleton;
