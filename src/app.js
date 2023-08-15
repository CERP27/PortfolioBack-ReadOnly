import express from "express";
import morgan from "morgan";
import cors from "cors";

import projectRoutes from "./routes/projects.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/backport", projectRoutes);

export default app;
