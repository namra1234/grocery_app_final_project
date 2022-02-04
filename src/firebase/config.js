import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1LW7M2IzcrDd6HD8bpOAVGfPC7V3dhq0",
    authDomain: "groceryfarm-f2e7b.firebaseapp.com",
    projectId: "groceryfarm-f2e7b",
    storageBucket: "groceryfarm-f2e7b.appspot.com",
    messagingSenderId: "58103300258",
    appId: "1:58103300258:web:6c33d70a0756068c6317fb",
    measurementId: "G-KNL42RGF26"
  };

let app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();