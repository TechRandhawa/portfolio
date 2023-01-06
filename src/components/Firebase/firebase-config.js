import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7xOtmfN2QuZC3I0uknXfpb9R1hagccos",
  authDomain: "my-cv-portfolio.firebaseapp.com",
  projectId: "my-cv-portfolio",
  storageBucket: "my-cv-portfolio.appspot.com",
  messagingSenderId: "356119317846",
  appId: "1:356119317846:web:8fe3d79d949816949c5af7"
}

const app = initializeApp(firebaseConfig)

// export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);
