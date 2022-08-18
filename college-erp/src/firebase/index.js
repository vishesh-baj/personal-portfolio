import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhNCx7nqUUIhDp6Mf-5k9BK4RuuF4jjW0",
  authDomain: "college-erp-ebe6e.firebaseapp.com",
  projectId: "college-erp-ebe6e",
  storageBucket: "college-erp-ebe6e.appspot.com",
  messagingSenderId: "1041218943917",
  appId: "1:1041218943917:web:e7effd8db8e0dbedd77f24",
  measurementId: "G-D7PFFKYP22",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
