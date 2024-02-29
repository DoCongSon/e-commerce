import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBL6EoF4k9nTxr0qcHP68Zn4s2G5wvXkZ8",
    authDomain: "e-commerce-aa802.firebaseapp.com",
    projectId: "e-commerce-aa802",
    storageBucket: "e-commerce-aa802.appspot.com",
    messagingSenderId: "857815286294",
    appId: "1:857815286294:web:351a74e776234c0ad76b37",
    measurementId: "G-4Q7NGTGXMX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }