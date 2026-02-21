import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// cloudinary configurations
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: (req, file) => `applications/${req.user.id}`,
    resource_type: "raw",
    format: async (req, file) => "pdf",
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.split(".")[0]}`,
  },
});

// multer upload middleware
export const upload = multer({ storage });