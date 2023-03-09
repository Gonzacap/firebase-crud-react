// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhZ6WIDoG-na6QaonKw-yLF4pgBPIdLOs",
  authDomain: "firestore-crud-react-10a5a.firebaseapp.com",
  projectId: "firestore-crud-react-10a5a",
  storageBucket: "firestore-crud-react-10a5a.appspot.com",
  messagingSenderId: "535670812914",
  appId: "1:535670812914:web:38c11cc2e8bc496b6fa06b"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();