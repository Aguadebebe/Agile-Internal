 
  // Import the functions you need from the SDKs you need
  import firebase from "firebase/app";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  import "firebase/firestore";
   
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPbzceGHx0MhVSBskNImrI6yidaPLnhck",
    authDomain: "agile-internal.firebaseapp.com",
    projectId: "agile-internal",
    storageBucket: "agile-internal.appspot.com",
    messagingSenderId: "1079578954763",
    appId: "1:1079578954763:web:64e1c3b59f92240d4a4b0e",
    measurementId: "G-7W8MHBKXS6"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const firestore = app.firestore();
  const db = firebase.firestore();
  


  export { app, firestore };
  export default db;
 