// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDeUo-uLcbhn6fCXET8vTi1ZNgzuZpDcRI",
	authDomain: "react-portfolio-deri.firebaseapp.com",
	projectId: "react-portfolio-deri",
	storageBucket: "react-portfolio-deri.appspot.com",
	messagingSenderId: "607062475810",
	appId: "1:607062475810:web:58c368ed47a85028deb67b",
	measurementId: "G-E6GELBX2JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
