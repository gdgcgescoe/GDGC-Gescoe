import React, { useState, useMemo } from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/ui/text-animate";
import TeamSection from '../../components/Team/TeamSection';
import rawMembers from '../../assets/memebers.json';

const TEAM_CATEGORIES = ['All Team', 'Lead', 'Technical', 'Content', 'Design', 'Event Management', 'Outreach'];

const DesktopTeam = () => {
    const [activeTab, setActiveTab] = useState('All Team');
    const [tenure, setTenure] = useState('2025-26');

    // Process JSON Data
    const processedMembers = useMemo(() => {
        return rawMembers.map((m, idx) => ({
            id: `member-${idx}`,
            name: m["Team Member"],
            team: m["Team"],
            designation: m["Designation"],
            profilePicture: m["Profile Picture"] || null,
            socials: {
                linkedin: m["Linkedin URL"],
                github: m["Github URL"],
                portfolio: m["Portfolio"]
            }
        }));
    }, []);

    // Filtering & Grouping Logic
    const filteredSections = useMemo(() => {
        const sections = [];

        // 1. GDG Lead & Faculty (Shown in 'All Team' or 'Lead')
        if (activeTab === 'All Team' || activeTab === 'Lead') {
            const gdgLeads = processedMembers.filter(m => m.designation === "GDG-GESCOE ORGANIZER");
            const faculty = processedMembers.filter(m => m.designation === "Faculty Guidance");

            if (gdgLeads.length > 0) {
                sections.push({ title: "GDG-GESCOE", highlight: "ORGANIZER", members: gdgLeads });
            }
            if (faculty.length > 0) {
                sections.push({ title: "FACULTY", highlight: "GUIDANCE", members: faculty });
            }
        }

        // 2. Team Leads (All Leads together, Shown in 'All Team' or 'Lead')
        if (activeTab === 'All Team' || activeTab === 'Lead') {
            const allLeads = processedMembers.filter(m => m.designation.toLowerCase().includes('lead') && m.designation !== "GDG-GESCOE ORGANIZER");
            if (allLeads.length > 0) {
                sections.push({ title: "TEAM", highlight: "LEADS", members: allLeads });
            }
        }

        // 3. Specific Team Sections in strict order
        const DESIRED_TEAM_ORDER = [
            "Technical",
            "Content & Research",
            "Design",
            "Event Management",
            "Outreach"
        ];

        DESIRED_TEAM_ORDER.forEach(teamName => {
            const isTabMatch = activeTab === 'All Team' ||
                teamName.toLowerCase().includes(activeTab.toLowerCase());

            // Only add individual team sections if we are NOT on the 'Lead' tab alone
            // (If we are on 'Lead', they are already shown in "TEAM LEADS")
            if (isTabMatch && activeTab !== 'Lead') {
                const teamMembers = processedMembers.filter(m => m.team === teamName);

                if (teamMembers.length > 0) {
                    // Sort members so Leads appear first within their team
                    const sortedMembers = [...teamMembers].sort((a, b) => {
                        const aIsLead = a.designation.toLowerCase().includes('lead');
                        const bIsLead = b.designation.toLowerCase().includes('lead');
                        if (aIsLead && !bIsLead) return -1;
                        if (!aIsLead && bIsLead) return 1;
                        return 0; // Keep original order otherwise
                    });

                    sections.push({
                        title: teamName.toUpperCase(),
                        highlight: "TEAM",
                        members: sortedMembers
                    });
                }
            }
        });

        return sections;
    }, [activeTab, processedMembers]);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-40 px-8 text-center mt-10 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gdg-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gdg-yellow/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Badge / Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gdg-blue/30 bg-gdg-blue/5 backdrop-blur-md shadow-(--shadow-gdg-blue-glow) mb-8"
                >
                    <Users className="w-4 h-4 text-gdg-yellow" />
                    <span className="text-gdg-blue font-bold tracking-[0.1em] uppercase text-xs">The minds behind gdg</span>
                </motion.div>

                {/* Main Title */}
                <div className="mb-8 flex flex-wrap justify-center items-center gap-4 text-6xl md:text-[5.5rem] font-black italic tracking-tight uppercase leading-none drop-shadow-md">
                    <TextAnimate animation="blurInUp" as="h1" by="word" once className="text-foreground block">
                        Meet The
                    </TextAnimate>
                    <TextAnimate animation="blurInUp" as="h1" by="word" delay={0.3} once className="text-gdg-yellow block">
                        Team
                    </TextAnimate>
                </div>

                {/* Subtitle */}
                <TextAnimate
                    animation="blurIn"
                    as="p"
                    by="word"
                    delay={0.6}
                    once
                    className="text-xl text-muted-foreground font-medium max-w-3xl leading-relaxed mt-4"
                >
                    Passionate Developers, Designers, And Innovators Working Together To Build A Thriving Tech Community At GESCOE
                </TextAnimate>

                {/* Filters Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                    className="w-full max-w-6xl mt-24 flex items-center justify-between"
                >
                    {/* Tenure Selection */}
                    <div className="flex items-center gap-4">
                        <span className="text-muted-foreground font-bold tracking-widest text-sm uppercase">Tenure:</span>
                        <div className="relative">
                            <select
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                                className="bg-card hover:bg-card/80 border border-border text-foreground rounded-full pl-5 pr-10 py-2.5 appearance-none outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer font-medium text-sm"
                            >
                                <option value="2025-26">2025-26</option>
                                <option value="2026-27">2026-27</option>
                            </select>
                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        </div>
                    </div>

                    {/* Categories / Tabs */}
                    <div className="flex items-center gap-3">
                        {TEAM_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category
                                    ? 'bg-gdg-blue text-white shadow-[0_0_15px_rgba(66,133,244,0.4)] border border-transparent'
                                    : 'border border-border text-foreground/70 hover:bg-card hover:text-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Team Sections Render */}
                <div className="w-full flex flex-col items-center mt-12 space-y-20">
                    {tenure === '2025-26' ? (
                        filteredSections.map((section, idx) => (
                            <TeamSection
                                key={idx}
                                title={section.title}
                                highlight={section.highlight}
                                members={section.members}
                            />
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-20 flex flex-col items-center justify-center text-center p-12 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl w-full max-w-4xl"
                        >
                            <h2 className="text-3xl md:text-4xl font-black italic tracking-tight uppercase text-foreground mb-4">
                                Upcoming <span className="text-gdg-yellow">Teams</span>
                            </h2>
                            <p className="text-lg text-muted-foreground font-medium max-w-xl">
                                The team for {tenure} is yet to be announced. Stay tuned!
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DesktopTeam;