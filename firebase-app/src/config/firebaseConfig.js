import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzJ5JKT4-tuLiyD0cnt709NbXrksxJ1zQ",
  authDomain: "test-app-150cf.firebaseapp.com",
  projectId: "test-app-150cf",
  databaseURL:
    "https://test-app-150cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "test-app-150cf.appspot.com",
  messagingSenderId: "322434539066",
  appId: "1:322434539066:web:549f1365757d2a0b4bdf03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, set, onValue, update };
