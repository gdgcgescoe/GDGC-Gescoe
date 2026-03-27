import { useState, useEffect } from 'react'
import { fetchTeamMembers as apiFetchTeam } from '@/lib/api'
import rawMembers from '@/assets/memebers.json'

/**
 * Maps the raw local JSON entry to the shape the UI components expect.
 */
function mapLocalMember(m, idx) {
  return {
    id: `member-${idx}`,
    name: m['Team Member'],
    team: m['Team'],
    designation: m['Designation'],
    profilePicture: m['Profile Picture'] || null,
    socials: {
      linkedin: m['Linkedin URL'],
      github: m['Github URL'],
      portfolio: m['Portfolio'],
    },
  }
}

/**
 * Maps a Supabase row (from the backend) to the same UI shape.
 * Adjust field names here if your Supabase view columns differ.
 */
function mapApiMember(m, idx) {
  return {
    id: m.id ?? `api-member-${idx}`,
    name: m.name ?? m['Team Member'] ?? '',
    team: m.team ?? m['Team'] ?? '',
    designation: m.designation ?? m['Designation'] ?? '',
    profilePicture: m.profilePicture ?? m.profile_picture ?? m['Profile Picture'] ?? null,
    socials: {
      linkedin: m.socials?.linkedin ?? m.linkedin ?? m.linkedin_url ?? m['Linkedin URL'] ?? null,
      github: m.socials?.github ?? m.github ?? m.github_url ?? m['Github URL'] ?? null,
      portfolio: m.socials?.portfolio ?? m.portfolio ?? m['Portfolio'] ?? null,
    },
    tenureLabel: m.tenureLabel || null
  }
}

export const useTeam = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoading(true)
        const res = await apiFetchTeam()

        // The backend wraps results in { success, count, data }
        const rawList = Array.isArray(res) ? res : res.data ?? []
        
        let flatMembers = [];
        rawList.forEach(tenure => {
            // Process Organizers (GDG Leads, Faculty, etc.)
            if (tenure.organizers) {
                tenure.organizers.forEach(o => {
                    flatMembers.push({ ...o, team: "Core", tenureLabel: tenure.label });
                });
            }

            // Process Teams (Technical, Content, etc.)
            if (tenure.teams) {
                tenure.teams.forEach(t => {
                    if (t.members) {
                        t.members.forEach(m => {
                            flatMembers.push({ ...m, team: t.name, tenureLabel: tenure.label });
                        });
                    }
                });
            } 
            
            // Fallback for simple flat lists
            if (!tenure.organizers && !tenure.teams) {
                flatMembers.push(tenure);
            }
        });

        setMembers(flatMembers.map(mapApiMember))
      } catch (err) {
        console.warn('Backend unreachable, using local team data:', err.message)
        setMembers(rawMembers.map(mapLocalMember))
      } finally {
        setLoading(false)
      }
    }

    loadTeam()
  }, [])

  return { members, loading, error }
}
