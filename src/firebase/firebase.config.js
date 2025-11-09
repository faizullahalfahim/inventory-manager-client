// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Usd7QO0AaM-9ChtipR7hyyMWN9357Ps",
  authDomain: "inventory-manager-client-92cc7.firebaseapp.com",
  projectId: "inventory-manager-client-92cc7",
  storageBucket: "inventory-manager-client-92cc7.firebasestorage.app",
  messagingSenderId: "325628839151",
  appId: "1:325628839151:web:28fa81bec028a46a43071a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
