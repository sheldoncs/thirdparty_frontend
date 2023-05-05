import React from "react";
import classes from "./ApplicationHeader.module.css";
import Person from "../assets/person.png";
import Menu from "../menu/hamburger";

const Header = ({ toggle, click }) => {
  return (
    <React.Fragment>
      <div className={classes.Header}>
        <div className={classes.MenuContainer}>
          <Menu toggle={toggle} click={click} />
        </div>
        <div className={classes.PersonContainer}>
          <img src={Person} style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
