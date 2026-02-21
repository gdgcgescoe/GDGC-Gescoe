import React from "react";

const EventSpeakers = ({ speakers }) => {
    if (!speakers || speakers.length === 0) return null;

    return (
        <div className="space-y-3">
            <h4 className="text-lg font-bold flex items-center gap-2">
                <span role="img" aria-label="speakers">🎙️</span> SPEAKERS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl border border-card-border bg-white/[0.03] backdrop-blur-sm"
                    >
                        {speaker.image && (
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gdg-blue/20 shrink-0">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <div className="flex flex-col min-w-0">
                            <h5 className="font-bold text-sm text-foreground truncate">{speaker.name}</h5>
                            <p className="text-xs text-muted-foreground truncate">{speaker.title}</p>
                            {speaker.company && (
                                <p className="text-[10px] text-gdg-blue font-medium truncate">{speaker.company}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(EventSpeakers);
