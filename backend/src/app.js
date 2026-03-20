import express from "express";
import cors from "cors";

import eventsRoutes from "./routes/events.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();

/* GLOBAL MIDDLEWARES */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* HEALTH CHECK */

app.get("/", (req, res) => {
  res.send("GDG Backend API is running 🚀");
});

/* ROUTES */

app.use("/api/events", eventsRoutes);
app.use("/api/team", teamRoutes);
/* ERROR HANDLER — LAST */

app.use(errorHandler);

export default app;