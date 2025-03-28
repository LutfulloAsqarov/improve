import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "./service.scss";
import { Link, useNavigate } from "react-router";
import { packages } from "../../../../constants/data";

const Service = ({
  bgColor,
  textColor,
  btnBack,
  btnColor,
  subtitle,
  title,
  btnTitle,
}) => {
  const navigate = useNavigate();

  const handleClickPkg = (id) => {
    navigate(`/tariffs/${id}`);
  };

  return (
    <div className="service" style={{ background: bgColor }}>
      <div className="container">
        <div className="service__top">
          <SectionHeader
            subtitle={subtitle}
            title={title}
            titleColor={textColor}
            descColor={"#FFFFFFCC"}
            titlePadding={"22px"}
            titleAlign={"center"}
            textStart={"start"}
          />
          <Link to={"https://forms.gle/TpM4aYHyYdaAypc37"}>
            <button
              className="service__btn"
              style={{ background: btnBack, color: btnColor }}
            >
              <span>{btnTitle}</span>
              <NorthEastIcon />
            </button>{" "}
          </Link>
        </div>
        <div className="comments__cards">
          {packages.map((pkg, index) => (
            <div key={index} className="comments__card">
              <h2 style={{ color: pkg.color }}>
                {pkg.price} <span>/year</span>
              </h2>
              <p className="comments__name">
                {pkg.name} <span>package</span>
              </p>
              <p className="comments__user">Billed annually</p>
              <ul>
                <li>Customized training play for employer</li>
                <li>Free account on platform</li>
              </ul>
              <button onClick={() => handleClickPkg(pkg.id)}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="service__back"></div>
    </div>
  );
};

export default Service;
