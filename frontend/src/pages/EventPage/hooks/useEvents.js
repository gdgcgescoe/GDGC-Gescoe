
import { useState, useEffect, useMemo } from "react";

const DEMO_EVENTS = [
    {
        id: "event_001",
        slug: "cloud-hero-infra-mod",
        title: "Google Cloud Hero: Infrastructure Modernization",
        category: "Cloud",
        displayDate: { monthShort: "MAY", day: "11" },
        time: "10:00 AM",
        venue: "Auditorium A",
        shortDescription: "Dive deep into modern infrastructure with Google Cloud. Hands-on labs and certification guidance for students.",
        coverImage: "",
        status: "upcoming"
    },
    {
        id: "event_002",
        slug: "android-study-jams",
        title: "Android Study Jams: Compose Camp",
        category: "Android",
        displayDate: { monthShort: "JUN", day: "02" },
        time: "2:00 PM",
        venue: "Lab 3",
        shortDescription: "Learn Jetpack Compose from scratch and build beautiful Android UIs.",
        coverImage: "",
        status: "upcoming"
    },
    {
        id: "event_003",
        slug: "data-decoded",
        title: "Data Decoded - Databases Explained",
        category: "Database",
        displayDate: { monthShort: "Jan", day: "03",year:"2026" },
        time: "7:30 PM",
        venue: "Youtube",
        shortDescription: "Data Decoded is a beginner-friendly session that simplifies databases and data systems, showing how data powers real-world applications.",
        coverImage: "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/dataDecoded.webp",
        status: "past"
    },

    {
        id: "event_004",
        slug: "Merge-Matrix",
        title: "Merge Matrix: Code, Commit & Contribute",
        category: "open-source",
        displayDate: { monthShort: "OCT", day: "7", year: "2025" },
        time: "11:00 AM",
        venue: "MS Gosavi Seminar Hall",
        shortDescription: "Merge Matrix is a hands-on workshop designed to introduce students to the world of Hacktoberfest and open-source contribution. ",
        coverImage: "https://cohgympziiswgdzkpzsm.supabase.co/storage/v1/object/public/Home-Carousel-Images/hacktoberfest.webp",
        status: "past"
    },
];

export const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate API fetch
        const fetchEvents = async () => {
            try {
                setLoading(true);
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 800));
                setEvents(DEMO_EVENTS);
            } catch (err) {
                setError("Failed to fetch events. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const getEventsByStatus = useMemo(() => (status) => {
        return events.filter(event => event.status === status);
    }, [events]);

    return {
        events,
        loading,
        error,
        getEventsByStatus
    };
};
