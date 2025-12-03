import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { village_id, gali_id, user_name, phone, milk, rate, device_token } = req.body;

    const user = await User.create({
      village_id,
      gali_id,
      user_name,
      phone,
      milk,
      rate,
      device_token
    });

    res.status(201).json({ message: "User Created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { galiId } = req.query;

    const users = await User.find(galiId ? { galiId } : {})
      .populate("villageId")
      .populate("galiId");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveDeviceToken = async (req, res) => {
  try {
    const { userId, token } = req.body;

    if (!userId || !token) {
      return res.status(400).json({ message: "userId and token required" });
    }

    await User.findByIdAndUpdate(userId, { device_token: token });

    res.json({ message: "Token saved successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};