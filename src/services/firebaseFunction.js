import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7y4BjvX49VKeGVJ29mIVKYnh7yhlGQ-c",
    authDomain: "sih-hos.firebaseapp.com",
    projectId: "sih-hos",
    storageBucket: "sih-hos.appspot.com",
    messagingSenderId: "883213105723",
    appId: "1:883213105723:web:6d61f0c9ec63cfb75eba1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createPatientAccount = async (email, password) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log(`error occured : ${error}`)
    }
}

export const patientSignIn = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log(`error occured : ${error}`)
    }
}