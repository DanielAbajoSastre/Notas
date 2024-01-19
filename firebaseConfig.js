// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import {getAuth} from  'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAxvz43zXGAWDyLYhi8_a6W6-Imitx4f5Y",
  authDomain: "appnode-597ca.firebaseapp.com",
  projectId: "appnode-597ca",
  storageBucket: "appnode-597ca.appspot.com",
  messagingSenderId: "587546029193",
  appId: "1:587546029193:web:f21502d98af264c5edaa58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firebase




/*
try {
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
} catch (error) {
  console.error('Firebase initialization error:', error.message);
}
*/
const auth = getAuth(app);

export { auth };
