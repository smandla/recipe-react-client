import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import classes from "./App.module.scss";
import logo from "./img/logo.png";
import avatar from "./img/icons.svg#icons-user";
import arrowLeft from "./img/icons.svg#icon-arrow-left";
import arrowRight from "./img/icons.svg#icon-arrow-right";
import Preview from "./components/Preview/Preview";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Login from "./components/Login/Login";
import Diamond from "./components/UI/DiamondBullet/DiamondBullet";
import axios from "axios";
import { DUMMY_DATA } from "./data/data";
import Categories from "./components/Categories/Categories";
import Category from "./components/Categories/Category";
// import { getRecipes } from "./actions/recipes";
function App() {
  const [currentID, setCurrentID] = useState(0);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecipes());
  // }, [currentID, dispatch]);

  const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(DUMMY_DATA);
  // }, []);
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [searched, setSearched] = useState("");
  const [selected, setSelected] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [addingRecipe, setAddingRecipe] = useState(false);
  const [login, setLogin] = useState(false);
  const [categoryArr, setCategoryArr] = useState([]); // const [filteredSearch, setFilteredSearch] = useState([]);
  // const inputHandler = (e) => {
  //   console.log(e.target.value);
  //   setUserInput(e.target.value);
  // };
  const arr = [
    "vegetarian",
    "non-vegetarian",
    "breakfast",
    "lunch",
    "dinner",
    "desserts",
    "pescatarian",
    "appetizers",
  ];
  useEffect(() => {
    setCategoryArr(arr);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput != "") {
      setSearched(userInput);
    }
    setUserInput("");
  };
  useEffect(() => {
    axios
      .get("https://guarded-hamlet-19105.herokuapp.com/recipes")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  console.log(data);
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setUserInput(e.target.value.toLowerCase());
  };
  const filteredSearch = data.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searched);
  });
  console.log("searched", searched);
  console.log(selected);
  const addRecipeHandler = (recipe) => {
    setData((prevRecipes) => {
      return [recipe, ...prevRecipes];
    });
  };
  console.log(data);
  return (
    <>
      {/* <div class="grid-container"> */}
      <div className={classes.header}>
        <Header
          onInputHandler={inputHandler}
          onSubmitHandler={submitHandler}
          setAddingRecipe={setAddingRecipe}
          addingRecipe={addingRecipe}
          setLogin={setLogin}
          categoryArr={categoryArr}
          open={open}
          setOpen={setOpen}
        />
      </div>
      {/* <article>
        <Recipe data={selected} isSelected={isSelected} />
      </article> */}
      <Routes>
        <Route
          path="/"
          element={
            <aside>
              <Preview
                setCurrentID={setCurrentID}
                data={searched ? filteredSearch : data}
                searched={searched}
                setSelected={setSelected}
                setIsSelected={setIsSelected}
              />
            </aside>
          }
        ></Route>
        <Route
          path="/create"
          element={
            addingRecipe ? (
              <AddRecipe
                setAddingRecipe={setAddingRecipe}
                onAddRecipe={addRecipeHandler}
                categoryArr={categoryArr}
              />
            ) : (
              ""
            )
          }
        ></Route>
        <Route
          path="/:_id"
          element={
            <>
              <aside>
                <Preview
                  setCurrentID={setCurrentID}
                  data={searched ? filteredSearch : data}
                  searched={searched}
                  setSelected={setSelected}
                  setIsSelected={setIsSelected}
                />
              </aside>
              <article>
                <Recipe data={selected} isSelected={isSelected} />
              </article>
            </>
          }
        ></Route>
        <Route
          path="/categories"
          element={<Categories categoryArr={categoryArr} />}
        />
        <Route path="/categories/:_id" element={<Category />} />
      </Routes>
      {/* </div> */}
      {/* 
      <div className={classes.preview}>
        <Preview
          setCurrentID={setCurrentID}
          data={searched ? filteredSearch : data}
          searched={searched}
          setSelected={setSelected}
          setIsSelected={setIsSelected}
        />
        <div className={classes.recipe}>
          <Recipe data={selected} isSelected={isSelected} />
        </div>
      </div> */}
      {login ? <Login setLogin={setLogin} /> : ""}
      {/* </div> */}
    </>
  );
}

export default App;
