import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthintication from "../firebase1/Firebase.int"
initializeAthintication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //--------------------------sign in with google ---------------------------
    const singnInWithGoogl = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    // ----------------------sign out --------------------------
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    // //------------------ objarved when user sater is changed ---------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        });
    }, [])

    return {
        singnInWithGoogl,
        logOut,
        user,
        onAuthStateChanged,
    }
}
export default useFirebase;