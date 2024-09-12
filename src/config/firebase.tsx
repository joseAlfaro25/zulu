import * as firebase from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_gccc1j_rP7_v5MoRwDCLP2n3mE4ZOis",
  authDomain: "events-eadbf.firebaseapp.com",
  projectId: "events-eadbf",
  storageBucket: "events-eadbf.appspot.com",
  messagingSenderId: "412625934846",
  appId: "1:412625934846:web:0efecc35091d4c7a46c8af",
  measurementId: "G-FD24CPMELM",
});
const db = getFirestore(app);

export { db };
