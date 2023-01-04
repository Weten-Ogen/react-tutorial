// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1CFakYdOpKSqU1MQdRsZgZgvANjOlN3E",
  authDomain: "instagram-clone-76b42.firebaseapp.com",
  projectId: "instagram-clone-76b42",
  storageBucket: "instagram-clone-76b42.appspot.com",
  messagingSenderId: "376354449734",
  appId: "1:376354449734:web:692de205df2ee8d27f5d47",
  measurementId: "G-ZS05WG5SE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);