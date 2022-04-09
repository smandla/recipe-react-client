import React from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";
const Categories = (props) => {
  // const
  return (
    <div className={classes.categories}>
      <h2 className={classes.titles}>RECIPE by category</h2>
      <div className={classes.category}>
        {props.categoryArr.map((category) => {
          return (
            <span className={classes.item}>
              <Link to={`/categories/${category}`} className={classes.link}>
                <img
                  width="300"
                  height="300"
                  src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
                  className={classes.image}
                ></img>

                <h4 className={classes.title}>{category}</h4>
              </Link>
            </span>
          );
        })}
      </div>
      <h2 className={classes.titles}>Recipe by cuisine</h2>
      <div className={classes.category}>
        <div className={classes.item}>
          <Link to="/" className={classes.link}>
            <img
              width="300"
              height="300"
              src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
              className={classes.image}
            ></img>

            <h4 className={classes.title}>appetizer</h4>
          </Link>
        </div>
        <div className={classes.item}>
          {" "}
          <Link to="/" className={classes.link}>
            <img
              width="300"
              height="300"
              src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
              className={classes.image}
            ></img>

            <h4 className={classes.title}>breakfast</h4>
          </Link>
        </div>
        <div className={classes.item}>
          {" "}
          <Link to="/" className={classes.link}>
            <img
              width="300"
              height="300"
              src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
              className={classes.image}
            ></img>

            <h4 className={classes.title}>lunch</h4>
          </Link>
        </div>
        <div className={classes.item}>
          {" "}
          <Link to="/" className={classes.link}>
            <img
              width="300"
              height="300"
              src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
              className={classes.image}
            ></img>

            <h4 className={classes.title}>dinner</h4>
          </Link>
        </div>
        <div className={classes.item}>
          {" "}
          <Link to="/" className={classes.link}>
            <img
              width="300"
              height="300"
              src="https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg"
              className={classes.image}
            ></img>

            <h4 className={classes.title}>desserts</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
