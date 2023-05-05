import React from "react";
import classes from "./StudentRows.module.css";

const rows = (data, selectRow) => {
  return data.map((student, index) => {
    return (
      <div
        className={classes.StudentRow}
        key={index}
        onClick={() => selectRow(student.studentId)}
      >
        <div className={classes.Spacing} style={{ paddingLeft: "50px" }}>
          {student.studentId}
        </div>
        <div className={classes.Spacing} style={{ paddingLeft: "30px" }}>
          {student.thirdPartyId}
        </div>
        <div className={classes.Spacing} style={{ paddingLeft: "50px" }}>
          {student.firstName}
        </div>
        <div className={classes.Spacing} style={{ paddingLeft: "90px" }}>
          {student.lastName}
        </div>
        <div className={classes.Spacing}>{student.email}</div>
      </div>
    );
  });
};

const StudentRows = ({ show, students, selectRow }) => {
  return !show ? (
    <div className={[classes.StudentRows, "text-center"].join(" ")}>
      {"--Data Not Available--"}
    </div>
  ) : (
    <div className={classes.StudentContainer}>{rows(students, selectRow)}</div>
  );
};

export default StudentRows;
