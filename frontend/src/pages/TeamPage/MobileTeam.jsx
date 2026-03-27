import React, { useState, useMemo } from 'react';
import { Users, ChevronDown, Loader2 } from 'lucide-react';
import TeamSection from '../../components/Team/TeamSection';
import { useTeam } from './hooks/useTeam';

const TEAM_CATEGORIES = ['All Team', 'Lead', 'Technical', 'Content', 'Design', 'Event Management', 'Outreach'];

const MobileTeam = () => {
  const [activeTab, setActiveTab] = useState('All Team');
  const [tenure, setTenure] = useState('2025-26');
  const { members: processedMembers, loading, error } = useTeam();

  // Filtering & Grouping Logic
  const filteredSections = useMemo(() => {
    const sections = [];

    // 1. GDG Lead & Faculty (Shown in 'All Team' or 'Lead')
    if (activeTab === 'All Team' || activeTab === 'Lead') {
      const gdgLeads = processedMembers.filter(m => m.designation && m.designation.toLowerCase().includes("organizer"));
      const faculty = processedMembers.filter(m => m.designation && m.designation.toLowerCase().includes("faculty"));

      if (gdgLeads.length > 0) {
        sections.push({ title: "GDG-GESCOE", highlight: "ORGANIZER", members: gdgLeads });
      }
      if (faculty.length > 0) {
        sections.push({ title: "FACULTY", highlight: "GUIDANCE", members: faculty });
      }
    }

    // 2. Team Leads (All Leads together, Shown in 'All Team' or 'Lead')
    if (activeTab === 'All Team' || activeTab === 'Lead') {
      const allLeads = processedMembers.filter(m => m.designation && m.designation.toLowerCase().includes('lead') && !m.designation.toLowerCase().includes("organizer"));
      if (allLeads.length > 0) {
        sections.push({ title: "TEAM", highlight: "LEADS", members: allLeads });
      }
    }

    // 3. Specific Team Sections in strict order
    const DESIRED_TEAM_ORDER = [
      "Technical Team",
      "Content and Research Team",
      "Design Team",
      "Event Management",
      "Outreach Team"
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
    <section className="relative w-full min-h-screen flex flex-col items-center pt-24 pb-32 px-4 text-center mt-6 overflow-hidden">
      {/* Background Glows (Removed for mobile performance and aesthetics) */}

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Badge / Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gdg-blue/30 bg-gdg-blue/5 backdrop-blur-md shadow-(--shadow-gdg-blue-glow) mb-6">
          <Users className="w-3.5 h-3.5 text-gdg-yellow" />
          <span className="text-gdg-blue font-bold tracking-[0.1em] uppercase text-[10px]">The minds behind gdg</span>
        </div>

        {/* Main Title (Smaller and stacked for Mobile) */}
        <div className="mb-6 flex flex-col justify-center items-center gap-2 text-[3.5rem] font-black italic tracking-tight uppercase leading-none drop-shadow-md">
          <h1 className="text-foreground block">
            Meet The
          </h1>
          <h1 className="text-gdg-yellow block">
            Team
          </h1>
        </div>

        {/* Subtitle (Truncated or slightly smaller text for readability) */}
        <p className="text-base text-muted-foreground font-medium max-w-sm leading-relaxed px-4 mt-2">
          Passionate Developers, Designers, And Innovators Building A Thriving Tech Community
        </p>

        {/* Filters Bar: Vertical stack for mobile */}
        <div className="w-full max-w-md mt-16 flex flex-col items-center gap-6">
          {/* Tenure Selection */}
          <div className="flex items-center gap-2 w-full justify-between px-2">
            <span className="text-muted-foreground font-bold tracking-widest text-xs uppercase">Tenure:</span>
            <div className="relative">
              <select
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="bg-card hover:bg-card/80 border border-border text-foreground rounded-full pl-4 pr-9 py-2 appearance-none outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer font-medium text-xs"
              >
                <option value="2025-26">2025-26</option>
                <option value="2026-27">2026-27</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Horizontal scrollable categories for mobile */}
          <div className="w-full overflow-x-auto no-scrollbar pb-2 px-1 -mx-4 items-start self-start flex gap-2">
            {/* Wrapper for padding and snap scroll */}
            <div className="flex gap-2.5 px-3 min-w-max">
              {TEAM_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${activeTab === category
                    ? 'bg-gdg-blue text-white shadow-[0_0_12px_rgba(66,133,244,0.4)] border border-transparent scale-105'
                    : 'border border-border text-foreground/70 hover:bg-card active:scale-95'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Sections Render */}
        <div className="w-full flex flex-col items-center mt-8 space-y-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-gdg-blue animate-spin" />
              <p className="mt-3 text-sm text-muted-foreground font-medium">Loading team…</p>
            </div>
          ) : tenure === '2025-26' ? (
            filteredSections.map((section, idx) => (
              <TeamSection
                key={idx}
                title={section.title}
                highlight={section.highlight}
                members={section.members}
              />
            ))
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl w-full">
              <h2 className="text-2xl font-black italic tracking-tight uppercase text-foreground mb-3">
                Upcoming <span className="text-gdg-yellow">Teams</span>
              </h2>
              <p className="text-sm text-muted-foreground font-medium">
                The team for {tenure} is yet to be announced. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default MobileTeam;