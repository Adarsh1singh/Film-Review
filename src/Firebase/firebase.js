
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore ,collection} from 'firestore/firebase.js'




const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// export  const moviesRef =  collection(db , "movies");
export const moviesRef = collection(db , 'movies');
export default app;
