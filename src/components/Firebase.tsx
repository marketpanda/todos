import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyCqEie2UvbeWNP7e1U8bvaj3SekIC69D1k",
  authDomain: "taskmanager-6a1c5.firebaseapp.com",
  projectId: "taskmanager-6a1c5",
  storageBucket: "taskmanager-6a1c5.appspot.com",
  messagingSenderId: "358010655721",
  appId: "1:358010655721:web:f4c0c462a55179cb017178",
  measurementId: "G-S26872LKRK"
};
 

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getFirestore(app)

export const providerGoogle = new GoogleAuthProvider()


