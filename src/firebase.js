// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJwSjyg1isbYgWXhQL9H663XeYEGMgQ04",
  authDomain: "gaisb-ad799.firebaseapp.com",
  projectId: "gaisb-ad799",
  storageBucket: "gaisb-ad799.firebasestorage.app",
  messagingSenderId: "395435864000",
  appId: "1:395435864000:web:ec3237e9b9a68029056225",
  measurementId: "G-LWN9ECGZQF"
};

// Initialize Firebase (prevents re-initialization during hot reloads)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Safely initialize Analytics only in browser environment
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
