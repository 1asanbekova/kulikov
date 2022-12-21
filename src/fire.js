// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl3W225_tdj8wlSzZy1G5xN97GeXLDUAE",
  authDomain: "kulikovauth.firebaseapp.com",
  projectId: "kulikovauth",
  storageBucket: "kulikovauth.appspot.com",
  messagingSenderId: "616229888766",
  appId: "1:616229888766:web:5d6546679e52ae8669fbaf",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
export const db = getFirestore(fire);
export const storage = getStorage();
