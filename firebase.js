// إعداد Firebase

const firebaseConfig = {
  apiKey: "AIzaSyARNJOPAycWU3YJdZSBN1d9uoLrvso3i4Y",
  authDomain: "cd-card-87365.firebaseapp.com",
  projectId: "cd-card-87365",
  storageBucket: "cd-card-87365.firebasestorage.app",
  messagingSenderId: "397926299412",
  appId: "1:397926299412:web:efbe9ae9aae29df368f401",
  measurementId: "G-NDL36M3W68"
};

// تشغيل Firebase
firebase.initializeApp(firebaseConfig);

// تشغيل الخدمات
const auth = firebase.auth();
const db = firebase.firestore();
