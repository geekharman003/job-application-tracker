import express from "express";
import {
  createReminder,
  deleteReminder,
  getReminder,
} from "../controllers/reminder.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router({ mergeParams: true });

router.post("/", protectRoute, createReminder);

router.get("/:reminderId", getReminder);

router.delete("/:reminderId", deleteReminder);

export default router;
