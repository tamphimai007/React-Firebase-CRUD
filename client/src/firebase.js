// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjpVoEpz6Ugk6F8qnBR4aKWpR3NGwBltI",
  authDomain: "crud-app-ea8f2.firebaseapp.com",
  projectId: "crud-app-ea8f2",
  storageBucket: "crud-app-ea8f2.appspot.com",
  messagingSenderId: "858036838738",
  appId: "1:858036838738:web:6d8919b692d46eafd45a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}