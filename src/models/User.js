import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    village_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true
    },
    gali_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gali",
      required: true
    },

    user_name: { type: String, required: true },
    phone: { type: String, required: true },

    milk: {type: String, enum: ["cow", "Buffalo"], required: true },
  
    rate: { type: Number, required: true },
    device_token: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
