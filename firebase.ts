import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChcswSvtjTBvBUwV_QrWGSrlLFR49q2aM",
  authDomain: "tecnica-y-servicios.firebaseapp.com",
  projectId: "tecnica-y-servicios",
  storageBucket: "tecnica-y-servicios.firebasestorage.app",
  messagingSenderId: "913260542491",
  appId: "1:913260542491:web:6a7dd29e62eef4466456be",
  measurementId: "G-JE0DRQ4H5F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
