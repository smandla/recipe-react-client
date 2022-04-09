import React from "react";
import classes from "./Login.module.scss";
import logo from "../../img/loginlogo.png";
import icons from "../../img/icons.svg";
const Login = (props) => {
  const onHideHandler = () => {
    props.setLogin(false);
  };
  return (
    <>
      <div className={classes.overlay}></div>
      <form className={classes.form}>
        <img src={logo} alt="Logo" className={classes.logo} />

        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className={classes.btn}>Log In</button>
        <div className={classes.links}>
          <span>
            <a href="#">Forgot your password?</a>
          </span>

          <span>|</span>
          <span>
            <a href="#">Create Account</a>
          </span>
        </div>
      </form>
      <div className={classes.exitt}>
        <button className={classes.exit} onClick={onHideHandler}>
          <svg>
            <use xlinkHref={`${icons}#icon-exit`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Login;
