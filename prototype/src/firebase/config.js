import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsOleEcIHzJVk9_8mYVdqgxHzaX7yeB0I",
    authDomain: "cs411-eef24.firebaseapp.com",
    projectId: "cs411-eef24",
    storageBucket: "cs411-eef24.appspot.com",
    messagingSenderId: "562100580221",
    appId: "1:562100580221:web:1c6b6f38fd678a1ec8e614"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };