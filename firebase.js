// Firebase Config
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT",
  storageBucket: "PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
