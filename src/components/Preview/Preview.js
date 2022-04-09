import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import classes from "./Preview.module.scss";
import PreviewResult from "./PreviewResult.js";

const Preview = (props) => {
  // console.log(props.data);

  // const recipes = useSelector((state) => state.recipes);
  return (
    <ul className={classes.results}>
      {props.data.map((recipe) => {
        return (
          <PreviewResult
            recipe={recipe}
            setSelected={props.setSelected}
            setIsSelected={props.setIsSelected}
          />
        );
      })}
    </ul>
  );
};

export default Preview;
