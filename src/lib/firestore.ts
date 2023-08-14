// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTAJxqXNfO-BBHtuu3t9EC9YzwyTTEaoM",
  authDomain: "medtech-e6922.firebaseapp.com",
  projectId: "medtech-e6922",
  storageBucket: "medtech-e6922.appspot.com",
  messagingSenderId: "10365262149",
  appId: "1:10365262149:web:07a198e5fc1329193fc62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app as firebaseApp}
