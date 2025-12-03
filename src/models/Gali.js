import mongoose from "mongoose";

const galiSchema = new mongoose.Schema(
  {
    village_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Village",
      required: true
    },
    gali_no: { type: String, required: true },
    house_no:{type : String},
    landmark: {type: String}
  },
  { timestamps: true }
);

export default mongoose.model("Gali", galiSchema);
