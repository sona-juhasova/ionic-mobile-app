// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxsHfY051QWI9Yhq0DYX-Dm0LAW90oUDI",
    authDomain: "vocabulary-ionic-app.firebaseapp.com",
    databaseURL: "https://vocabulary-ionic-app-default-rtdb.firebaseio.com",
    projectId: "vocabulary-ionic-app",
    storageBucket: "vocabulary-ionic-app.appspot.com",
    messagingSenderId: "655379653068",
    appId: "1:655379653068:web:d29115f0452c5f1ce03d69"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Create database reference
const database = getDatabase(app);
export default app;

// // Reference to posts in Realtime DB
export const wordsRef = ref(database, "words");
// // Reference to users in Realtime DB
// export const usersRef = ref(database, "users");
// // Get reference to specific post using post id
// export function getPostRef(postId) {
//     return ref(database, "posts/" + postId);
// }
// // Get reference to specific user using user id
// export function getUserRef(userId) {
//     return ref(database, "users/" + userId);
// }
