/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKED,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAFvJ4qb8GDbjY1V4dAIxMr843Yam3tlx4",
//   authDomain: "authentication-tutorial-36130.firebaseapp.com",
//   projectId: "authentication-tutorial-36130",
//   storageBucket: "authentication-tutorial-36130.appspot.com",
//   messagingSenderId: "844257476035",
//   appId: "1:844257476035:web:a47d74fe72bba4ca039176",
//   measurementId: "G-GMNEJSJ4BG",
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
