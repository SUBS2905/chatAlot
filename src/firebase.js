import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxCLewzeCkh5w0PcnZOzLQ9oUn2QgZPJA",
  authDomain: "chat-a-lot-1d327.firebaseapp.com",
  projectId: "chat-a-lot-1d327",
  storageBucket: "chat-a-lot-1d327.appspot.com",
  messagingSenderId: "424172109336",
  appId: "1:424172109336:web:bc7410120a29bc9db90d6d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();