import React, { useState } from "react";
import "./CompDisp";
import "./CompInput";
import CompDisp from "./CompDisp";
import CompInput from "./CompInput";

function CompBody(props) {
  const divStyle = {
    display: "inline-block",
    width: "30%",
    margin: "10px",
    border: "1px solid yellow",
    float: "left",
  };

  const [number, setNumber] = useState(2);
  return (
    <div>
      <div style={{ width: "80%", margin: "30px auto", display: "flex" }}>
        <div style={divStyle}></div>
        <div style={divStyle}></div>
      </div>
    </div>
  );
}

export default CompBody;
