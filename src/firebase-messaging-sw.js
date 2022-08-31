importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBOeY-wFgYB0Nt_dNEvqjr1ZfLKflxa_sk",
  authDomain: "phone-login-service.firebaseapp.com",
  databaseURL: "https://phone-login-service-default-rtdb.firebaseio.com",
  projectId: "phone-login-service",
  storageBucket: "phone-login-service.appspot.com",
  messagingSenderId: "484249561648",
  appId: "1:484249561648:web:3c8766a1988ab82f485bf5"
});

const messaging = firebase.messaging();
