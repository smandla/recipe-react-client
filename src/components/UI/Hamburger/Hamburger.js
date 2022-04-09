import React from "react";
import classes from "./Hamburger.module.scss";
const Hamburger = (props) => {
  return (
    <button
      className={classes.hamburger}
      onClick={() => {
        props.setOpen(!props.open);
      }}
    >
      <div className={classes.burger} />
      <div className={classes.burger} />
      <div className={classes.burger} />
    </button>
  );
};

export default Hamburger;
