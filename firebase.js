// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6zYbYpV5A7NapskVJ0y76QPceP-8WfGA",
  authDomain: "madhuvanthi-2017.firebaseapp.com",
  projectId: "madhuvanthi-2017",
  storageBucket: "madhuvanthi-2017.firebasestorage.app",
  messagingSenderId: "957092546896",
  appId: "1:957092546896:web:b6652a2cdb610d33914455",
  measurementId: "G-KT6XK74XB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);