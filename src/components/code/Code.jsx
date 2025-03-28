import React from "react";
import code1 from "../../assets/icons/code1.svg";
import code2 from "../../assets/icons/code2.svg";
import "./code.scss";

const Code = ({ children }) => {
  return (
    <div className="code">
      <div className="code__top">
        <img src={code1} alt="" />
        <img src={code2} alt="" />
      </div>
      <div className="code__children">{children}</div>
    </div>
  );
};

export default Code;
