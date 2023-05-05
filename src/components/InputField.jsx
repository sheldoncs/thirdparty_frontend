import React from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  [theme.breakpoints.between("sm", "lg")]: {
    textFieldStyle: {
      fontSize: 12,
      height: 35,
      width: 150,
      fontWeight: "bold",
      backgroundColor: "#fff",
      borderRadius: 25,
      border: "1px solid #e2e8f0",
    },
  },
  [theme.breakpoints.down("xl")]: {
    textFieldStyle: {
      fontSize: 12,
      height: 52,
      width: 450,
      fontWeight: "bold",
      backgroundColor: "#fff",
      fontFamily: "'Roboto Condensed', sans-serif",
      borderRadius: 5,
      border: "1px solid #e2e8f0!important",
    },
  },
}));

const InputField = ({
  textLabel,
  changed,
  elementConfig,
  CustomIcon,
  value,
}) => {
  const classes = useStyle();
  if (textLabel) {
    return (
      <div>
        {value ? (
          <label style={{ color: "#0c5d88" }}>{textLabel}</label>
        ) : (
          <label>{""}</label>
        )}
        <TextField
          label={value ? null : textLabel}
          value={value ? value : null}
          detaultValue={value ? value : null}
          onChange={changed}
          className={classes.textFieldStyle}
          InputProps={{
            disableUnderline: true, // <== added this
            shrink: true,
            style: {
              height: 50,
              fontFamily: "'Roboto Condensed', sans-serif",
              fontSize: 14,
            },
          }}
          fullWidth
        />
      </div>
    );
  }
};

export default InputField;
