import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const sendContact = async (data: { name: string, phone: string, email: string, message: string }) => {
    await addDoc(collection(db, "contacts"), data);
}

export { sendContact };