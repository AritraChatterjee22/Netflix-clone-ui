import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyDSrVzNH4gfqBKrc_61T5Z7nCmUK2imAnM",

  authDomain: "react-netflix-clone-14b02.firebaseapp.com",

  projectId: "react-netflix-clone-14b02",

  storageBucket: "react-netflix-clone-14b02.appspot.com",

  messagingSenderId: "720241356812",

  appId: "1:720241356812:web:b54aa3a28ea91316c27e29",

  measurementId: "G-4L322BLM6F"

};



const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
