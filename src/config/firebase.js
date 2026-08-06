import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJwSjyg1isbYgWXhQL9H663XeYEGMgQ04",
  authDomain: "gaisb-ad799.firebaseapp.com",
  projectId: "gaisb-ad799",
  storageBucket: "gaisb-ad799.firebasestorage.app",
  messagingSenderId: "395435864000",
  appId: "1:395435864000:web:ec3237e9b9a68029056225",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
