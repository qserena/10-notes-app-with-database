import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyChaAXhSyTefvxG7lUtEIWmGNL33USkWjE',
	authDomain: 'react-notes-b449a.firebaseapp.com',
	projectId: 'react-notes-b449a',
	storageBucket: 'react-notes-b449a.appspot.com',
	messagingSenderId: '371413424427',
	appId: '1:371413424427:web:3ff4092a96d94aa7120d6e',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')
