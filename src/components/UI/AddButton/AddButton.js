import React from "react";

const AddButton = () => {
  return (
    <input
      type="button"
      value="+"
      className={classes.add}
      onClick={addDirectionHandler}
    />
  );
};

export default AddButton;
