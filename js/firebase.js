let firebaseConfig = {
    apiKey: "AIzaSyCBIdeWRFq_UYVErivACBfd0AdgWA_TXaY",
    authDomain: "blog-website-73fae.firebaseapp.com",
    projectId: "blog-website-73fae",
    storageBucket: "blog-website-73fae.appspot.com",
    messagingSenderId: "1069380128634",
    appId: "1:1069380128634:web:f8b6b4c1c16d4dbb70d0c3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  let db = firebase.firestore();