// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7y4BjvX49VKeGVJ29mIVKYnh7yhlGQ-c",
  authDomain: "sih-hos.firebaseapp.com",
  projectId: "sih-hos",
  storageBucket: "sih-hos.appspot.com",
  messagingSenderId: "883213105723",
  appId: "1:883213105723:web:6d61f0c9ec63cfb75eba1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);