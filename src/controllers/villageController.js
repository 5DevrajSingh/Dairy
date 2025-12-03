import Village from "../models/Village.js";

export const createVillage = async (req, res) => {
  try {
    const { village_name, state, city, pincode } = req.body;

    const village = await Village.create({ village_name, state, city, pincode });

    res.status(201).json({ message: "Village Created", village });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVillages = async (req, res) => {
  try {
    const villages = await Village.find();
    res.json(villages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
