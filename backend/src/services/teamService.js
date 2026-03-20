// src/services/teamService.js
import {supabase} from "../config/supabaseClient.js";

export const getAllTeamMembers = async () => {
  const { data, error } = await supabase
    .from("tenures_public") // <-- your VIEW name
    .select("*")
    .order("endYear", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};