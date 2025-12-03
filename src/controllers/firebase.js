import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

// ✅ Initialize Firebase Admin safely
if (!admin.apps.length) {
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!key) {
    console.error("❌ FIREBASE_SERVICE_ACCOUNT_KEY missing in .env");
  } else {
    console.log("firebaase key check datalog ", key);
    
    try {
      const serviceAccount = JSON.parse(key);
      // const serviceAccount = JSON.parse(key.replace(/\\n/g, "\n")); // Handle newline
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("✅ Firebase Admin Initialized");
    } catch (err) {
      console.error("❌ Firebase Init Error:", err.message);
    }
  }
}

export default admin;
