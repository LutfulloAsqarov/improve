import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import Code from "../../../../components/code/Code";
import opportunities from "../../../../assets/images/opportunities.svg";
import strategy from "../../../../assets/icons/strategy.svg";
import agensy from "../../../../assets/icons/agensy.svg";
import optimization from "../../../../assets/icons/optimization.svg";
import analysis from "../../../../assets/icons/analysis.svg";
import "./opportunities.scss";

const Opportunities = () => {
  const opportunitiesData = [
    {
      image: strategy,
      title: "O'qish va treninglar",
      desc: "Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizni yaxshilash va mehnat samaradorligini oshirish uchun yangi bilim va ko‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtirok etish - sizning ",
    },
    {
      image: agensy,
      title: "O'qish va treninglar",
      desc: "Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizni yaxshilash va mehnat samaradorligini oshirish uchun yangi bilim va ko‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtirok etish - sizning ",
    },
    {
      image: analysis,
      title: "O'qish va treninglar",
      desc: "Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizni yaxshilash va mehnat samaradorligini oshirish uchun yangi bilim va ko‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtirok etish - sizning ",
    },
    {
      image: optimization,
      title: "O'qish va treninglar",
      desc: "Bizning biznes inkubatorimizda siz o‘z kasbiy faoliyatingizni yaxshilash va mehnat samaradorligini oshirish uchun yangi bilim va ko‘nikmalarga ega bo‘lasiz. Bizning trening va kurslarimizda ishtirok etish - sizning ",
    },
  ];
  return (
    <div className="opportunities">
      <div className="container opportunities__container">
        <div className="opportunities__left">
          <SectionHeader
            subtitle={"IMKONIYATLAR"}
            title={
              "Biz sizga taqdim etishimiz mumkun bo'lgan asosiy imkoniyatlar"
            }
            titleColor={"#212529"}
            // titleWidth={"655px"}
          />
          <hr className="opportunities__line" />
          <div className="opportunities__cards">
            {opportunitiesData.map((el) => (
              <div className="opportunities__card" key={el.title}>
                <div className="opportunities__card__icon">
                  <img src={el.image} alt="" />
                </div>
                <h3 className="opportunities__card__title">{el.title}</h3>
                <p className="opportunities__card__desc">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Code className="opportunities__img">
          <img src={opportunities} alt="" />
        </Code>
      </div>
    </div>
  );
};

export default Opportunities;
