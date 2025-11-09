import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
  
   const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   }


   const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
   }


    return <AuthContext value={authInfo}>{children} </AuthContext>
};

export default AuthProvider;