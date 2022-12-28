// import firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1nXLsU6NHAO3kkQMdv3T5w4TBW0BrN0s",
    authDomain: "my-blog-b69b5.firebaseapp.com",
    projectId: "my-blog-b69b5",
    storageBucket: "my-blog-b69b5.appspot.com",
    messagingSenderId: "59839205903",
    appId: "1:59839205903:web:6530fe9557d8db6350497a"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();