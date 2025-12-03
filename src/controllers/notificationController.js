import User from "../models/User.js";
import admin from "./firebase.js"; // Firebase Admin import

export const sendMilkNotification = async (req, res) => {
  try {
    const { village_id, gali_id, message } = req.body;

    if (!village_id || !gali_id || !message) {
      return res.status(400).json({ message: "village_id, gali_id and message are required" });
    }

    // Find users with token
    const users = await User.find({
      village_id,
      gali_id,
      device_token: { $exists: true, $ne: "" },
    });

    if (!users.length) {
      return res.status(404).json({ message: "No users found for this village and gali" });
    }

    const tokens = users.map((u) => u.device_token);

    if (tokens.length === 0) {
      return res.status(400).json({ message: "No valid device tokens found" });
    }

    // NEW Firebase API (sendToDevice removed in v11+)
    const response = await admin.messaging().sendEachForMulticast({
      tokens,
      notification: {
        title: "Milk Delivery",
        body: message,
      },
    });

    res.status(200).json({
      message: "Notification sent successfully",
      total_users: users.length,
      fcm_response: response,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




// import User from "../models/User.js";
// import admin from "./firebase.js"; // Firebase Admin import

// export const sendMilkNotification = async (req, res) => {
//   try {
//     const { village_id, gali_id, message } = req.body;

//     if (!village_id || !gali_id || !message) {
//       return res.status(400).json({ message: "village_id, gali_id and message are required" });
//     }

    
//     const users = await User.find({
//       village_id,
//       gali_id,
//       device_token: { $exists: true, $ne: "" },
//     });

//     if (!users.length) {
//       return res.status(404).json({ message: "No users found for this village and gali" });
//     }

//     const tokens = users.map((u) => u.device_token);

//     if (tokens.length === 0) {
//       return res.status(400).json({ message: "No valid device tokens found" });
//     }


//     const payload = {
//       notification: {
//         title: "Milk Delivery",
//         body: message,
//       },
//     };

   
//     const response = await admin.messaging().sendToDevice(tokens, payload);

//     res.status(200).json({
//       message: "Notification sent successfully",
//       total_users: users.length,
//       fcm_response: response,
//     });
//   } catch (err) {
   
//     res.status(500).json({ message: err.message });
//   }
// };
