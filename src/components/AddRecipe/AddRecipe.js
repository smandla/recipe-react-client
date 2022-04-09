import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./AddRecipe.module.scss";
import icons from "../../img/icons.svg";
import axios from "axios";
const AddRecipe = (props) => {
  const units = [
    "tsp",
    "tbsp",
    "fl oz",
    "cup",
    "pint",
    "quart",
    "g (gallon)",
    "ml",
    "l",
    "dl",
    "lb",
    "oz",
    "mg",
    "g (gram)",
    "kg",
    "mm",
    "cm",
    "m",
    "in",
  ];
  const onHideHandler = () => {
    props.setAddingRecipe(false);
  };

  const [error, setError] = useState();
  const [enteredName, setEnteredName] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredCuisine, setEnteredCuisine] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [enteredServings, setEnteredServings] = useState("");
  const [enteredCookingTime, setEnteredCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([
    { value: null, unit: null, item: null },
  ]);
  const [directions, setDirections] = useState([{ value: null }]);
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [ingVal, setIngVal] = useState(0);
  const [ingUnit, setIngUnit] = useState("");
  const addIngredientHandler = () => {
    const val = [...ingredients];
    val.push({ value: null, unit: null, item: null });
    console.log(val);
    setIngredients(val);
  };
  const onIngredientValChangeHandler = (i, e) => {
    const val = [...ingredients];
    val[i].value = e.target.value;
    setIngredients(val);
  };
  const onIngredientUnitChangeHandler = (i, e) => {
    console.log(e.target.value);
    const val = [...ingredients];
    val[i].unit = e.target.value;
    // console.log(val);
    setIngredients(val);
  };
  const onIngredientItemChangeHandler = (i, e) => {
    console.log(e.target.value);
    const val = [...ingredients];
    val[i].item = e.target.value;
    // console.log(val);
    setIngredients(val);
  };
  const addDirectionHandler = () => {
    const val = [...directions];
    val.push({ value: null });
    setDirections(val);
  };
  const onDirectionChangeHandler = (i, e) => {
    const val = [...directions];
    val[i].value = e.target.value;
    setDirections(val);
  };

  const onNameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    // console.log(.target.value);
  };
  const onCuisineChangeHandler = (e) => {
    setEnteredCuisine(e.target.value);
    // console.log(.target.value);
  };
  const onCategorySelectHandler = (e) => {
    setSelectedCategory(e.target.outerText);
    // console.log(e.target.outerText);
  };

  const onImageURLChangeHandler = (e) => {
    setEnteredImageURL(e.target.value);
  };
  console.log(ingredients);
  const onServingsChangeHandler = (e) => {
    setEnteredServings(e.target.value);
    // console.log(.target.value);
  };
  const onCookingTimeChangeHandler = (e) => {
    setEnteredCookingTime(e.target.value);
    // console.log(.target.value);
  };
  const onAuthorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
    // console.log(.target.value);
  };
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(userData);
    console.log(userData);
  };
  const addRecipeHandler = (e) => {
    e.preventDefault();
    //do some validation
    if (
      enteredName === "" ||
      enteredAuthor === "" ||
      enteredImageURL === "" ||
      enteredServings === "" ||
      enteredCookingTime === "" ||
      selectedCategory === "" ||
      ingredients === [] ||
      directions === []
    ) {
      alert("Please fill out details!");
      return;
    }
    const newRecipeData = {
      title: enteredName,
      publisher: enteredAuthor,
      img: enteredImageURL,
      ingredients: ingredients,
      servings: enteredServings,
      cookingTime: enteredCookingTime,
      cuisine: enteredCuisine,
      category: selectedCategory,
      directions: directions,
    };
    console.log(newRecipeData);
    axios
      .post("https://guarded-hamlet-19105.herokuapp.com/recipes", newRecipeData)
      .then((res) => console.log(res.data));
    saveUserDataHandler(newRecipeData);
    setEnteredName("");
    setEnteredAuthor("");
    setEnteredCuisine("");
    setEnteredServings("");
    setEnteredCookingTime("");
    setIngredients([{ value: null }]);
    setDirections([{ value: null }]);
    setEnteredImageURL("");
    onHideHandler();
  };
  // console.log(userData);
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <button className={classes.exit}>
              <svg>
                <use xlinkHref={`${icons}#icon-exit`}></use>
              </svg>
            </button>
          </Link>
        </div>
        <div className={classes.card_form}>
          <form className={classes.signup} onSubmit={addRecipeHandler}>
            <div className={classes.form_title}>Add Recipe</div>
            <div className={classes.form_body}>
              <div className={classes.row}>
                <input
                  type="text"
                  placeholder="Recipe Title*"
                  onChange={onNameChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Author*"
                  onChange={onAuthorChangeHandler}
                />
              </div>
              <div className={classes.row}>
                <input
                  type="text"
                  placeholder="Image URL*"
                  onChange={onImageURLChangeHandler}
                />
              </div>

              <div className={classes.row}>
                <input
                  type="text"
                  placeholder="Cuisine*"
                  onChange={onCuisineChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Servings*"
                  onChange={onServingsChangeHandler}
                />
                <input
                  type="text"
                  placeholder="Cooking Time*"
                  onChange={onCookingTimeChangeHandler}
                />
              </div>

              <div className={classes.row}>
                {/* <input type="text" onChange={onServingsChangeHandler} /> */}
                <div className={classes.directions}>
                  <label>Ingredients:</label>
                  {ingredients.map((ingredient, i) => {
                    return (
                      <span className={classes.dirspan}>
                        <label className={classes.dirlabel}>{i + 1}.</label>
                        <input
                          type="text"
                          placeholder="Quantity*"
                          value={ingredient.value || ""}
                          onChange={(e) => onIngredientValChangeHandler(i, e)}
                        />

                        <input
                          type="search"
                          placeholder="Unit *"
                          // value={ingredient.unit || ""}
                          list="text_editors"
                          onChange={(e) => onIngredientUnitChangeHandler(i, e)}
                        />

                        <datalist id="text_editors">
                          <select multiple size="1">
                            {units.map((a) => {
                              return <option value={a}>{a}</option>;
                            })}
                          </select>
                        </datalist>
                        <input
                          type="text"
                          placeholder="Ingredient*"
                          value={ingredient.item || ""}
                          onChange={(e) => onIngredientItemChangeHandler(i, e)}
                        />
                      </span>
                    );
                  })}

                  <input
                    type="button"
                    value="+"
                    className={classes.add}
                    onClick={addIngredientHandler}
                  />
                </div>
              </div>
              <div className={classes.rows}>
                {/* <input type="text" onChange={onServingsChangeHandler} /> */}

                <label>Directions:</label>
                {directions.map((direction, i) => {
                  return (
                    <span className={classes.dirspan}>
                      <label className={classes.dirlabel}>{i + 1}.</label>
                      <input
                        type="text"
                        placeholder={`Recipe Step # ${i + 1} `}
                        value={direction.value || ""}
                        onChange={(e) => onDirectionChangeHandler(i, e)}
                      />
                    </span>
                  );
                })}

                <input
                  type="button"
                  value="+"
                  className={classes.add}
                  onClick={addDirectionHandler}
                />
              </div>
              <div className={classes.row}>
                <div className={classes.category}>
                  <label> Category: </label>
                  {props.categoryArr.map((category) => {
                    return (
                      <button
                        className={classes.categoryButton}
                        type="button"
                        onClick={onCategorySelectHandler}
                      >
                        {category}
                      </button>
                    );
                  })}
                  <input
                    type="button"
                    value="+"
                    className={classes.categoryButton}
                    // onClick={addIngredientHandler}
                  />
                </div>
              </div>
            </div>

            <div className={classes.rule}></div>
            <div className={classes.form_footer}>
              <button type="submit" className={classes.submitButton}>
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* // <div className={classes.overlay}> */}

      {/* <div className={classes.container}>
        <div>
          <Link to="/">
            <button className={classes.exit}>
              <svg>
                <use xlinkHref={`${icons}#icon-exit`}></use>
              </svg>
            </button>
          </Link>
        </div>

        <div className={classes.details_one}>
          <h4 className={classes.title}>Add Recipe</h4>
          <form className={classes.form} onSubmit={addRecipeHandler}>
            <div className={classes.name}>
              <label> Title: </label>
              <input type="text" onChange={onNameChangeHandler} />
            </div>
            <div className={classes.name}>
              <label> Author: </label>
              <input type="text" onChange={onAuthorChangeHandler} />
            </div>
            <div className={classes.name}>
              <label> Image URL: </label>
              <input type="text" onChange={onImageURLChangeHandler} />
            </div>
            <div className={classes.cuisine}>
              <label> Cuisine: </label>
              <input type="text" onChange={onCuisineChangeHandler} />
            </div>

            <div className={classes.category}>
              <label> Category: </label>
              <span>
                {props.categoryArr.map((category) => {
                  return (
                    <button
                      className={classes.categoryButton}
                      type="button"
                      onClick={onCategorySelectHandler}
                    >
                      {category}
                    </button>
                  );
                })}
              </span>
              <input
                type="button"
                value="+"
                className={classes.categoryButton}
                onClick={addIngredientHandler}
              />
            </div>
            <div className={classes.extrainfo}>
              <span className={classes.extraspan}>
                <label> Servings: </label>
                <input type="text" onChange={onServingsChangeHandler} />
              </span>
              <span className={classes.extraspan}>
                <label> Cooking Time: </label>
                <input type="text" onChange={onCookingTimeChangeHandler} />
              </span>
            </div>
            <div className={classes.directions}>
              <label>Ingredients:</label>
              {ingredients.map((ingredient, i) => {
                return (
                  <span className={classes.dirspan}>
                    <label className={classes.dirlabel}>{i + 1}.</label>
                    <input
                      type="text"
                      value={ingredient.value || ""}
                      onChange={(e) => onIngredientValChangeHandler(i, e)}
                    />

                    <input
                      type="search"
                      // value={ingredient.unit || ""}
                      list="text_editors"
                      onChange={(e) => onIngredientUnitChangeHandler(i, e)}
                    />

                    <datalist id="text_editors">
                      <select multiple size="1">
                        {units.map((a) => {
                          return <option value={a}>{a}</option>;
                        })}
                      </select>
                    </datalist>
                    <input
                      type="text"
                      value={ingredient.item || ""}
                      onChange={(e) => onIngredientItemChangeHandler(i, e)}
                    />
                  </span>
                );
              })}

              <input
                type="button"
                value="+"
                className={classes.add}
                onClick={addIngredientHandler}
              />
            </div>
            <div className={classes.directions}>
              <label>Directions:</label>
              {directions.map((direction, i) => {
                return (
                  <span className={classes.dirspan}>
                    <label className={classes.dirlabel}>{i + 1}.</label>
                    <input
                      type="text"
                      value={direction.value || ""}
                      onChange={(e) => onDirectionChangeHandler(i, e)}
                    />
                  </span>
                );
              })}

              <input
                type="button"
                value="+"
                className={classes.add}
                onClick={addDirectionHandler}
              />
            </div>
            <div className={classes.center}>
              <button type="search" className={classes.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* </div> */}
    </div>
  );
};

export default AddRecipe;
