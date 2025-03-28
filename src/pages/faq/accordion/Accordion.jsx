import React, { useState } from "react";
import accordion from "../../../assets/icons/accordion.svg";
import "./accordion.scss";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const panels = [
    {
      id: 0,
      title: "Sizning kompaniyangiz nima beradi?",
      content:
        "Can you assist with recovery planning? Yes, we provide IT training tailored to your business needs. Our training programs cover various IT aspects, including high-end software usage, cybersecurity, and more.",
    },
    {
      id: 1,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Boshqa xizmatlar yoki ma'lumotlar bu yerda bo'lishi mumkin.",
    },
    {
      id: 2,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Uchinchi panel uchun kontent.",
    },
    {
      id: 3,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "To'rtinchi panel uchun kontent.",
    },
    {
      id: 4,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Beshinchi panel uchun kontent.",
    },
    {
      id: 5,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Uchinchi panel uchun kontent.",
    },
    {
      id: 6,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "To'rtinchi panel uchun kontent.",
    },
    {
      id: 7,
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Beshinchi panel uchun kontent.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion__box">
        <div className="accordion__cards">
          {panels.slice(0, 4).map((panel, index) => (
            <div className="accordion__card" key={index}>
              <div
                className={`accordion-header ${
                  activeIndex === panel.id ? "active" : ""
                }`}
                onClick={() => handleClick(panel.id)}
              >
                <div className="accordion__icon">
                  <img src={accordion} alt="" />
                </div>
                <h3> {panel.title}</h3>
              </div>
              {activeIndex === panel.id && (
                <div className="accordion-content">{panel.content}</div>
              )}
            </div>
          ))}
        </div>
        <div className="accordion__cards">
          {panels.slice(4, 8).map((panel, index) => (
            <div className="accordion__card" key={panel.id}>
              <div
                className={`accordion-header ${
                  activeIndex === panel.id ? "active" : ""
                }`}
                onClick={() => handleClick(panel.id)}
              >
                <div className="accordion__icon">
                  <img src={accordion} alt="" />
                </div>
                <h3> {panel.title}</h3>
              </div>
              {activeIndex === panel.id && (
                <div className="accordion-content">{panel.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
