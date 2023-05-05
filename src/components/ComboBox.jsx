import React from "react";

import classes from "./Component.module.css";

const ComboBox = ({ selectOptions, changed }) => {
  return (
    <div>
      <select onChange={changed} className={classes.ComboBox}>
        {selectOptions.map((option) => {
          return (
            <option
              key={option.facultyCode}
              value={option.facultyCode}
              {...option.selected}
            >
              {option.faculty}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ComboBox;
