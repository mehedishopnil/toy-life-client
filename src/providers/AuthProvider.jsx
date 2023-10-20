import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../FirebseConfig/firebase-config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [galleryImage, setGalleryImage] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [usersProduct, setUsersProduct] = useState([]);

    
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

    //Toy Products Data::
    useEffect(()=>{
        const toyProductsData = async ()=>{
            try{
                const res = await fetch ("http://localhost:5000/productsData")
                if(!res.ok) {
                    throw new Error("Network response was not OK")
                }
                const productsData = await res.json();
                setProductsData(productsData);
                setLoading(false);
            }
            catch{
                error =>{
                    console.log(error);
                    setLoading(false);
                }
            }
            
        }
        toyProductsData();
    },[])

    //Users Products Data::
    useEffect(()=>{
        const usersProduct = async ()=>{
            try{
                const res = await fetch("http://localhost:5000/usersProducts")
                if(!res.ok){
                    throw new Error ("Network response was not ok")
                }
                const usersProduct = await res.json();
                setUsersProduct(usersProduct);
                setLoading(false);
            }
            catch {
                error => {
                    console.log(error);
                    setLoading(false)
                }
            }
        }
        usersProduct();
    },[])



    //Toy Blog Data::
    useEffect(()=>{
        const blogData = async ()=>{
            try{
                const res = await fetch("http://localhost:5000/blogData")
                if(!res.ok){
                    throw new Error ("Network response was not ok")
                }
                const blogData = await res.json();
                setBlogData(blogData);
                setLoading(false);
            }
            catch {
                error => {
                    console.log(error);
                    setLoading(false);
                }
            }

        }
        blogData();
    },[])

    
   //for log in::
    const signIn = (email, password) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    //for logOut::
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //create user::
    const createUser = (email, password, displayName, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;

            return updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL,
            })
            .then(()=>{
                return user;
            })
            .catch(error =>{
                console.log(error);
                return user;
            })
            .catch(error=>{
                console.log(error);
            })
        })
        
    }

    //Create a function to set the user data::
    const setUserData = (userData) =>{
        setUser({
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL,
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            if(currentUser){
                setUserData(currentUser);
            }
            else{
                setUser(null);
            }
            setLoading(false);
        })
        return unsubscribe;
    },[]);

    const authInfo = {
        user,
        loading,
        galleryImage,
        productsData,
        blogData,
        usersProduct,
        signIn,
        logOut,
        createUser  
    }

   

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;