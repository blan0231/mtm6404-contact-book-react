import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXo1PJ6WGn6OU8U1MtYvTE32AUMeX-Mfk",
  authDomain: "mtm6404-contactlist-826df.firebaseapp.com",
  projectId: "mtm6404-contactlist-826df",
  storageBucket: "mtm6404-contactlist-826df.firebasestorage.app",
  messagingSenderId: "174403774079",
  appId: "1:174403774079:web:6ac5b411d44150de91014a"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
