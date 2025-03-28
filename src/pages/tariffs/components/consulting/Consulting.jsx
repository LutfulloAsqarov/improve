import React from "react";
import "./consulting.scss";
import SectionHeader from "../../../../components/section-header/SectionHeader";

const Consulting = () => {
  const steps = [
    {
      number: "01",
      title: "Kashfiyot va tahlil",
      description:
        "Mijozning mavjud IT tizimlarini tahlil qilib, ularni rivojlantirish uchun eng yaxshi yo‘lni aniqlash.",
    },
    {
      number: "02",
      title: "Moslashtirilgan yechimlar",
      description:
        "Tahlil asosida ishlab chiqilgan yechimlar yordamida mijozning ehtiyojlarini qondirish.",
    },
    {
      number: "03",
      title: "Joylashtirish va qo‘llab-quvvatlash",
      description:
        "Hozirda mavjud bo‘lgan tizimlarni rivojlantirish va muolot qilish uchun doimiy qo‘llab-quvvatlash.",
    },
  ];

  return (
    <div className="consulting">
      <div className="consulting-container container">
        <div className="consulting-header">
          <SectionHeader
            subtitle={"KONSULTING MUMKINLIGI"}
            title={"Mijozlarimiz uchun eng yaxshi yo'l."}
            desc={
              "Bizing konsulting xizmatimiz sizning IT infratizimangizni, isho‘qimlariniz va operatsiyalaringizni optimallashtirishga yordam beradi, bu esa sizning biznesingizni rivojlanishga olib keladi."
            }
          />
          <div className="consulting-left">
            <ul>
              <li>Boshqarilgan xizmatlar va maxsus xizmatlar</li>
              <li>Moslashuvchanlik va moslashuvchanlik</li>
              <li>Raqobat ustunligi</li>
            </ul>
          </div>
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div
                className="step-number"
                style={{ backgroundColor: "#007bff", color: "#fff" }}
              >
                {step.number}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
