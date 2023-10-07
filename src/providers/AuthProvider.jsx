import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from '../FirebseConfig/firebase-config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [galleryImage, setGalleryImage] = useState([]);


    //for Gallery Image Data
    useEffect(()=>{
        const galleryImageData = async () =>{
            try{
                const res = await fetch ('http://localhost:5000/galleryImage')
                if(!res.ok){
                    throw new Error('Network response was not ok');
                }
                const imageData = await res.json();
                setGalleryImage(imageData);
                setLoading(false);
            }
            catch {
                error => {
                    console.log(error);
                    setLoading(false);
                }
            }
        }
        galleryImageData();
    },[])

    
   //for log in::
    const signIn = (email, password) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    //create user::
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser (currentUser);
            console.log('current user in auth provider', currentUser);

        })
    })

    const authInfo = {
        user,
        loading,
        galleryImage,
        signIn,
        createUser  
    }

   

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;