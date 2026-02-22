import { supabase } from "../config/supabaseClient.js";

export const fetchAllEvents = async () => {
  const { data, error } = await supabase
    .from("events_public")   // ← your VIEW
    .select("*")
    .order("start_ts", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
};

export const fetchUpcomingEvents = async () => {
  const { data, error } = await supabase
    .from("events_public")
    .select("*")
    .eq("status", "upcoming")
    .order("start_ts", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
};

export const fetchPastEvents = async () => {
  const { data, error } = await supabase
    .from("events_public")
    .select("*")
    .eq("status", "past")
    .order("start_ts", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export const fetchEventBySlug = async (slug) => {
  const { data, error } = await supabase
    .from("events_public")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);

  return data;
};