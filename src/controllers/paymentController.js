import Payment from "../models/payment.js";

export const addPayment = async (req, res) => {
  try {
    const {
      user_id,
      start_date,
      end_date,
      payment_mode,
      total_payment,
      total_milk,
      date
    } = req.body;

    if (!user_id || !start_date || !end_date || !payment_mode || !total_payment || !total_milk || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const payment = await Payment.create({
      user_id,
      start_date,
      end_date,
      payment_mode,
      total_payment,
      total_milk,
      date
    });

    res.status(200).json({ message: "Payment added successfully", data: payment });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
