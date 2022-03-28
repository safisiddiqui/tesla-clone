import React, { useState } from "react";
import "../Login/Login.styles.css";
import { Link, useHistory } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history("./teslaaccount");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlfor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlfor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={handleSignIn} />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="Create Account" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
