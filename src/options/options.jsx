import React, { useState } from "react";
import Radio from "../components/Radio";
import classes from "./Options.module.css";

const Options = ({ selectOption }) => {
  const [options, setOptions] = useState({
    swap: {
      elementType: "radio",
      visibility: "visible",
      elementConfig: { type: "radio" },
      elementName: "TPOptions",
      value: "swap",
      text: "Swap",
      validation: {
        required: true,
        minLength: 8,
      },
    },
    delete: {
      elementType: "radio",
      visibility: "visible",
      elementConfig: { type: "radio" },
      elementName: "TPOptions",
      value: "delete",
      text: "Delete",
      validation: {
        required: true,
        minLength: 8,
      },
    },
    massupdate: {
      elementType: "radio",
      visibility: "visible",
      elementConfig: { type: "radio" },
      elementName: "TPOptions",
      value: "mass",
      text: "Mass Update",
      validation: {
        required: true,
        minLength: 8,
      },
    },
  });

  const [operation, setOperation] = useState("");

  const handleChange = (event) => {
    setOperation(event.target.value);
    selectOption(event.target.value);
  };

  const setupOptions = () => {
    return Object.keys(options).map((item, index) => {
      return (
        <div key={index} style={{ margin: "10px" }}>
          <Radio
            value={options[item].value}
            name={options[item].elementName}
            label={options[item].text}
            changed={(eve) => handleChange(eve)}
          />
        </div>
      );
    });
  };

  return <div className={classes.Options}>{setupOptions()}</div>;
};

export default Options;
