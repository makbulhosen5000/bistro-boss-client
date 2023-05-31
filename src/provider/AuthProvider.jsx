import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // User State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //get and set token
      if(currentUser){
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
        .then(data=>{
          //console.log(data.data.token);
          localStorage.setItem('access-token',data.data.token);
          setLoading(false);
        })
      }else{
        localStorage.removeItem('access-token');
      }

    });
    return () => {
      return unsubscribe;
    };
  }, []);

  //update userprofile
  const updateUserProfile=(name,photo)=>{
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
  }

  // user Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    signInWithGoogle
  };
  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
