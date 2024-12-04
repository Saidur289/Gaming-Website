// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjFp6KsTFfALOz7P60SgRz3FNmQKxkgvA",
  authDomain: "chill-gamer-project-14385.firebaseapp.com",
  projectId: "chill-gamer-project-14385",
  storageBucket: "chill-gamer-project-14385.firebasestorage.app",
  messagingSenderId: "1093383521692",
  appId: "1:1093383521692:web:2fe3f602ea4d59763e3459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
