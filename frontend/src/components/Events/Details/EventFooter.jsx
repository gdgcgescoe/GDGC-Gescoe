import React from "react";
import { ArrowRight } from "lucide-react";

const EventFooter = ({ event }) => {
    const { status, registrationLink, learnMoreLink, linkedinLink } = event;

    return (
        <footer className="pt-12 md:pt-16 flex flex-col items-center gap-8 md:gap-10 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                {status === 'upcoming' ? (
                    <>
                        <a
                            href={registrationLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full overflow-hidden bg-white text-black font-black text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all hover:pr-10 md:hover:pr-14 hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 active:scale-95 active:translate-y-0"
                        >
                            <span className="relative z-10 tracking-tight">REGISTER NOW</span>
                            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-2 md:group-hover:translate-x-3 text-current" />
                        </a>
                        {learnMoreLink && (
                            <a
                                href={learnMoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/20 text-white font-black text-base md:text-lg transition-all hover:bg-white/5 hover:-translate-y-1.5 active:scale-95 active:translate-y-0"
                            >
                                LEARN MORE
                            </a>
                        )}
                    </>
                ) : (
                    linkedinLink && (
                        <a
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-[#0077b5] text-white font-black text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-[0_15px_40px_rgba(0,119,181,0.3)] hover:-translate-y-1.5 active:scale-95 active:translate-y-0"
                        >
                            VIEW ON LINKEDIN
                        </a>
                    )
                )}
            </div>
            <div className="space-y-2 opacity-30">
                <p className="text-[11px] font-black tracking-[0.4em] uppercase">Google Developer Groups Gescoe</p>
                <p className="text-[10px] font-bold italic tracking-wide">Advancing technology through community and code.</p>
            </div>
        </footer>
    );
};

export default React.memo(EventFooter);
