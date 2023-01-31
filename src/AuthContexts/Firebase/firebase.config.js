// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4gyZPyjM-aSz4BT-N7LB5LRz-uzPyius",
  authDomain: "evil-shop.firebaseapp.com",
  projectId: "evil-shop",
  storageBucket: "evil-shop.appspot.com",
  messagingSenderId: "978828339376",
  appId: "1:978828339376:web:0f710077bffd6d753f7375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app