import React, { useState } from "react";
import classes from "./MassUpdates.module.css";
import Upload from "../assets/upload.PNG";
import Button from "../components/Button";
import Header from "../application/applicationheader";
import Footer from "../footer/footer";

const MassUpdates = ({ close }) => {
  const [disableButton, setDisableButton] = useState(true);

  const handleButtonEvent = (type) => {
    if (type === "close") {
      close(true);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.MassUpdates}>
        <div className={classes.Header}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "169px",
              margin: "auto",
              paddingTop: "20px",
            }}
          >
            <div>{"UPLOAD CENTER"}</div>
          </div>
        </div>
        <div className={classes.ButtonContainer}>
          <div
            style={{
              margin: "auto",
              width: "220px",
            }}
          >
            <Button
              disabled={disableButton}
              colorStyle="btn btn-danger"
              label="Process"
              width={"220"}
              height={"45"}
              margin={"5"}
              clicked={() => handleButtonEvent("process")}
            />
            <Button
              disabled={disableButton}
              colorStyle="btn btn-danger"
              label="Preview"
              width={"220"}
              height={"45"}
              margin={"5"}
              clicked={() => handleButtonEvent("preview")}
            />
            <Button
              disabled={false}
              colorStyle="btn btn-danger"
              label="Close"
              width={"220"}
              height={"45"}
              margin={"5"}
              clicked={() => handleButtonEvent("close")}
            />
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "90px" }}>
          <div style={{ cursor: "pointer" }}>
            <img src={Upload} style={{ width: "200px" }} />
          </div>
        </div>
        <div className={classes.Footer}>
          <div
            className="text-center"
            style={{ marginTop: "40px", paddingTop: "20px" }}
          >
            {"DRAG N' DROP"}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MassUpdates;
