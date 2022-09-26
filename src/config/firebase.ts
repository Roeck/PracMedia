import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0TjVSf2uEKCSsmBokd51F9wlWnAhTgFo",
    authDomain: "pracmedia.firebaseapp.com",
    projectId: "pracmedia",
    storageBucket: "pracmedia.appspot.com",
    messagingSenderId: "843954077857",
    appId: "1:843954077857:web:a2fb1fe02a59d858e630e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
