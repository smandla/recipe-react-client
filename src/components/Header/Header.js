import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../img/kav.png";
import icons from "../../img/icons.svg";
const Header = (props) => {
  // const [userInput, setUserInput] = useState("");
  // const [searched, setSearched] = useState("");
  // const inputHandler = (e) => {
  //   console.log(e.target.value);
  //   setUserInput(e.target.value);
  // };
  // useEffect(() => {});
  return (
    <header>
      <img src={logo} alt="Logo" className={classes.header__logo} />
      <div className={classes.column}>
        <div className={classes.row}>
          <form className={classes.search} onSubmit={props.onSubmitHandler}>
            <input
              type="text"
              className={classes.search__field}
              placeholder="Search over 1,000,000 recipes..."
              onChange={props.onInputHandler}
            />
            <button className={classes.btn}>
              <svg className={classes.search__icon}>
                <use xlinkHref={`${icons}#icon-search`}></use>
              </svg>
            </button>
          </form>
        </div>
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
                  <Link to="/categories" className={classes.link}>
                    <button className={classes.nav__btn}>
                      {/* <svg className={classes.nav__icon}>
                <use xlinkHref={`${icons}#icon-bookmark`}></use>
              </svg> */}
                      <span>Browse Recipes</span>
                    </button>
                  </Link>
                </div>
                <div className={classes.bookmarks}>
                  <div className={classes.message}>
                    <div className={classes.recipes_filter}>
                      <div className={classes.recipe_category}>
                        <h2>Recipes By Category</h2>
                        <ul className={classes.diamond}>
                          <li>Breakfast</li>
                          <li>Lunch</li>
                          <li>Dinner</li>
                          <li>Appetizers</li>
                          <li>Desserts</li>
                        </ul>
                      </div>
                      <div className={classes.recipe_category}>
                        {" "}
                        <h2>Recipes By Cuisine</h2>
                        <ul className={classes.diamond}>
                          <li>Indian</li>
                          <li>American</li>
                          <li>Thai</li>
                          <li>Italian</li>
                          <li>Chinese</li>
                          <li>Burmese</li>
                        </ul>
                      </div>
                      <div className={classes.recipe_category}>
                        {" "}
                        <h2>Recipes By Holiday</h2>
                        <ul className={classes.diamond}>
                          <li>Diwali</li>
                          <li>Holi</li>
                          <li>Christmas</li>
                          <li>Halloween</li>
                          <li>Thanksgiving</li>
                          <li>Super Bowl</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={classes.nav__item}>
                <div className={classes.bookmark}>
                  <button className={classes.nav__btn}>
                    {/* <svg className={classes.nav__icon}>
                <use xlinkHref={`${icons}#icon-bookmark`}></use>
              </svg> */}
                    <span>Bookmarks</span>
                  </button>
                </div>
                <div className={classes.bookmarks}>
                  <ul className={classes.bookmarks__list}>
                    <div className={classes.message}>
                      <div>
                        <svg className={classes.nav__icon}>
                          <use xlinkHref={`${icons}#icon-smile`}></use>
                        </svg>
                      </div>
                      <p>
                        No bookmarks yet. Find a nice recipe and bookmark it :)
                      </p>
                    </div>
                  </ul>
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
    </header>
  );
};

export default Header;
