import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDPqer2YBlD7uY9YmZBXqqPbEw2nexKWSk",
  authDomain: "fir-project-43069.firebaseapp.com",
  projectId: "fir-project-43069",
  storageBucket: "fir-project-43069.firebasestorage.app",
  messagingSenderId: "926393195783",
  appId: "1:926393195783:web:0177e943e8112138f2b9a2",
  measurementId: "G-G1LJM6R7YF",
  databaseURL:"https://fir-project-43069-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);