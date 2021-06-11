import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDNWoS4Zrkk3hPZLNRTBuvhKDZEa8d7Q8c",
    authDomain: "first-firebase-project-8b358.firebaseapp.com",
    projectId: "first-firebase-project-8b358",
    storageBucket: "first-firebase-project-8b358.appspot.com",
    messagingSenderId: "647793094598",
    appId: "1:647793094598:web:c8457f3f9a752549d88cc7",
    measurementId: "G-W4X0EE2HEK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  export {auth};