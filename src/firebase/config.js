// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCPlGU2mmhnMK3znskUfPCZoIQfsMcv5uo",
    authDomain: "admin-71145.firebaseapp.com",
    projectId: "admin-71145",
    storageBucket: "admin-71145.appspot.com",
    messagingSenderId: "406690268804",
    appId: "1:406690268804:web:4bcfb7f59d48a7d3cf24d1",
    measurementId: "G-RMKFYZ3LXY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);