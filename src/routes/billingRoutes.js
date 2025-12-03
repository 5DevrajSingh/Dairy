import express from "express";
import {
  getOneWeekBilling,
  getFifteenDaysBilling,
  getLastMonthBilling
} from "../controllers/billingController.js";

const router = express.Router();

router.get("/1week", getOneWeekBilling);
router.get("/15days", getFifteenDaysBilling);
router.get("/lastmonth", getLastMonthBilling);

export default router;