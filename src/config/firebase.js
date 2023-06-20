
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDBd5ERhwQNKavVB-PE_YkRV43u3Wnnsi0",
  authDomain: "tiktok---jornada-53a09.firebaseapp.com",
  projectId: "tiktok---jornada-53a09",
  storageBucket: "tiktok---jornada-53a09.appspot.com",
  messagingSenderId: "762153504753",
  appId: "1:762153504753:web:328c46daefbaa0a3a5be50"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;