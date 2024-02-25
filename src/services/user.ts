import { auth } from '../firebase';
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

export { signUpWithEmail, logInWithEmail, logInWithGoogle, logOut }