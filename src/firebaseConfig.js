import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD8j6HnQTl_-JaXTLIEdWEme7NPlFDtclw",
  authDomain: "e-commerce-74923.firebaseapp.com",
  projectId: "e-commerce-74923",
  storageBucket: "e-commerce-74923.appspot.com",
  messagingSenderId: "111280657018",
  appId: "1:111280657018:web:1da956030de3fbbcd2e1c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)