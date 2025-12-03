import express from "express";
import { createVillage, getVillages } from "../controllers/villageController.js";

const router = express.Router();

router.post("/", createVillage);
router.get("/", getVillages);

export default router;
