import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWvBnk3UFB_NMPBqkGpBUBvAX18OZ69O0",
  authDomain: "app-mercado-libre.firebaseapp.com",
  projectId: "app-mercado-libre",
  storageBucket: "app-mercado-libre.firebasestorage.app",
  messagingSenderId: "797835701394",
  appId: "1:797835701394:web:801b497c6de7343472ca4b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);