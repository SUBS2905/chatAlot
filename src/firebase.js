import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


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
