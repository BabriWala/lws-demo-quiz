// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRxaZRj5n--ObBD2w8C6Gw2O4q8RJt7g4",
  authDomain: "lws-quiz-app.firebaseapp.com",
  projectId: "lws-quiz-app",
  storageBucket: "lws-quiz-app.appspot.com",
  databaseURL:
    "https://lws-quiz-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "723338738412",
  appId: "1:723338738412:web:25e21d6f4e7dd0584c83c9",
  measurementId: "G-F9XLDWDQQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
