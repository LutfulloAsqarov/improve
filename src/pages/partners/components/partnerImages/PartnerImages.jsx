import React from "react";
import partnerNew1 from "../../../../assets/icons/partner-new1.svg";
import partnerNew2 from "../../../../assets/icons/partner-new2.svg";
import "./partnerImages.scss";

const PartnerImages = () => {
  return (
    <div className="partner-images">
      <div className="container">
        <div className="partner-images__cards">
          <img src={partnerNew1} alt="" />
          <img src={partnerNew2} alt="" />
        </div>
        <div className="partner-images__line"></div>
      </div>
    </div>
  );
};

export default PartnerImages;
