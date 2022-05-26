
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.RACT_APP_API_KEY,
  authDomain: process.env.RACT_APP_AUTH_DOMAIN,
  projectId: process.env.RACT_APP_PROJECT_ID,
  storageBucket: process.env.RACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.RACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.RACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;