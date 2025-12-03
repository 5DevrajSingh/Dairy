import express from "express";
import { addMilkRecord, getMilkRecords } from "../controllers/milkCollectionController.js";

const router = express.Router();

router.post("/", addMilkRecord);
router.get("/", getMilkRecords);

export default router;
