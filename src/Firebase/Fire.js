// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
// export  const moviesRef =  collection(db , "movies");
export const moviesRef = collection(db , 'movies');
export const reviwesRef = collection(db,'reviews');
export const userRef = collection(db, "users"  )
export default app;
