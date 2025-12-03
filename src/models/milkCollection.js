import mongoose from "mongoose";

const milkCollectionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  village_id: { type: mongoose.Schema.Types.ObjectId, ref: "Village", required: true },
  gali_id: { type: mongoose.Schema.Types.ObjectId, ref: "Gali", required: true },

  date: { type: Date, required: true },
//   date: { type: String, required: true }, 
  time_slot: { type: String, enum: ["morning", "evening"], required: true },

  quantity_litre: { type: Number, required: true },
  rate_per_litre: { type: Number, required: true },
  total_amount: { type: Number,},
}, {
  timestamps: true
});

export default mongoose.model("MilkCollection", milkCollectionSchema);
/*
Aur insert karte waqt:

const formattedDate = new Date("2025-12-01");
*/