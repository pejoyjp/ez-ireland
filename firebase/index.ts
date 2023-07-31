// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "ez-ireland.firebaseapp.com",
    projectId: "ez-ireland",
    storageBucket: "ez-ireland.appspot.com",
    messagingSenderId: "1008509868914",
    appId: "1:1008509868914:web:fd302e76bed3ea99515beb"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)