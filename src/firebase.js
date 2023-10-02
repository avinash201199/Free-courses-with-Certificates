// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAW4BIOwKd4Wd4ZvKvkzz8EGLdL635kE74",
  authDomain: "freecourses-f05a8.firebaseapp.com",
  projectId: "freecourses-f05a8",
  storageBucket: "freecourses-f05a8.appspot.com",
  messagingSenderId: "1052345044680",
  appId: "1:1052345044680:web:a5f18d9f6b33ff47465ffd",
  measurementId: "G-DYH5M6W660",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
