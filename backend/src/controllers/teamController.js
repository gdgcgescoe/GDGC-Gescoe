// src/controllers/teamController.js
import { getAllTeamMembers } from "../services/teamService.js";

export const fetchTeamMembers = async (req, res) => {
  try {
    const members = await getAllTeamMembers();

    return res.status(200).json({
      success: true,
      count: members.length,
      data: members,
    });
  } catch (error) {
    console.error("Team Fetch Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch team members",
    });
  }
};