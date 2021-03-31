import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const applicationFrameWorkInitialized = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const loggedUser = {};
        loggedUser.email =  res.user.email
        loggedUser.photoURL = res.user.photoURL
        return loggedUser
    })
    .catch(err => {
        console.log(err)
    })
}