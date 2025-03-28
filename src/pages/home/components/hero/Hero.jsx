import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__back1"></div>
        <div className="hero__container">
          <h3 className="hero__subtitle">TEZLASHGAN O'SISH</h3>
          <h1 className="hero__title">
            Biznesni zamonaviy qoidalar va tushunchalar bilan kuchaytirish
          </h1>
          <p className="hero__desc">
            Muvaffaqiyat shunchaki maqsad emas, jonlinks biznes konsalting va
            yechimlariga xush kelibsiz.
          </p>
          <button className="hero__btn">
            <span>Keling, jamoamiz bilan gaplashamiz</span>
            <NorthEastIcon />
          </button>
        </div>
        <div className="hero__back2"></div>
      </div>
    </div>
  );
};

export default Hero;
