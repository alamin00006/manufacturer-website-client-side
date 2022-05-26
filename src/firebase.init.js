
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCJVH7Mv7dfwDVxELt6q3aSLcvTilbjvjM",
//   authDomain: "machine-parts.firebaseapp.com",
//   projectId: "machine-parts",
//   storageBucket: "machine-parts.appspot.com",
//   messagingSenderId: "546852327933",
//   appId: "1:546852327933:web:31dca059df3f469ae40994"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;




const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;