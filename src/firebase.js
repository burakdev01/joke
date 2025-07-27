// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtWbpIIGxL9ScPVHvuIO7fOoICCRuNl1g",
  authDomain: "joke-33824.firebaseapp.com",
  databaseURL: "https://joke-33824-default-rtdb.firebaseio.com",
  projectId: "joke-33824",
  storageBucket: "joke-33824.firebasestorage.app",
  messagingSenderId: "121000016766",
  appId: "1:121000016766:web:638fecc6cdcb1feaa1512f",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
