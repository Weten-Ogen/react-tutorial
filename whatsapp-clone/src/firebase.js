// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ahySHFEsue9ivD2UhzckOunygq8QBLs",
  authDomain: "whatsapp-clone-f70fb.firebaseapp.com",
  projectId: "whatsapp-clone-f70fb",
  storageBucket: "whatsapp-clone-f70fb.appspot.com",
  messagingSenderId: "876048277572",
  appId: "1:876048277572:web:e24d9b3e4b369e52a05c11",
  measurementId: "G-97MSL3ZVNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);