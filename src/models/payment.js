import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    payment_mode: { type: String, enum: ["Case", "Online"], required: true },
    total_payment: { type: Number, required: true },
    total_milk: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
