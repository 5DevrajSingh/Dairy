import express from "express";
import villageRoutes from "./villageRoutes.js";
import galiRoutes from "./galiRoutes.js";
import userRoutes from "./userRoutes.js";
import milkCollectionRoutes from "./milkCollectionRoutes.js";
import billingRoutes from "./billingRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import userSummaryRoutes from "./userSummaryRoutes.js";
import notificationRoutes from "./notificationRoutes.js";

const router = express.Router();

router.use("/village", villageRoutes);
router.use("/gali", galiRoutes);
router.use("/user", userRoutes);
router.use("/milk", milkCollectionRoutes);
router.use("/billing", billingRoutes);
router.use("/payment", paymentRoutes);
router.use("/user", userSummaryRoutes);
router.use("/notify", notificationRoutes);

export default router;
