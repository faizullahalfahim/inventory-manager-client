import React, {  useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import {auth} from '../firebase/firebase.config';
import { useEffect } from 'react';
import { AuthContext } from './AuthContext';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   
  
   const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }
   const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }
   const signInWithPopupFunc = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
   }
   const signOutFunc = () => {
    setLoading(true);
    return signOut(auth);
   }
   const updateUserProfileFunc = (profile) => {
    
    return updateProfile(auth.currentUser, profile);
   }
   const sentPasswordResetEmailFunc = (email) => {
    return sendPasswordResetEmail (auth, email);
   }
   useEffect ( () => {
    const unsubscribe = onAuthStateChanged (auth, currentUser => {
        console.log ('Auth state changed', currentUser);
        setUser (currentUser);
        setLoading (false);
    });
    return () => {
        unsubscribe();
    }
   }, []);


   const authInfo = {
    user,
    loading,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    signOutFunc,
    updateUserProfileFunc,
    sentPasswordResetEmailFunc
   }


    return <AuthContext value={authInfo}>{children} </AuthContext>
};

export default AuthProvider;