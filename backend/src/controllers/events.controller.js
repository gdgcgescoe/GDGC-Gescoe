import * as eventsService from "../services/events.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllEvents = asyncHandler(async (req, res) => {
  const events = await eventsService.fetchAllEvents();
  res.json(events);
});

export const getUpcomingEvents = asyncHandler(async (req, res) => {
  const events = await eventsService.fetchUpcomingEvents();
  res.json(events);
});

export const getPastEvents = asyncHandler(async (req, res) => {
  const events = await eventsService.fetchPastEvents();
  res.json(events);
});

export const getEventBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const event = await eventsService.fetchEventBySlug(slug);

  res.json(event);
});