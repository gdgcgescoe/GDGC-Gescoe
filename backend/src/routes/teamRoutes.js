// src/routes/teamRoutes.js
import express from "express";
import { fetchTeamMembers } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", fetchTeamMembers);

export default router;