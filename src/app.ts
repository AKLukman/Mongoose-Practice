import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

// 1.interface
// 2.Schema design
// 3.model
// 4.router
// 5.controller
// 6.service

export default app;
