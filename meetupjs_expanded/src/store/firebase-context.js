import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  useEmulator,
} from "firebase/auth";

const FirebaseContext = createContext({
  firebaseAppInfo: {
    apiKey: "AIzaSyCK5-tL826__YhJP_el-7p1XIJUYZe1TEM",
    authDomain: "react-getting-started-a9759.firebaseapp.com",
    databaseURL:
      "https://react-getting-started-a9759-default-rtdb.firebaseio.com",
    projectId: "react-getting-started-a9759",
    storageBucket: "react-getting-started-a9759.appspot.com",
    messagingSenderId: "920227935530",
    appId: "1:920227935530:web:478ac3e1d9c983565c9a53",
  },
});

export function FirebaseContextProvider(props) {
//   async function setupEmulators(auth) {
//     const authUrl = "http://localhost:9099";
//     await fetch(authUrl);
//     connectAuthEmulator(auth, "http://localhost:9099", {
//       disableWarnings: true,
//     });
//     // why? to make sure that emulator are loaded
//   }

//   function initFirebaseApp(firebaseAppInfo) {
//     const firebaseApp = initializeApp(firebaseAppInfo);
//     return firebaseApp;
//   }

 
}

// const auth = getAuth(firebaseApp);

// setupEmulators(auth);
export default FirebaseContext;
