import Gali from "../models/Gali.js";

export const createGali = async (req, res) => {
  try {
    const { village_id, gali_no, house_no, landmark } = req.body;

    const gali = await Gali.create({ village_id, gali_no, house_no, landmark });

    res.status(201).json({ message: "Gali Created", gali });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGalies = async (req, res) => {
  try {
    const { villageId } = req.query;

    const galies = await Gali.find(villageId ? { villageId } : {});

    res.json(galies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
