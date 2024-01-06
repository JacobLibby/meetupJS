import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./SignInForm.module.css";

function SignInForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const signInData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onSignIn(signInData);
  }
  const navigate = useNavigate();
  function createAccountHandler() {
    navigate("/create-account", { replace: true });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <a href="https://www.elevana.com/images/blogs/Shrug.jpg">
          Forgot My Password
        </a>
        <div className={classes.parent}>
          <div className={classes.child}>
            <div className={classes.actions}>
              <button>Sign In</button>
            </div>
          </div>
          <div className={classes.child}>
            <div className={classes.actions_secondary}>
              <button onClick={createAccountHandler}>Create An Account</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default SignInForm;
