import firebase from 'firebase/app'

require("firebase/auth")
require("firebase/firestore")

export const firebaseConfig = {
  apiKey: "AIzaSyC7Ku_VVwyJveXsRmDFhrty7ALaX4ZNIBg",
  authDomain: "multi-step.firebaseapp.com",
  projectId: "multi-step",
  storageBucket: "multi-step.appspot.com",
  messagingSenderId: "227481022390",
  appId: "1:227481022390:web:9a9a497aabb0fda4e85b17"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;