/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA5NPwu2pSQX3i8VhRTp6r-qO1LdnRXqQo",
    authDomain: "quiz-app-pwa-f44ae.firebaseapp.com",
    projectId: "quiz-app-pwa-f44ae",
    storageBucket: "quiz-app-pwa-f44ae.appspot.com",
    messagingSenderId: "212135701061",
    appId: "1:212135701061:web:e60a00a81abeaef0a2112c"
})

firebase.messaging();
