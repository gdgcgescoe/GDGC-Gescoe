import React from "react";

const EventRewards = ({ rewards }) => {
    if (!rewards) return null;

    const { prizes, perks } = rewards;

    if ((!prizes || prizes.length === 0) && (!perks || perks.length === 0)) return null;

    return (
        <div className="space-y-5">
            {(prizes && prizes.length > 0) && (
                <div className="space-y-2">
                    <h4 className="text-base font-bold flex items-center gap-2">
                        <span role="img" aria-label="rewards">🏆</span> PRIZES & AWARDS
                    </h4>
                    <ul className="space-y-1.5">
                        {prizes.map((prize, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-xs text-muted-foreground/90">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gdg-yellow shrink-0" />
                                <span>{prize}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(perks && perks.length > 0) && (
                <div className="space-y-2">
                    <h4 className="text-base font-bold flex items-center gap-2">
                        <span role="img" aria-label="perks">🎁</span> PERKS & BENEFITS
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                        {perks.map((perk, index) => (
                            <li key={index} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-card-border text-xs md:text-sm">
                                <span className="text-gdg-green shrink-0">✓</span>
                                <span className="break-words text-muted-foreground/90">{perk}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default React.memo(EventRewards);
