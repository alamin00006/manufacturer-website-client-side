// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJVH7Mv7dfwDVxELt6q3aSLcvTilbjvjM",
  authDomain: "machine-parts.firebaseapp.com",
  projectId: "machine-parts",
  storageBucket: "machine-parts.appspot.com",
  messagingSenderId: "546852327933",
  appId: "1:546852327933:web:00ad5485d1de84f1e40994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;