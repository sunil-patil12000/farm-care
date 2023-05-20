// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADXTtSwHig1ORowGY3_c3CpN-fRmgD0NA",
  authDomain: "farming-90ead.firebaseapp.com",
  projectId: "farming-90ead",
  storageBucket: "farming-90ead.appspot.com",
  messagingSenderId: "115332758007",
  appId: "1:115332758007:web:a0d041f4cc5460e02796f2",
  measurementId: "G-EELS9XG5Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


