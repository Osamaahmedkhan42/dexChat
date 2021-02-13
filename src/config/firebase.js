import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'


  var firebaseConfig = {
    apiKey: "AIzaSyAcK7D9ku25asLrN-ufsV2hWc8BsAptk8w",
    authDomain: "basic-chat-42.firebaseapp.com",
    projectId: "basic-chat-42",
    storageBucket: "basic-chat-42.appspot.com",
    messagingSenderId: "525598547929",
    appId: "1:525598547929:web:b37dab88afae01253f03c8"
  };
  // Initialize Firebase
  var Firebase = firebase.initializeApp(firebaseConfig);
 export default Firebase;
