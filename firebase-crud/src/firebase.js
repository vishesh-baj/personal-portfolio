¸`import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBQry6xIqIrmqewlapHenUdNh6sbt-tsjM",
  authDomain: "fir-crud-be285.firebaseapp.com",
  projectId: "fir-crud-be285",
  storageBucket: "fir-crud-be285.appspot.com",
  messagingSenderId: "292611757069",
  appId: "1:292611757069:web:8e88345e7a87ae3cecf144",
  measurementId: "G-4R4D7KB4GW",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// connection of sb with app
export const db = getFirestore(app);
