import express from "express";
import { createGali, getGalies } from "../controllers/galiController.js";

const router = express.Router();

router.post("/", createGali);
router.get("/", getGalies);

export default router;
