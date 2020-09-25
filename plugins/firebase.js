import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBcQ-uADWgw7SgRfCLfYAIyjMFYkbxBn8E",
    authDomain: "fir-auth-practice-takechi.firebaseapp.com",
    databaseURL: "https://fir-auth-practice-takechi.firebaseio.com",
    projectId: "fir-auth-practice-takechi",
    storageBucket: "fir-auth-practice-takechi.appspot.com",
    messagingSenderId: "fir-auth-practice-takechi",
    appId: "1:505459766002:web:766575ae4ad241aed5d66b"
  })
}

export default firebase
