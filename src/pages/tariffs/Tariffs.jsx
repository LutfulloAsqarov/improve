import { Box, Typography, Stack } from "@mui/material";
import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import buildingImage from "../../assets/images/serviceHero.svg";
import SectionCard from "../../components/section-card/SectionCard";
import Comments from "./components/comments/Comments";
import Consulting from "./components/consulting/Consulting";
import ServiceSection from "../../components/service-section/ServiceSection";
import Contact from "../../components/contact/Contact";
import Service from "../home/components/service/Service";

const Tariffs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <Box>
      <Box
        component="section"
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HeroSection
          title={
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "18px", md: "24px", lg: "52px" },
                textAlign: "center",
              }}
            >
              Sizni eng yaxshi yechimlar va yordam bilan kuchaytiradi
            </Typography>
          }
          subtitle={"BIZNING TARIFLAR"}
          desc={
            "Joylinks kompaniyasida biz har qanday ehtiyojingizni qondirish uchun ajoyib yechimlar va doimiy yordam taqdim etishga sodiqmiz."
          }
          titleMaxWidth={"800px"}
          descMaxWidth={"685px"}
          descColor={"#1C1C1CCC"}
        />
      </Box>
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <Stack
          sx={{
            padding: { xs: "20px", sm: "40px" },
            bgcolor: "#F3F6FD",
            border: "1px solid #1351D81A",
            borderRadius: "10px",
          }}
        >
          <SectionCard
            desc={
              "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, professionallar, ekspertlar va vizyonerlardan iborat jamoaviy kuchdir. Mukammallikka intilish bilan bizning mutaxassislarimiz har bir loyihaga boy tajriba va bilim olib keladi. Slack-da biz mukammallikni ta'minlashga sodiqmiz. Kontseptsiyadan boshlab amalga oshirishgacha biz murosaga o'rin qoldirmasdan, sifat va mahoratning eng yuqori standartlarini saqlab qolamiz."
            }
            info1={"Boshqariladigan xizmatlar va mahsulotlar"}
            info2={"Moslashuvchanlik va moslashuvchanlik"}
            info3={"Raqobat ustunligi"}
            buildingImage={buildingImage}
          />
        </Stack>
      </Box>
      <Service
        bgColor={"#F3F6FD"}
        textColor={"#000000"}
        btnBack={"#FFFFFF"}
        btnColor={"#1351D8"}
        subtitle={"BIZNING NARXLAR"}
        title={"Tariflar haqida batafsil ma’lumot"}
        btnTitle={"Tarish tanlashga yordam"}
      />
      <Consulting />
      <ServiceSection />
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <Contact />
      </Box>
    </Box>
  );
};

export default Tariffs;
