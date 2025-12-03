import MilkCollection from "../models/milkCollection.js";

// 📌 Common utility to convert Date → YYYY-MM-DD
const formatDate = (d) => d.toISOString().split("T")[0];

// 📌 Group by date function (daily records)
const groupByDate = (records) => {
  const grouped = {};

  records.forEach((r) => {
    if (!grouped[r.date]) {
      grouped[r.date] = { total_litre: 0, total_amount: 0, items: [] };
    }
    grouped[r.date].total_litre += r.quantity_litre;
    grouped[r.date].total_amount += r.total_amount;
    grouped[r.date].items.push(r);
  });

  return grouped;
};

// 🔵 7 Days Billing
// export const getOneWeekBilling = async (req, res) => {
//   try {
//     const userId = req.query.user_id;

//     const today = new Date();
//     const endDate = new Date(today.setDate(today.getDate() - 1)); 
//     const startDate = new Date(endDate);
//     startDate.setDate(startDate.getDate() - 6);

//     const allData = await MilkCollection.find({ user_id: userId });

//     const convertToISO = (d) => {
//       const [day, month, year] = d.split("/");
//       return new Date(`${year}-${month}-${day}`);
//     };

//     const filtered = allData.filter((item) => {
//       const dt = convertToISO(item.date);
//       return dt >= startDate && dt <= endDate;
//     });

//     let daily = {};
//     let total_litre = 0;
//     let total_amount = 0;

//     filtered.forEach(item => {
//       daily[item.date] = {
//         litre: (daily[item.date]?.litre || 0) + item.quantity_litre,
//         amount: (daily[item.date]?.amount || 0) + item.total_amount
//       };

//       total_litre += item.quantity_litre;
//       total_amount += item.total_amount;
//     });

//     return res.json({
//       startDate,
//       endDate,
//       daily,
//       total_litre,
//       total_amount
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export const getOneWeekBilling = async (req, res) => {
  try {
    const { user_id } = req.query;

    if (!user_id)
      return res.status(400).json({ message: "user_id is required" });

    const today = new Date();
    today.setDate(today.getDate() - 1); // 1 day previous

    const start = new Date(today);
    start.setDate(start.getDate() - 7); // 7 days back

    const startDate = formatDate(start);
    const endDate = formatDate(today);

    const records = await MilkCollection.find({
      user_id,
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: 1 });

    const grouped = groupByDate(records);

    const total_litre = records.reduce((s, r) => s + r.quantity_litre, 0);
    const total_amount = records.reduce((s, r) => s + r.total_amount, 0);

    res.status(200).json({
      startDate,
      endDate,
      daily: grouped,
      total_litre,
      total_amount
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔵 15 Days Billing

export const getFifteenDaysBilling = async (req, res) => {
  try {
    const { user_id } = req.query;

    if (!user_id)
      return res.status(400).json({ message: "user_id is required" });

    const today = new Date();
    today.setDate(today.getDate() - 1);

    const start = new Date(today);
    start.setDate(start.getDate() - 15);

    const startDate = formatDate(start);
    const endDate = formatDate(today);

    const records = await MilkCollection.find({
      user_id,
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: 1 });

    const grouped = groupByDate(records);

    const total_litre = records.reduce((s, r) => s + r.quantity_litre, 0);
    const total_amount = records.reduce((s, r) => s + r.total_amount, 0);

    res.status(200).json({
      startDate,
      endDate,
      daily: grouped,
      total_litre,
      total_amount
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔵 Last Month Billing (1st to last)
export const getLastMonthBilling = async (req, res) => {
  try {
    const { user_id } = req.query;

    if (!user_id)
      return res.status(400).json({ message: "user_id is required" });

    const now = new Date();

    const lastMonth = now.getMonth();   // e.g. Dec → lastMonth = 11
    const year = now.getFullYear();

    const start = new Date(year, lastMonth - 1, 1);
    const end = new Date(year, lastMonth, 0);

    const startDate = formatDate(start);
    const endDate = formatDate(end);

    const records = await MilkCollection.find({
      user_id,
      date: { $gte: startDate, $lte: endDate }
    }).sort({ date: 1 });

    const grouped = groupByDate(records);

    const total_litre = records.reduce((s, r) => s + r.quantity_litre, 0);
    const total_amount = records.reduce((s, r) => s + r.total_amount, 0);

    res.status(200).json({
      startDate,
      endDate,
      daily: grouped,
      total_litre,
      total_amount
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
