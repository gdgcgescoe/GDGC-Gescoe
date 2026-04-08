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
 * Maps a member object (from organizer/teams) to the UI shape.
 */
function mapMember(m, teamName) {
  return {
    id: m.id ?? crypto.randomUUID(),
    name: m.name ?? '',
    team: teamName,
    designation: m.designation ?? m.roleType ?? '',
    profilePicture: m.profilePicture ?? m.profile_picture ?? null,
    socials: {
      linkedin: m.socials?.linkedin ?? m.linkedin ?? null,
      github: m.socials?.github ?? m.github ?? null,
      portfolio: m.socials?.portfolio ?? m.portfolio ?? null,
    },
    order: m.order ?? 999,
  }
}

export const useTeam = () => {
  const [members, setMembers] = useState([])
  const [teamOrder, setTeamOrder] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoading(true)
        const res = await apiFetchTeam()

        // The backend wraps results in { success, count, data }
        const rawList = Array.isArray(res) ? res : res.data ?? []

        let flatMembers = []
        let orderedTeamNames = []

        rawList.forEach(tenure => {
          // --- Handle organizer field (singular array) ---
          if (tenure.organizer && Array.isArray(tenure.organizer)) {
            tenure.organizer.forEach(o => {
              flatMembers.push(mapMember(o, 'Core'))
            })
          }
          // Legacy: handle organizers (plural)
          if (tenure.organizers && Array.isArray(tenure.organizers)) {
            tenure.organizers.forEach(o => {
              flatMembers.push(mapMember(o, 'Core'))
            })
          }

          // --- Handle facultyGuidance field ---
          if (tenure.facultyGuidance && Array.isArray(tenure.facultyGuidance)) {
            tenure.facultyGuidance.forEach(f => {
              flatMembers.push({
                id: f.id ?? crypto.randomUUID(),
                name: f.name ?? '',
                team: 'Faculty',
                designation: 'Faculty Advisor',
                profilePicture: f.profilePicture ?? f.profile_picture ?? null,
                socials: {
                  linkedin: f.linkedin ?? f.socials?.linkedin ?? null,
                  github: f.github ?? f.socials?.github ?? null,
                  portfolio: null,
                },
                order: f.order ?? 999,
              })
            })
          }

          // --- Handle teams field ---
          if (tenure.teams && Array.isArray(tenure.teams)) {
            // Sort teams by their order field
            const sortedTeams = [...tenure.teams].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

            sortedTeams.forEach(t => {
              // Collect the ordered team names for the UI
              if (t.name && !orderedTeamNames.includes(t.name)) {
                orderedTeamNames.push(t.name)
              }

              if (t.members && Array.isArray(t.members)) {
                // Sort members by order
                const sortedMembers = [...t.members].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
                sortedMembers.forEach(m => {
                  flatMembers.push(mapMember(m, t.name))
                })
              }
            })
          }

          // Fallback for flat lists (no organizer/teams structure)
          if (!tenure.organizer && !tenure.organizers && !tenure.teams) {
            flatMembers.push(mapMember(tenure, tenure.team ?? ''))
          }
        })

        setMembers(flatMembers)
        setTeamOrder(orderedTeamNames)
      } catch (err) {
        console.warn('Backend unreachable, using local team data:', err.message)
        setMembers(rawMembers.map(mapLocalMember))
        setTeamOrder([
          "Technical Team",
          "Content and Research Team",
          "Design Team",
          "Event Management",
          "Outreach"
        ])
      } finally {
        setLoading(false)
      }
    }

    loadTeam()
  }, [])

  return { members, teamOrder, loading, error }
}
