import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script> */}

// <!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries -->
{/* <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-analytics.js"></script> */}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKkn-fqio2Q2t5R_ZfiDu6umacfeDhf04",
    authDomain: "snetwork-6fb1d.firebaseapp.com",
    projectId: "snetwork-6fb1d",
    storageBucket: "snetwork-6fb1d.appspot.com",
    messagingSenderId: "701721261391",
    appId: "1:701721261391:web:50f8daef49a9940aa9013a",
    measurementId: "G-MJ9LT6ZG0C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}