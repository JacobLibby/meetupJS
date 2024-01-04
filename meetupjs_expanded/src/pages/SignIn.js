import { useNavigate } from "react-router-dom";
import SignInForm from "../components/sign-in/SignInForm";
// import { getAuth, connectAuthEmulator, signInEmulator } from '/firebase/auth';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";
// https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js
import FirebaseDB from "../Firebase.js";
import signInWithEmailAndPasswordHelper from "../Firebase.js";

function SignInPage() {
  const navigate = useNavigate();

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCK5-tL826__YhJP_el-7p1XIJUYZe1TEM",
    authDomain: "react-getting-started-a9759.firebaseapp.com",
    databaseURL:
      "https://react-getting-started-a9759-default-rtdb.firebaseio.com",
    projectId: "react-getting-started-a9759",
    storageBucket: "react-getting-started-a9759.appspot.com",
    messagingSenderId: "920227935530",
    appId: "1:920227935530:web:478ac3e1d9c983565c9a53",
  });

  const auth = getAuth(firebaseApp);
  connectAuthEmulator(auth, "http://localhost:9099");

  const signInHandler = async (signInData) => {
    console.log("sign in handler");
    const userCredential = await signInWithEmailAndPassword(
      auth,
      signInData.email,
      signInData.password
    );
    console.log("after await");
    console.log(userCredential.user);
  };

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
  return (
    <section>
      <h1>SIGN IN PAGE</h1>
      <SignInForm onSignIn={signInHandler} />
      {/* <SignInForm /> */}
    </section>
  );
}

export default SignInPage;
