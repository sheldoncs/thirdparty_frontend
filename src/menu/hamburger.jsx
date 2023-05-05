import React from "react";
import BurgerBar from "./burgerbar/burgerbar";
import classes from "./Menu.module.css";

const Menu = ({ toggle, click }) => {
  return (
    <div className={classes.Menu} onClick={() => click(!toggle)}>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
    </div>
  );
};

export default Menu;
