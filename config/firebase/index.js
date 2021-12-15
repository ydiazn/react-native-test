import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import { emulatorConfig} from "./defaults.js";

// Your web app's Firebase configuration

const { environment, firebase } = Constants.manifest.extra;
const { config } = firebase;

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);

if(environment === 'development' ) {
  const { emulators=emulatorConfig } = firebase;
  const { firestore, authentication } = emulators;
  console.log('Using firebase emulators');
  console.log(authentication);

  //Firestore
  connectFirestoreEmulator(db, firestore.host, firestore.port);

  //Auth
  const scheme = `http://${authentication.host}:${authentication.port}`;
  connectAuthEmulator(auth, scheme);
}

export { auth, db }

