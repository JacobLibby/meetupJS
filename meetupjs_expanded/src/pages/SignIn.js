import { useNavigate } from "react-router-dom";
import SignInForm from "../components/sign-in/SignInForm";
// import { getAuth, connectAuthEmulator, signInEmulator } from '/firebase/auth';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  useEmulator,
} from "firebase/auth";
// https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js
import FirebaseDB from "../Firebase.js";
import signInWithEmailAndPasswordHelper from "../Firebase.js";
import { useState } from "react";
import { useAuth } from "../store/auth-context.js";

function SignInPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const { signup } = useAuth()


  function signInHandler(signInData) {


signup(signInData.email, signInData.password)
  }

  // async function setupEmulators(auth) {
  //   const authUrl = "http://localhost:9099";
  //   await fetch(authUrl);
  //   connectAuthEmulator(auth, "http://localhost:9099", {
  //     disableWarnings: true,
  //   });
  //   // why? to make sure that emulator are loaded
  // }



  // const firebaseApp = initializeApp({
  //   apiKey: "AIzaSyCK5-tL826__YhJP_el-7p1XIJUYZe1TEM",
  //   authDomain: "react-getting-started-a9759.firebaseapp.com",
  //   databaseURL:
  //     "https://react-getting-started-a9759-default-rtdb.firebaseio.com",
  //   projectId: "react-getting-started-a9759",
  //   storageBucket: "react-getting-started-a9759.appspot.com",
  //   messagingSenderId: "920227935530",
  //   appId: "1:920227935530:web:478ac3e1d9c983565c9a53",
  // });

  // const auth = getAuth(firebaseApp);

  // setupEmulators(auth);

  // var invalidPassword = false;
  // var loginError = false;
  // const signInHandler = async (auth, emailInputRef, passwordInputRef) => {
  //   console.log("sign in handler");

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth, emailInputRef, passwordInputRef
  //     );
  //     console.log("after await");
  //     console.log(userCredential.user);
  //     setErrorMessage(false);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
  //       invalidPassword = true;
  //       loginError = true;
  //       console.log("INVALID PASSWORD");
  //       setErrorMessage(true);
  //     } else {
  //       loginError = true;
  //       setErrorMessage(true);
  //     }
  //   }
  // };

  // async function signInHandler(signInData) {
  //   //SIGN IN
  //   // .then(() => {
  //   //     navigate('/', { replace: true });
  //   // });
  //   console.log(signInData);
  //   // FirebaseDB.signInWithEmailAndPasswordHelper(signInData);
  //   // const auth = getAuth();

  //   const userCredential = await signInWithEmailAndPassword(auth, signInData.email, signInData.password);

  //   console.log(userCredential.user);
  // }

  // {errorMessage && <p> {errorMessage} </p>}
  return (
    <section>
      <h1>SIGN IN PAGE</h1>
      
      <SignInForm onSignIn={signInHandler} />
      {/* <SignInForm /> */}
    </section>
  );
}

export default SignInPage;
