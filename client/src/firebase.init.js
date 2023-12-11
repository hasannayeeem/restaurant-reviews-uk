// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAWduGS3-BzniQRuKpu2IagLaFfWMEYo",
  authDomain: "restaurant-reviews-uk.firebaseapp.com",
  projectId: "restaurant-reviews-uk",
  storageBucket: "restaurant-reviews-uk.appspot.com",
  messagingSenderId: "54753509092",
  appId: "1:54753509092:web:2bd1f40f3b38db5250b6f1",
  measurementId: "G-D3NK706SSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
