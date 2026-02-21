import express from "express";
const router = express.Router();

import {
  getApplications,
  getApplication,
  createApplication,
  updateApplication,
  updateAttachement,
} from "../controllers/application.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../utils/upload.js";

router.post("/", protectRoute, upload.single("file"), createApplication);

router.put(
  "/:id/attachments",
  protectRoute,
  upload.single("file"),
  updateAttachement,
);

router.put("/:id", protectRoute, updateApplication);

router.delete("/:id", protectRoute);

router.get("/", protectRoute, getApplications);

router.get("/:id", protectRoute, getApplication);

export default router;
