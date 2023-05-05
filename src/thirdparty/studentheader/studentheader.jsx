import React, { useState, useEffect } from "react";
import classes from "./StudentHeader.module.css";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const StudentHeader = ({ search, operation, swap }) => {
  const [config, setConfig] = useState({
    elementConfig: { type: "text", placeholder: "Search" },
  });
  const [searchValue, setSearchValue] = useState("");
  const [label, setLabel] = useState("");
  const [header, setHeader] = useState([
    "ID",
    "Third Party",
    "First Name",
    "Last Name",
    "Email",
  ]);

  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (operation) {
      operation = operation.charAt(0).toUpperCase() + operation.slice(1);
      setLabel(operation);
    }
  }, [operation]);

  const searchHandler = (eve) => {
    setSearchValue(eve.target.value);
  };

  const displayHeader = () => {
    return header.map((item, index) => {
      return (
        <div key={index} className={classes.Titles}>
          {item}
        </div>
      );
    });
  };

  const handleButtonEvents = (v) => {
    if (v === "Search") {
      search(searchValue);
    } else if (v === "Swap") {
      swap();
    }
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: "5%" }}>
        <div className={classes.TopHeader}>
          <div className={classes.SearchContainer}>
            <div style={{ paddingRight: "10px", width: "450px" }}>
              <InputField
                textLabel={"Search ID"}
                elementConfig={config}
                changed={(eve) => searchHandler(eve)}
                CustomIcon={PersonSearchIcon}
              />
            </div>
            <div>
              <Button
                disabled={false}
                colorStyle="btn btn-danger"
                label="Search"
                width={"150"}
                height={"50"}
                margin={"1"}
                clicked={() => handleButtonEvents("Search")}
              />
            </div>
            <div>
              {operation !== "mass" && label ? (
                <Button
                  disabled={false}
                  colorStyle="btn btn-danger"
                  label={label}
                  width={"150"}
                  height={"50"}
                  margin={"1"}
                  clicked={() => handleButtonEvents(label)}
                />
              ) : null}
            </div>
            <div>
              <Button
                disabled={disableButton}
                colorStyle="btn btn-danger"
                label="Clear"
                width={"150"}
                height={"50"}
                margin={"1"}
                clicked={() => handleButtonEvents("Clear")}
              />
            </div>
          </div>
        </div>
        <div className={classes.StudentHeader}>{displayHeader()}</div>
      </div>
    </React.Fragment>
  );
};

export default StudentHeader;
