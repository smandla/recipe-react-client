import React from "react";
import classes from "./MobileNav.module.scss";
import { Link } from "react-router-dom";
import icons from "../../../img/icons.svg";
const MobileNav = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        {" "}
        <div className={classes.column}>
          <div className={classes.row}>
            <form className={classes.search} onSubmit={props.onSubmitHandler}>
              <input
                type="text"
                className={classes.search__field}
                placeholder="Search over recipes..."
                // onChange={props.onInputHandler}
              />
              <button className={classes.btn}>
                <svg className={classes.search__icon}>
                  <use xlinkHref={`${icons}#icon-search`}></use>
                </svg>
              </button>
            </form>
            <div className={classes.row}>
              <nav className={classes.nav}>
                <ul className={classes.nav__list}>
                  <li className={classes.nav__item}>
                    <Link to="/create" className={classes.link}>
                      <button
                        className={classes.nav__btn}
                        onClick={() => props.setAddingRecipe(true)}
                      >
                        {/* <svg className={classes.nav__icon}>
                <use xlinkHref={`${icons}#icon-edit`}></use>
              </svg> */}
                        <span>Add recipe</span>
                      </button>
                    </Link>
                  </li>
                  <li className={classes.nav__item}>
                    <div className={classes.bookmark}>
                      {/* <Link to="/categories" className={classes.link}> */}
                      <button className={classes.nav__btn}>
                        {/* <svg className={classes.nav__icon}>
                <use xlinkHref={`${icons}#icon-bookmark`}></use>
              </svg> */}
                        <span>Browse Recipes</span>
                      </button>
                      {/* </Link> */}
                    </div>
                  </li>

                  <li className={classes.nav__item}>
                    <button
                      className={classes.nav__btn}
                      onClick={() => props.setLogin(true)}
                    >
                      {/* <svg className={classes.nav__icon}>
                <use xlinkHref={`${icons}#icon-login`}></use>
              </svg> */}
                      <span>Login</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
