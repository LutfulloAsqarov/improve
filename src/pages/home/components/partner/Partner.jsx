import React from "react";
import partner1 from "../../../../assets/icons/partner1.svg";
import partner2 from "../../../../assets/icons/partner2.svg";
import partner3 from "../../../../assets/icons/partner3.png";
import "./partner.scss";

const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
        <hr className="partner__line" />
        <p className="partner__desc">
          Joylinks 10 dan ortiq kompaniyalar bilan hamkorlik qiladi
        </p>
        <div className="partner__cards">
          <div className="partner__img">
            <img src={partner1} alt="" />
          </div>
          <div className="partner__img">
            <img src={partner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
