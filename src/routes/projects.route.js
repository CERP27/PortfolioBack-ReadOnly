import { Router } from "express";

import { readProjects } from "../controllers/projects.controller.js";

const router = Router();

router.get("/read", readProjects);

export default router;
