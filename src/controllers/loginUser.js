import User from "../models/User.js";

export const loginUser = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Check user exist
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    return res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
