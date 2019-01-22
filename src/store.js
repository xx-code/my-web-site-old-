import firebase from 'firebase';
import 'firebase/firestore';
import { createStore, combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

const fbConfig = {
    apiKey: "AIzaSyBhnJxEVKWOl_WvaBj4JFT8ZQiEK86BegE",
    authDomain: "my-web-site-5ed6d.firebaseapp.com",
    databaseURL: "https://my-web-site-5ed6d.firebaseio.com",
    projectId: "my-web-site-5ed6d",
    storageBucket: "my-web-site-5ed6d.appspot.com",
    messagingSenderId: "1098424066828"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore()

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// Create store with reducers and initial state
const initialState = {}
export const store = createStore(rootReducer, initialState)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}