// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAej22BliRHU8YHcbvVvtVKPaagIvcaLSk",
  authDomain: "bungoma-cd929.firebaseapp.com",
  projectId: "bungoma-cd929",
  storageBucket: "bungoma-cd929.appspot.com",
  messagingSenderId: "866283998022",
  appId: "1:866283998022:web:135c1f745c8871efbf7347",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();