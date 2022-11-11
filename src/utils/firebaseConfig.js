import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJftYVTqrGk-YXB-30kiXWBRdqtcl4L0Q",
  authDomain: "drowsydrivingmonitor.firebaseapp.com",
  databaseURL:
    "https://drowsydrivingmonitor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "drowsydrivingmonitor",
  storageBucket: "drowsydrivingmonitor.appspot.com",
  messagingSenderId: "632273636009",
  appId: "1:632273636009:web:68f5e7f4dc441b975ab7b8",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
