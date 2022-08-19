import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmgvx9W92Q_OW5rmHUYJcw55-3LzrnwpI",
  authDomain: "utility-app-d0d31.firebaseapp.com",
  projectId: "utility-app-d0d31",
  storageBucket: "utility-app-d0d31.appspot.com",
  messagingSenderId: "332844805430",
  appId: "1:332844805430:web:dd037c6451d354afa3d797",
  measurementId: "G-D85MR5MELW",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
