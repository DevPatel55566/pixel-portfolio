import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDNi4KJIw_ixQM-lS2IleUOgLNRTsrz7LY',
  authDomain: 'dev---pixel-quest-portfolio.firebaseapp.com',
  projectId: 'dev---pixel-quest-portfolio',
  storageBucket: 'dev---pixel-quest-portfolio.appspot.com',
  messagingSenderId: '682829573427',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Sign-in and Sign-out functions
export const login = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
