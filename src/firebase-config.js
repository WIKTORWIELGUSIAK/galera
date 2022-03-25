/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Jmo_AljBT5JcNYBaMrgr-c_cVE1W4B4",
  authDomain: "galera-c33fa.firebaseapp.com",
  projectId: "galera-c33fa",
  storageBucket: "galera-c33fa.appspot.com",
  messagingSenderId: "107076686565",
  appId: "1:107076686565:web:d38485ef8e205ed7fe3a0c",
  measurementId: "G-XTE2QR128C",
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

export const db = getFirestore(app);
