// src/Firebase.js loginfirst
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCN9vBSq9-6EH85WEKI0oeDXg1ruJtPqlw",
  authDomain: "loginfirst-a465c.firebaseapp.com",
  projectId: "loginfirst-a465c",
  storageBucket: "loginfirst-a465c.appspot.com",
  messagingSenderId: "981751499634",
  appId: "1:981751499634:web:64d5c9596a0a855d34ebeb",
  measurementId: "G-FJGQ1S1YZE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db };


