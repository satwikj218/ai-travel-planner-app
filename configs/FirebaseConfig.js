// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvH9d2pcSLhIVX6oAGnCsDxuDTR6XSjHQ",
  authDomain: "ai-travel-planner-1f370.firebaseapp.com",
  projectId: "ai-travel-planner-1f370",
  storageBucket: "ai-travel-planner-1f370.firebasestorage.app",
  messagingSenderId: "948734733121",
  appId: "1:948734733121:web:4d8466f64e114cc5a04fc0",
  measurementId: "G-77JYVGN87Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);