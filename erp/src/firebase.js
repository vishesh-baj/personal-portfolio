// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6Ie6cKWjZGurPHkt2OHfru7MYP0v5NMg",
  authDomain: "erps-ba20c.firebaseapp.com",
  projectId: "erps-ba20c",
  storageBucket: "erps-ba20c.appspot.com",
  messagingSenderId: "810262994908",
  appId: "1:810262994908:web:adba5c48689660634f3919",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
