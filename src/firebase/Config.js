import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDz6YPQ41-Q88sFKoT_G2NN82AmeeW8Xwg",
  authDomain: "clarity-store.firebaseapp.com",
  projectId: "clarity-store",
  storageBucket: "clarity-store.appspot.com",
  messagingSenderId: "834638685167",
  appId: "1:834638685167:web:4eb545bac39803c3b68c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;