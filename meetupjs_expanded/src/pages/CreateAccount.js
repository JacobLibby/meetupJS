import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../components/sign-in/CreateAccountForm";

function CreateAccountPage() {
  const navigate = useNavigate();
  
  //   function signInHandler(signInData) {
  //     fetch(
  //       "https://react-getting-started-a9759-default-rtdb.firebaseio.com/meetups.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(meetupData),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then(() => {
  //         navigate('/', { replace: true });
  //     });
  //   }
  return (
    <section>
      <h1>CREATE ACCOUNT PAGE</h1>
      {/* <CreateAccountForm onSignIn={signInHandler} /> */}
      <CreateAccountForm />
    </section>
  );
}

export default CreateAccountPage;
