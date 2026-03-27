/**
 * API client for the GDGC-Gescoe backend.
 * All endpoints use relative URLs so the Vite dev proxy can forward them.
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

async function request(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

// ── Events ──────────────────────────────────────────────

export const fetchAllEvents = () => request("/events");

export const fetchUpcomingEvents = () => request("/events/upcoming");

export const fetchPastEvents = () => request("/events/past");

export const fetchEventBySlug = (slug) => request(`/events/${slug}`);

// ── Team ────────────────────────────────────────────────

export const fetchTeamMembers = () => request("/team");
