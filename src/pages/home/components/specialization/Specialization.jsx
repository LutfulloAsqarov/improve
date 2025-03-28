import { Box, Grid2, Stack } from "@mui/material";
import React, { useState } from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import "./specialization.scss";
import strategy from "../../../../assets/icons/strategy.svg";
import agensy from "../../../../assets/icons/agensy.svg";
import optimization from "../../../../assets/icons/optimization.svg";
import analysis from "../../../../assets/icons/analysis.svg";
import specialization from "../../../../assets/images/specialization.svg";
import Code from "../../../../components/code/Code";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Specialization = () => {
  const [activeId, setActiveId] = useState(1);

  const data = [
    {
      id: 1,
      icon: strategy,
      btnName: "Startaplar uchun dasturlar",
      title: " Muvaffaqiyat uchun biznes strategiyangizni oshirish",
      content:
        "Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va aniq strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi vositadir. Strategic Business Solutions kompaniyasida biz oddiy rejalardan tashqari biznes strategiyalarini ishlab chiqishga ixtisoslashganmiz.  Ular o'sish, innovatsiyalar, yechimlar va bu farovonlik uchun mustahkam rejalardir.",
    },
    {
      id: 2,
      icon: optimization,
      btnName: "Huquqiy va moliyaviy maslahatlar",
      title: "Data Science",
      content:
        "Explore data analysis, machine learning, and AI with real-world projects.",
    },
    {
      id: 3,
      icon: optimization,
      btnName: "Moliyalashtirish imkoniyatlari",
      title: "Cyber Security",
      content:
        "Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va aniq strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi vositadir. Strategic Business Solutions kompaniyasida biz oddiy rejalardan tashqari biznes strategiyalarini ishlab chiqishga ixtisoslashganmiz. Ular o'sish, innovatsiyalar, yechimlar va bu farovonlik uchun mustahkam rejalardir.",
    },
  ];

  const activeItem = data.find((item) => item.id === activeId);

  return (
    <Box
      component={"section"}
      className="container"
      sx={{
        padding: "40px 0 0",
      }}
    >
      <Stack
        padding={"60px"}
        bgcolor={"#F3F6FD"}
        border={"1px solid #1351D81A"}
        borderRadius={"10px"}
        sx={{
          "@media (max-width: 640px)": {
            padding: "40px 30px",
          },
        }}
      >
        <SectionHeader
          subtitle={"IXTISOSLASHTIRISH"}
          title={"Bizning kompaniyamiz siz uchun nima qilishi kerak"}
        />
        <Box className="specialization">
          <div className="specialization__cards specialization__tabs">
            {data.map((item) => (
              <div
                key={item.id}
                className={`specialization__card tab ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={() => setActiveId(item.id)}
              >
                <div className="specialization__icon">
                  <img src={item.icon} alt="" />
                </div>
                <span>{item.btnName}</span>
              </div>
            ))}
          </div>
          {activeItem ? (
            <div className="specialization__box">
              <div className="specialization__left">
                <img src={specialization} alt="" />
              </div>
              <Code>
                <div className="specialization__info">
                  <div className="specialization__info__icon">
                    <img src={strategy} alt="" />
                  </div>
                  <span>{activeItem.title}</span>
                </div>
                <p className="specialization__desc">{activeItem.content}</p>
                <button className="specialization__btn">
                  <NorthEastIcon />
                </button>
              </Code>
            </div>
          ) : (
            <></>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Specialization;
