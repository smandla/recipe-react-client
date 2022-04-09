import React from "react";
import classes from "./Recipe.module.scss";
import icons from "../../img/icons.svg";
const Recipe = (props) => {
  // console.log(props.data.length);
  return (
    <>
      {props.isSelected ? (
        <div className={classes.recipe}>
          <figure className={classes.recipe__fig}>
            <img src={props.data.img} alt="" className={classes.recipe__img} />
            <h1 className={classes.recipe__title}>
              <span>{props.data.title}</span>
            </h1>
          </figure>
          <div className={classes.recipe__details}>
            <div className={classes.recipe__info}>
              <svg className={classes.recipe__info_icon}>
                <use xlinkHref={`${icons}#icon-clock`}></use>
              </svg>
              <span className={classes.recipe__info_data}>
                {props.data.cookingTime}
                {/* {props.recipe.readyInMinutes} */}
              </span>
              <span className={classes.recipe__info_text}> minutes</span>
            </div>
            <div className={classes.recipe__info}>
              <svg className={classes.recipe__info_icon}>
                <use xlinkHref={`${icons}#icon-users`}></use>
              </svg>
              {/* <SVGIcon className="recipe__info-icon" name="man" /> */}
              <span className={classes.recipe__info_data}>
                {props.data.servings}
                {/* {props.recipe.servings} */}
              </span>
              <span className={classes.recipe__info_text}> servings</span>

              <div className={classes.recipe__info_button}>
                <button className={classes.btn_tiny}>
                  <svg className={classes.recipe__info_icon}>
                    <use xlinkHref={`${icons}#icon-minus-circle`}></use>
                  </svg>
                </button>
                <button className={classes.btn_tiny} upgrade>
                  <svg className={classes.recipe__info_icon}>
                    <use xlinkHref={`${icons}#icon-plus-circle`}></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.recipe__ingredients}>
            <h2 className={classes.heading__2}>Recipe ingredients</h2>
            <ul className={classes.recipe__ingredient_list}>
              {props.data.ingredients.map((ingredient, i) => {
                return (
                  <li>
                    {ingredient.value} {ingredient.unit} {ingredient.item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={classes.recipe__directions}>
            <h2 className={classes.heading__2}>Directions</h2>
            <ul className={classes.recipe__direction_list}>
              {props.data.directions.map((step, i) => {
                return <li>{step.value}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <span className={classes.data_empty}>choose a recipe!</span>
      )}
    </>
  );
};

export default Recipe;
