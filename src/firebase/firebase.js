import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCWrQcBK-s7wmiiP_X4XyjmI_nC18YdTyg",
    authDomain: "iem-project.firebaseapp.com",
    databaseURL: "https://iem-project.firebaseio.com",
    projectId: "iem-project",
    storageBucket: "iem-project.appspot.com",
    messagingSenderId: "594585519967",
    appId: "1:594585519967:web:6e6604684229e9e22c18ea",
    measurementId: "G-R80K5DKVK0"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;