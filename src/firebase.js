import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnar-zZFFFQh8NLQH3DOh625WwF4edxu0",
  authDomain: "clone-23122.firebaseapp.com",
  projectId: "clone-23122",
  storageBucket: "clone-23122.appspot.com",
  messagingSenderId: "426843533689",
  appId: "1:426843533689:web:c2b0b73776864520ca3fa8",
  measurementId: "G-W497VE1TD0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
