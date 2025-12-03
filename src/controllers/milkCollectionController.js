import MilkCollection from "../models/milkCollection.js";

// export const addMilkRecord = async (req, res) => {
//   try {
//     const {
//       user_id,
//       village_id,
//       gali_id,
//       date,
//       time_slot,
//       quantity_litre,
//       rate_per_litre
//     } = req.body;

//     const total_amount = quantity_litre * rate_per_litre;

//     const record = await MilkCollection.create({
//       user_id,
//       village_id,
//       gali_id,
//       date,
//       time_slot,
//       quantity_litre,
//       rate_per_litre,
//       total_amount
//     });

//     res.status(200).json({ message: "Milk record added", data: record });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };





export const addMilkRecord = async (req, res) => {
  try {
    const {
      user_id,
      date,
      time_slot,
      village_id,
      gali_id,
      quantity_litre,
      rate_per_litre,
    } = req.body;

    // ❌ Duplicate check (user + date + time_slot must be unique)
    const exists = await MilkCollection.findOne({
      user_id,
      date,
      time_slot,
    });

    if (exists) {
      return res.status(400).json({
        message: "Entry already exists for this user on this date & time slot",
      });
    }

    const total_amount = quantity_litre * rate_per_litre;

    const record = await MilkCollection.create({
      user_id,
      village_id,
      gali_id,
      date,
      time_slot,
      quantity_litre,
      rate_per_litre,
      total_amount,
    });

    res.status(200).json({ message: "Milk record added", data: record });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getMilkRecords = async (req, res) => {
  try {
    const data = await MilkCollection.find()
      .populate("user_id")
      .populate("village_id")
      .populate("gali_id")
      .sort({ createdAt: -1 });

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};