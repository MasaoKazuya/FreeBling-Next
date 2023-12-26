
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC4XVN5W8Qeq2pflm63oZEwmzwUK_hGG5Q",
  authDomain: "messaging-324f7.firebaseapp.com",
  projectId: "messaging-324f7",
  storageBucket: "messaging-324f7.appspot.com",
  messagingSenderId: "994124483378",
  appId: "1:994124483378:web:ccabd9824c0c229af3652b",
  measurementId: "G-5Z6LE0KS0S"
};

firebase.initializeApp({
  firebaseConfig
});

firebase.messaging()