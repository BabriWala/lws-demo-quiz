import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from "react";
import app from '../firebase';



const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}



export default function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const subscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false)
        })
        return subscribe;
    },[])

    // signup function
    async function signup(email, password, username){
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password);
        // update profile
        await updateProfile(auth.currentUser,{
            displayName: username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
     }

    //  login function
     async function login(email, password){
        const auth = getAuth(app);
        return signInWithEmailAndPassword(auth, email, password);
        
     }

    //  logOut function
     function logOut(){
        const auth = getAuth(app);
        return signOut(auth);
     }

     const value = {
        currentUser,
        signup,
        login,
        logOut

     }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}