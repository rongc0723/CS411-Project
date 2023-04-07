import { useContext, createContext, useEffect, useState } from "react";
import {auth} from '../firebase/config';
import { 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
      return () => {
        unsub()
      }
    }, [])

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }



    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}