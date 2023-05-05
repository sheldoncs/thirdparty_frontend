import React, { useState, useEffect } from "react";
import Options from "../options/options";
import StudentHeader from "./studentheader/studentheader";
import classes from "./ThirdParty.module.css";
import TopHeader from "../application/applicationheader";
import Footer from "../footer/footer";
import MassUpdates from "../massupdates/massupdates";
import Details from "../details/details";
import { getStudent, swap } from "../util/thirdparty_api";
import StudentRows from "./studentrows/studentrows";
import SubMenu from "../menu/popup/popup";
import Cover from "../cover/cover";

const ThirdParty = (props) => {
  const [option, setOption] = useState("");
  const [optionStatus, setOptionStatus] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const [students, setStudents] = useState([]);
  const [showData, setShowData] = useState(false);
  const [toggle, setToggle] = useState(false);

  const selectOption = (opt) => {
    setOption(opt);
    setOptionStatus(false);
    setStudents([]);
    setData(null);
    setShowData(false);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    if (option === "swap" || option === "delete" || option === "mass") {
      setOptionStatus(false);
    }
  }, [option]);
  const close = (val) => {
    if (val) {
      setOption("");
    }
  };

  const search = (id) => {
    getStudent(id).then((response) => {
      if (response.data.status === 200) {
        addStudents(response.data.data);
        // setData(response.data.data);
        // setShowDetails(true);
      }
    });
  };

  const addStudents = (data) => {
    let arr = [];
    if (data) {
      if (option === "swap") {
        if (students.length > 0 && students.length < 2) {
          students.map((student) => {
            return arr.push(student);
          });
        }
        if (students.length === 2) {
          return;
        }
      }
      arr.push(data);
      setShowData(true);
      setStudents(arr);
      // setData(null);
    }
  };

  const toggleClick = (v) => {
    setToggle(v);
  };

  const click = (v) => {
    if (v === "list") {
      setOptionStatus(true);
      setToggle(false);
    }
  };

  const selectRow = (id) => {
    const filteredData = students.filter((student) => student.studentId === id);
    setData(filteredData[0]);
    setShowDetails(true);
  };

  return (
    <React.Fragment>
      <div style={{ height: "1000px" }}>
        {toggle && <SubMenu click={(v) => click(v)} />}
        {optionStatus ? (
          <Options selectOption={(opt) => selectOption(opt)} />
        ) : null}
        {option === "mass" || showDetails || optionStatus ? <Cover /> : null}

        {option === "mass" ? <MassUpdates close={(val) => close(val)} /> : null}
        <Details
          data={data}
          show={showDetails}
          close={() => closeDetails()}
          addStudent={() => addStudents()}
        />
        <TopHeader toggle={toggle} click={(v) => toggleClick(v)} />
        <div className={classes.ThirdParty}>
          <StudentHeader
            search={(id) => search(id)}
            operation={option}
            swap={() => swap(students)}
          />
          <StudentRows
            show={showData}
            students={students}
            selectRow={(val) => selectRow(val)}
          />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ThirdParty;
