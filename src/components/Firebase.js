import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getFirestore(app);
export const providerGoogle = new GoogleAuthProvider();


// VITE_UNSPLASH_ACCESS_KEY =  gMk_Tyo2hovpLZryKNo6NZkRtNPopZZaaqwmfstdzas 
// VITE_API_KEY = AIzaSyCqEie2UvbeWNP7e1U8bvaj3SekIC69D1k
// VITE_AUTH_DOMAIN = taskmanager-6a1c5.firebaseapp.com
// VITE_PROJECT_ID = taskmanager-6a1c5
// VITE_STORAGE_BUCKET = taskmanager-6a1c5.appspot.com
// VITE_SENDER_ID = 358010655721
// VITE_APP_ID = 1:358010655721:web:f4c0c462a55179cb017178
// VITE_MEASUREMENT_ID = G-S26872LKRK