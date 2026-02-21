import { useState, useEffect, useMemo } from 'react'

const DEMO_EVENTS = [
  {
    id: 'event_001',
    slug: 'cloud-hero-infra-mod',
    title: 'Google Cloud Hero: Infrastructure Modernization',
    category: 'Cloud',
    displayDate: { monthShort: 'MAY', day: '11', year: '2026' },
    time: '10:00 AM',
    venue: 'Auditorium A',
    shortDescription:
      'Dive deep into modern infrastructure with Google Cloud. Hands-on labs and certification guidance for students.',
    description:
      'Google Cloud Hero is a gamified learning experience designed to help students master cloud concepts. This session focuses on Infrastructure Modernization, covering topics like compute engines, networking, and security. Participants will work through real-world scenarios and get guidance on cloud certifications.',
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    status: 'upcoming',
    speakers: [
      {
        name: 'peter parker',
        title: 'Cloud Architect',
        company: 'Google Cloud',
        image:
          'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/Spiderman.jpeg'
      }
    ],
    rewards: {
      perks: ['Cloud Credential', 'Networking Lunch', 'Goodie Bags']
    },
    highlights: ['Hands-on Labs', 'Certification Guidance', 'Live Q&A'],
    registrationLink:
      'https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india/',
    learnMoreLink:
      'https://www.linkedin.com/company/gdgc-gescoe/posts/?feedView=all'
  },
  {
    id: 'event_002',
    slug: 'android-study-jams',
    title: 'Android Study Jams: Compose Camp',
    category: 'Android',
    displayDate: { monthShort: 'JUN', day: '02', year: '2026' },
    time: '2:00 PM',
    venue: 'Lab 3',
    shortDescription:
      'Learn Jetpack Compose from scratch and build beautiful Android UIs.',
    description:
      "Android Study Jams are community-organized study groups for people to learn how to build Android apps using the Kotlin programming language. In this session, we focus on Jetpack Compose, Google's modern toolkit for building native UI.",
    coverImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    status: 'upcoming',
    speakers: [
      {
        name: 'gwen stacy',
        title: 'Android GDE',
        company: 'GDG',
        image:
          'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/spiderwoman.jpeg'
      }
    ],
    rewards: {
      perks: ['Course Certificate', 'Digital Badges']
    },
    highlights: ['Kotlin Fundamentals', 'Modern UI Design', 'Project Showcase'],
    registrationLink:
      'https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india/',
    learnMoreLink:
      'https://www.linkedin.com/company/gdgc-gescoe/posts/?feedView=all'
  },
  {
    id: 'event_003',
    slug: 'data-decoded',
    title: 'Data Decoded - Databases Explained',
    category: 'Database',
    displayDate: { monthShort: 'JAN', day: '03', year: '2026' },
    time: '7:30 PM',
    venue: 'YouTube',
    shortDescription:
      'Data Decoded is a beginner-friendly session that simplifies databases and data systems.',
    description:
      'Ever wondered how your favorite apps store and retrieve massive amounts of data? Data Decoded breaks down the complex world of databases into simple, understandable concepts. Ideal for beginners and aspiring data engineers.',
    coverImage:
      'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/dataDecoded.webp',
    status: 'past',
    gallery: [
      'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/dataDecoded.webp'
    ],
    highlights: ['SQL vs NoSQL', 'Data Modeling', 'Real-world examples'],
    linkedinLink:
      'https://www.linkedin.com/company/gdgc-gescoe/posts/?feedView=all'
  },
  {
    id: 'event_004',
    slug: 'merge-matrix',
    title: 'Merge Matrix: Code, Commit & Contribute',
    category: 'Web',
    displayDate: { monthShort: 'OCT', day: '07', year: '2025' },
    time: '11:00 AM',
    venue: 'MS Gosavi Seminar Hall',
    shortDescription:
      'Merge Matrix is a hands-on workshop designed to introduce students to the world of Hacktoberfest.',
    description:
      'An Open Innovation Hackathon that brought together 180 students from across the nation to idea, design, and develop technology-driven solutions for real-world challenges, encouraging creativity, innovation, and problem-solving.',
    coverImage:
      'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/hacktoberfest.webp',
    status: 'past',
    speakers: [
      {
        name: 'bruce wayne',
        title: 'GDG Organizer',
        company: 'GDG Gescoe',
        image: 'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/Batman%20pfp.jpeg'
      }
    ],
    rewards: {
      prizes: ['1st Prize: ₹10,000', '2nd Prize: ₹5,000'],
      perks: ['Swags', 'Certificate']
    },
    gallery: [
      'https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/hacktoberfest.webp'
    ],
    results: [
      { position: 'Winner', name: 'TetraSquad' },
      { position: '1st Runner-Up', name: 'CodeX' },
      { position: '2nd Runner-Up', name: 'Spark' }
    ],
    highlights: [
      'Hands-on open source contributions',
      'Mentoring sessions',
      'Networking with industry experts',
      'Interactive talleres'
    ],
    linkedinLink:
      'https://www.linkedin.com/posts/gdgc-gescoe_hacktoberfest2025-mergematrix-activity-7249123456789012345-ABCD'
  }
]

export const useEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API fetch
    const fetchEvents = async () => {
      try {
        setLoading(true)
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 800))
        setEvents(DEMO_EVENTS)
      } catch (err) {
        setError('Failed to fetch events. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const getEventsByStatus = useMemo(
    () => status => {
      return events.filter(event => event.status === status)
    },
    [events]
  )

  return {
    events,
    loading,
    error,
    getEventsByStatus
  }
}
