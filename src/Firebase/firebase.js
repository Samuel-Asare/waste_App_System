/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfxoHAVVmbHzsQRCB9SQto55cKRVwmoc8",
    authDomain: "final-year-project-13b99.firebaseapp.com",
    projectId: "final-year-project-13b99",
    storageBucket: "final-year-project-13b99.appspot.com",
    messagingSenderId: "823386976181",
    appId: "1:823386976181:web:e9d1cb7127ef2ea8e373fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
