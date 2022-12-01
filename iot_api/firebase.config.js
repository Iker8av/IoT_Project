import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv_l8RY1lVafGqV2QnLEQ1_OGedmp9BX0",
  authDomain: "proyecto-iot-3af79.firebaseapp.com",
  databaseURL: "https://proyecto-iot-3af79-default-rtdb.firebaseio.com",
  projectId: "proyecto-iot-3af79",
  storageBucket: "proyecto-iot-3af79.appspot.com",
  messagingSenderId: "133005460045",
  appId: "1:133005460045:web:3dbe89acfc8e62c3209204",
  measurementId: "G-MGJF2ZV35L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);

export default db;