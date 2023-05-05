import React, { useState } from "react";
import InputField from "../components/InputField";
import classes from "./Details.module.css";

const Details = ({ show, close, data, addStudent }) => {
  const [detailsForm, setDetailsForm] = useState({
    studentId: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Student Id" },
      label: "Student Id",
      elementName: "elementName",
      value: "",
      validation: { required: true },
    },
    thirdPartyId: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "ThirdParty Id" },
      label: "Third Party Id",
      elementName: "thirdPartyId",
      value: "",
      validation: { required: true },
    },
    firstName: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "First Name" },
      label: "First Name",
      elementName: "firstName",
      value: "",
      validation: { required: true },
    },
    lastName: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Last Name" },
      label: "Last Name",
      elementName: "lastName",
      value: "",
      validation: { required: true },
    },
    email: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Email" },
      label: "Email",
      elementName: "email",
      value: "",
      validation: { required: true },
    },
  });

  let saveClasses = [classes.details, classes.close];
  if (show) {
    saveClasses = [classes.details, classes.open];
  }

  const changeHandler = (e) => {};
  const setupForm = () => {
    return Object.keys(detailsForm).map((v, i) => {
      detailsForm[v].value = data ? data[v] : null;
      return (
        <div key={i} className={classes.textStyle}>
          <InputField
            textLabel={detailsForm[v].label}
            changed={(e) => changeHandler(e)}
            elementConfig={detailsForm[v].elementConfig}
            value={data ? data[v] : null}
          />
        </div>
      );
    });
  };
  //
  return (
    <React.Fragment>
      <div className={saveClasses.join(" ")}>
        <div className={classes.title}>
          <div className="text-center">{"THIRD PARTY DETAILS"}</div>
        </div>
        <div className={classes.closeButton} onClick={() => close()}>
          X
        </div>
        <div>{setupForm()}</div>
        <div className={classes.buttonContainer}>
          <div
            onClick={() => close()}
            className={[classes.button, "btn", "btn-dark"].join(" ")}
          >
            {"Close"}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
