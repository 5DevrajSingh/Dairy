import mongoose from "mongoose";

const villageSchema = new mongoose.Schema(
  {
    village_name: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Village", villageSchema);
