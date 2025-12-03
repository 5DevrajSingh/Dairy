import User from "../models/User.js";
import MilkCollection from "../models/milkCollection.js";
import Payment from "../models/payment.js";

export const getUserSummary = async (req, res) => {
  try {
    const userId = req.query.user_id;

    if (!userId) {
      return res.status(400).json({ error: "user_id is required" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const milkData = await MilkCollection.find({ user_id: userId });
    const paymentData = await Payment.find({ user_id: userId });

    let monthly = {};

    milkData.forEach(item => {
      const dt = new Date(item.date);

      const monthKey = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
      const dayKey = dt.toISOString().split("T")[0];

      if (!monthly[monthKey]) {
        monthly[monthKey] = { total_litre: 0, total_amount: 0, days: {} };
      }

      monthly[monthKey].total_litre += item.quantity_litre;
      monthly[monthKey].total_amount += item.total_amount;

      if (!monthly[monthKey].days[dayKey]) {
        monthly[monthKey].days[dayKey] = { litre: 0, amount: 0 };
      }

      monthly[monthKey].days[dayKey].litre += item.quantity_litre;
      monthly[monthKey].days[dayKey].amount += item.total_amount;
    });

    const total_litre = milkData.reduce((a, b) => a + b.quantity_litre, 0);
    const total_amount = milkData.reduce((a, b) => a + b.total_amount, 0);
    const total_paid = paymentData.reduce((a, b) => a + b.amount, 0);

    res.json({
      user_details: user,
      milk_summary: {
        total_litre,
        total_amount,
        monthly
      },
      payment_history: paymentData,
      total_paid,
      pending_amount: total_amount - total_paid
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
