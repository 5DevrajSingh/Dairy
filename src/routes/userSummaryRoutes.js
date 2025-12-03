import express from "express";
import { getUserSummary } from "../controllers/userSummaryController.js";

const router = express.Router();

router.get("/summary", getUserSummary);

export default router;
