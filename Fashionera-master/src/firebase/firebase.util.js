import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyA267TJtzDLAHYVmCEcPngvQ9q5htLbWcE",
    authDomain: "fashionera-8d010.firebaseapp.com",
    databaseURL: "https://fashionera-8d010.firebaseio.com",
    projectId: "fashionera-8d010",
    storageBucket: "fashionera-8d010.appspot.com",
    messagingSenderId: "285391670820",
    appId: "1:285391670820:web:4f1ae88f4e378d421e12b1",
    measurementId: "G-E4VVHTRWHF"


};

firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore=firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;
