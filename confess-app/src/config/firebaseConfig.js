import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9Zy35TG1X7L5GY42G-wQBvoMG1gzxt6M",
  authDomain: "confession-app-6a0a3.firebaseapp.com",
  databaseURL:
    "https://confession-app-6a0a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confession-app-6a0a3",
  storageBucket: "confession-app-6a0a3.appspot.com",
  messagingSenderId: "431720281970",
  appId: "1:431720281970:web:b238c2b6d2099d8b320feb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, set, ref, onValue };
