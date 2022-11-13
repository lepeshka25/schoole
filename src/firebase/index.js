import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, GoogleAuthProvider, signOut} from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAzZVipGYtvKVO27rf2HELDM79ZBrGydVk",
	authDomain: "schoole-b8715.firebaseapp.com",
	projectId: "schoole-b8715",
	storageBucket: "schoole-b8715.appspot.com",
	messagingSenderId: "546734154124",
	appId: "1:546734154124:web:627fbe33c15b723c8036a9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const GoogleAuth = () => {
	signInWithRedirect(auth, provider)
		.then(res => res)
}

export const Exit = () => {
	signOut(auth)
		.then(res => res)
}