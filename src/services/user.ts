import { auth, db } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

const signUpWithEmail = async ({email, password, displayName}: {
    email: string,
    password: string,
    displayName: string
}) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
        displayName
    })
}

const logInWithEmail = async ({email, password}: { email: string, password: string }) => {
    await signInWithEmailAndPassword(auth, email, password)
}

const logInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential) credential.accessToken;
}

const logOut = async () => {
    await signOut(auth);
}

const updateUser = async (displayName: string) => {
    const user = auth.currentUser;
    if(user) {
        await updateProfile(user, {displayName});
    }
}

const updateAddressBook = async (uid: string, addressBook: {
    companyName: string,
    address: string,
    apartment: string,
    phone: string,
    city: string
}) => {
    await setDoc(doc(db, "users", uid), addressBook);
}

export { signUpWithEmail, logInWithEmail, logInWithGoogle, logOut, updateUser, updateAddressBook }