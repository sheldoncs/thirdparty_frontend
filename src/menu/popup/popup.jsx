import React from "react";
import classes from "./Popup.module.css";

const Popup = ({ click }) => {
  return (
    <div className={classes.Popup}>
      <div className={classes.Item}>
        <div className="text-center" onClick={() => click("list")}>
          {"Operation List"}
        </div>
      </div>
    </div>
  );
};

export default Popup;
