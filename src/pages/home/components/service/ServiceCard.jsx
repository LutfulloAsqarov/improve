import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import CheckIcon from "@mui/icons-material/Check";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import service1 from "../../../../assets/images/service1.svg";
import service2 from "../../../../assets/images/service2.svg";
import service3 from "../../../../assets/images/service3.svg";
import service4 from "../../../../assets/images/service4.svg";
import service5 from "../../../../assets/images/service5.svg";
import service6 from "../../../../assets/images/service6.svg";
import service7 from "../../../../assets/images/service7.svg";

import "./serviceCard.scss";

const ServiceCard = () => {
  const servicesData = [
    {
      id: 1,
      title: "Mentorlik dasturi",
      image: service1,
      description:
        "Yangi va rivojlanayotgan bizneslar uchun strategik rejalashtirish, bozor tahlili va biznes-reja tuzishda mutaxassis maslahatlari.",
    },
    {
      id: 2,
      title: "Huquqiy Maslahat",
      image: service2,
      description:
        "Yuridik hujjatlarni tayyorlash, shartnomalar tahlili va qonunchilik bo‘yicha professional yuridik qo‘llab-quvvatlash.",
    },
    {
      id: 3,
      title: "Moliyaviy Qo‘llab-quvvatlash",
      image: service3,
      description:
        "Investitsiya jalb qilish, moliyaviy rejalashtirish va byudjet boshqaruvi bo‘yicha xizmatlar, shu jumladan grant va subsidiyalar bo‘yicha.",
    },
    {
      id: 4,
      title: "Trening va Seminarlar",
      image: service4,
      description:
        "Tadbirkorlik, marketing, menejment va innovatsiyalar sohasidagi treninglar hamda seminarlar orqali bilim va ko‘nikmalarni oshirish imkoniyati.",
    },
    {
      id: 5,
      title: "Innovatsion loyihalarni qo’llab quvvatlash",
      image: service5,
      description:
        "Yangi g‘oyalar sinovdan o‘tkazish, innovatsion yechimlar ishlab chiqish va texnologik rivojlanishga yordam berish.",
    },
    {
      id: 6,
      title: "Raqamli marketing",
      image: service6,
      description:
        "Onlayn marketing strategiyalari, ijtimoiy tarmoqlar va reklama kampaniyalarini yuritish bo‘yicha xizmatlar.",
    },
    {
      id: 7,
      title: "Biznes konsalting",
      image: service7,
      description:
        "Tajriba orttirgan tadbirkorlar va ekspertlar bilan individual mentorlik, biznesni rivojlantirish bo‘yicha shaxsiy maslahatlar.",
    },
  ];
  return (
    <div className="serviceCard">
      <div className="container">
        <div className="serviceCard__top">
          <SectionHeader
            subtitle={"BIZNING XIZMATLAR"}
            title={"Biz eng yaxshi xizmatlarni taqdim etamiz"}
            desc={
              "Bizning konsalting jarayonimiz sizning joriy infratuzilmangizni, ish oqimlaringizni va og'riqli nuqtalaringizni to'liq baholash bilan boshlanadi."
            }
            titleColor={"#FFFFFF"}
            descColor={"#FFFFFFCC"}
            descWidth={"506px"}
          />
          <button className="serviceCard__btn">
            <span>Batafsil ma'lumot</span>
            <NorthEastIcon />
          </button>
        </div>
        <div className="serviceCard__cards__top">
          {servicesData.slice(0, 4).map((el) => (
            <div className="serviceCard__card__top" key={el.id}>
              <img src={el.image} alt="" />
              <h3 className="serviceCard__title">{el.title}</h3>
              <p className="serviceCard__card__desc">{el.description}</p>
              <button className="serviceCard__card__btn">Batafsil</button>
            </div>
          ))}
        </div>
        <div className="serviceCard__cards__bottom">
          {servicesData.slice(4, 5).map((el) => (
            <div className="serviceCard__card__bottom" key={el.id}>
              <img src={el.image} alt="" />
              <div className="serviceCard__card__infos">
                <h3 className="serviceCard__subtitle">{el.title}</h3>
                <p className="serviceCard__card__desc">{el.description}</p>
                <button className="serviceCard__card__btn">Batafsil</button>
              </div>
            </div>
          ))}
          <div className="serviceCard__cards__bottom__right">
            {servicesData.slice(5, 7).map((el) => (
              <div className="serviceCard__card__top" key={el.id}>
                <img src={el.image} alt="" />
                <h3 className="serviceCard__title">{el.title}</h3>
                <p className="serviceCard__card__desc">{el.description}</p>
                <button className="serviceCard__card__btn">Batafsil</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="serviceCard__back"></div>
    </div>
  );
};

export default ServiceCard;
