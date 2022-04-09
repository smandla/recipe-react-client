import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Preview.module.scss";
import avatar from "../../img/icons.svg#icon-user";

const PreviewResult = (props) => {
  // useEffect(() => {});
  // console.log(props.recipe);
  // const dispatch = useDispatch();
  const onSelectHandler = () => {
    // console.log(props.recipe);
    props.setSelected(props.recipe);
    props.setIsSelected(true);
  };
  return (
    <li className={classes.preview} onClick={onSelectHandler}>
      <Link className={classes.preview__link} to={`/${props.recipe._id}`}>
        <figure className={classes.preview__fig}>
          <img src={props.recipe.img} alt="Test" />
        </figure>
        <div className={classes.preview__data}>
          <h4 className={classes.preview__title}>{props.recipe.title}</h4>
          <p className={classes.preview__publisher}>{props.recipe.publisher}</p>
          <div className={classes.preview__user__generated}>
            <svg>
              <use href={avatar}></use>
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PreviewResult;
