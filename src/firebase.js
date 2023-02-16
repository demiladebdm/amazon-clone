// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-yYR2_OpGiSJMa97SkNZpP0276RHakl4",
  authDomain: "clone-5ed93.firebaseapp.com",
  projectId: "clone-5ed93",
  storageBucket: "clone-5ed93.appspot.com",
  messagingSenderId: "736788607492",
  appId: "1:736788607492:web:50b8994aaea4884c947b51",
  measurementId: "G-P0SFDGJ35F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
// const auth = firebase.auth();
// export { auth };