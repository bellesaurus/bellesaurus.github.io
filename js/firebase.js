let firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-website-73fae.firebaseapp.com",
  projectId: "blog-website-73fae",
  storageBucket: "blog-website-73fae.appspot.com",
  messagingSenderId: "1069380128634",
  appId: "1:1069380128634:web:f8b6b4c1c16d4dbb70d0c3"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();