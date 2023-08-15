import mongoose from "mongoose";
import { GIT } from "../config.js";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    url: {
      type: String,
      default: GIT,
    },
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
