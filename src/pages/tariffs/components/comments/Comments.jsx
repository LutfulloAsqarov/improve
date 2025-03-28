import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import "./comments.scss";
import { NavLink } from "react-router";

const Comments = () => {
  const packages = [
    { name: "Silver package", price: "3$", color: "#007bff" },
    { name: "Gold package", price: "10$", color: "#007bff" },
    { name: "Platinum package", price: "25$", color: "#007bff" },
  ];
  return (
    <div className="comments">
      <div className="container">
        <SectionHeader
          subtitle={"BIZNING NARXLAR"}
          title={"Tariflar haqida batafsil ma’lumot"}
          titleAlign={"center"}
        />
        <div className="comments__list">
          <NavLink className="comments__item comments__active">
            Training
          </NavLink>
          <NavLink className="comments__item">Servics</NavLink>
          <NavLink className="comments__item">Innovation / Startups</NavLink>
        </div>
        <div>
          <div className="comments__cards">
            {packages.map((pkg, index) => (
              <div key={index} className="comments__card">
                <h2 style={{ color: pkg.color }}>
                  {pkg.price} <span>/year</span>
                </h2>
                <p>{pkg.name}</p>
                <p>Billed annually</p>
                <ul>
                  <li>Customized training play for employer</li>
                  <li>Free account on platform</li>
                </ul>
                <button>Get started</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
