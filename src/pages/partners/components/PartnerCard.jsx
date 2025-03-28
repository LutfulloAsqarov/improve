import React from "react";
import SectionHeader from "../../../components/section-header/SectionHeader";
import partnerCard1 from "../../../assets/images/partnerCard1.svg";
import partnerCard2 from "../../../assets/images/partnerCard2.svg";
import "./partnerCard.scss";

const PartnerCard = () => {
  return (
    <div className="partner-card">
      <div className="container ">
        <div className="partner-card__box">
          <SectionHeader
            subtitle={"HAMKORLARIMIZ"}
            title={"Mijozlarimiz va hamkorlarimiz tomonidan ishonchli"}
            desc={
              "Bizning mukammallikka bo'lgan sadoqatimiz bevosita jamoadan tashqariga chiqadi. Biz qadriyatlarimiz, qarashlarimiz va fidoyiligimizni baham ko'radigan hamkorlarni faol ravishda qidiramiz."
            }
            descWidth={"506px"}
            titleWidth={"606px"}
            titleColor={"#FFFFFF"}
            descColor={"#FFFFFFCC"}
          />
          <div className="partner-card__images">
            <img src={partnerCard1} alt="partner-img" />
            <img src={partnerCard2} alt="partner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
