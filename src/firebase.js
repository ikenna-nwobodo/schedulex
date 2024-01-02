import "firebase/database";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBJL_-dKt-U-RXBo7-A00oi4sC1xdKBR0I",
    authDomain: "schedulex-53f9f.firebaseapp.com",
    databaseURL: "https://schedulex-53f9f-default-rtdb.firebaseio.com",
    projectId: "schedulex-53f9f",
    storageBucket: "schedulex-53f9f.appspot.com",
    messagingSenderId: "901238997377",
    appId: "1:901238997377:web:fb5c4f37ecfc8dfe0be880",
    measurementId: "G-EHZM01RYPX",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
  //   const analytics = getAnalytics(app);
}

export default StartFirebase;
