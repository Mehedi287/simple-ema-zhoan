import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAthintication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAthintication;