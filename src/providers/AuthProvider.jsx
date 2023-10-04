import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);    // user login thaka obosthai o page reload dile firebase a user k khujte je somoy lage sei somoy a router user login nai dhore nei.sei somossa dur korte loading state babohar kora hoi

    const createUser =(email,password)=>{
        setLoading(true);   //setUser state a user set howar age sobgulo function ei loding true thakbe
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('User in auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);  //jokhon user firebase theke check hoiye set hoiye jabe tokhon setLoading k false kore dite hobe
        })
        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo ={user,createUser,logOut,login,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;