import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, User } from 'lucide-react';

const MemberCard = ({ member }) => {
    const [imgError, setImgError] = useState(false);

    // Default avatar fallback
    const fallbackImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=" + member.name;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col items-center p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/20 w-full max-w-[320px] overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gdg-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Profile Image Container */}
            <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-gdg-blue via-gdg-yellow to-gdg-green animate-gradient-xy group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-2xl">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        {!imgError && member.profilePicture ? (
                            <img
                                src={member.profilePicture}
                                alt={member.name}
                                onError={() => setImgError(true)}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-muted-foreground/40">
                                <User className="w-12 h-12 mb-1" />
                                <span className="text-[8px] uppercase font-bold tracking-tighter">GDG Member</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="relative z-10 text-center space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {member.name}
                </h3>

                <div className="flex flex-col gap-1 mb-6">
                    <p className="text-[14px] font-black uppercase tracking-[0.2em] text-gdg-blue/90 drop-shadow-sm">
                        {member.designation}
                    </p>
                    {member.team && !['Lead', 'Faculty'].includes(member.team) && (
                        <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
                            {member.team}
                        </p>
                    )}
                </div>
            </div>

            {/* Social Links */}
            <div className="relative z-10 flex items-center gap-3 pt-6 mt-2 border-t border-white/5 w-full justify-center">
                {member.socials?.linkedin && (
                    <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-white/5 bg-white/5 text-foreground/40 hover:text-gdg-blue hover:bg-white/10 hover:border-gdg-blue/30 transition-all duration-300"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                )}
                {member.socials?.github && (
                    <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-white/5 bg-white/5 text-foreground/40 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                        title="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                )}
                {member.socials?.portfolio && (
                    <a
                        href={member.socials.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-white/5 bg-white/5 text-foreground/40 hover:text-gdg-green hover:bg-white/10 hover:border-gdg-green/30 transition-all duration-300"
                        title="Portfolio"
                    >
                        <Globe className="w-4 h-4" />
                    </a>
                )}
            </div>

            {/* Design Flourish */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[2rem] pointer-events-none" />
        </motion.div>
    );
};

export default MemberCard;
