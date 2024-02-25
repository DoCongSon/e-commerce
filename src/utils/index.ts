import { FirebaseError } from '@firebase/util';

const handleErrors = (error: unknown) => {
    if(!(error instanceof FirebaseError)) return 'Something went wrong';
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'Email already in use';
        case 'auth/invalid-email':
            return 'Invalid email';
        case 'auth/weak-password':
            return 'Password is too weak';
        case 'auth/user-not-found':
            return 'User not found';
        case 'auth/wrong-password':
            return 'Wrong password';
        case 'auth/missing-email':
            return 'Email is missing';
        case 'auth/missing-password':
            return 'Password is missing';
        case 'auth/invalid-display-name':
            return 'Invalid display name';
        default:
            return 'Something went wrong';
    }
};

export { handleErrors };