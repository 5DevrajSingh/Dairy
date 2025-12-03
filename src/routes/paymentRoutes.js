import express from "express";
import { addPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/add", addPayment);

export default router;
