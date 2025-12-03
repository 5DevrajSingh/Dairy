import express from "express";
import { sendMilkNotification } from "../controllers/notificationController.js";

const router = express.Router();

// POST API to send milk notification to group
router.post("/send", sendMilkNotification);

export default router;
