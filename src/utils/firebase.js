// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSuRCPWjZudQwsvQwPhKkBQYAC1QmCHkg",
  authDomain: "ecommerce-endoscopia.firebaseapp.com",
  projectId: "ecommerce-endoscopia",
  storageBucket: "ecommerce-endoscopia.appspot.com",
  messagingSenderId: "614348658959",
  appId: "1:614348658959:web:ab677c8dc150861fc8467a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);