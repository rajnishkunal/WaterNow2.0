// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB02QGEgdgZJChAtBkn3Et2krkTABFk48w",
  authDomain: "waternow-c4712.firebaseapp.com",
  databaseURL: "https://waternow-c4712-default-rtdb.firebaseio.com",
  projectId: "waternow-c4712",
  storageBucket: "waternow-c4712.appspot.com",
  messagingSenderId: "316319501179",
  appId: "1:316319501179:web:38d87aed558d3fbcd74bde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);