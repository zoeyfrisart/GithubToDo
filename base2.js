import firebase from 'firebase/app';

require('firebase/auth');
require('firebase/database');

const fireApp = firebase.initializeApp({
  apiKey: "AIzaSyAdPkQxzlc0mLMQ0cwtC6WZT3sShasdcd4",
  authDomain: "githubtodoapp.firebaseapp.com",
  databaseURL: "https://githubtodoapp.firebaseio.com",
  projectId: "githubtodoapp",
  storageBucket: "githubtodoapp.appspot.com",
  messagingSenderId: "93303070296"
});

export default fireApp;
