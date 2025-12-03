import express from "express";
import { createUser, getUsers, saveDeviceToken } from "../controllers/userController.js";
import { loginUser } from "../controllers/loginUser.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.post("/save-token", saveDeviceToken);
router.post("/login", loginUser);

export default router;
