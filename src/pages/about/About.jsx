import React, { useEffect } from "react";
import Cards from "./components/cards/Cards";
import Popular from "../../components/popular/Popular";
import Specialists from "./components/specialists/Specialists";
import ServiceSection from "../../components/service-section/ServiceSection";
import HelpSection from "../../components/help-section/HelpSection";
import { Box, Typography } from "@mui/material";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/hero-section/HeroSection";
import Partner from "../home/components/partner/Partner";
import buildingImage from "../../assets/images/popular.svg";

const About = () => {
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
              Bizning kompaniyamiz eng yaxshi gorizont texnologik echimlarni
              taqdim etadi
            </Typography>
          }
          subtitle={"Kompaniya"}
          desc={
            "Innovatsiyalarning o'zgaruvchan kuchini va dinamika bilan uzluksiz yechimlarni his eting. Bizning sayohatimiz yechimni yetkazib berish bilan tugamaydi."
          }
          titleMaxWidth={"1185px"}
          descMaxWidth={"685px"}
          descColor={"#000000"}
        />
      </Box>
      <Cards />
      <Partner />
      <Popular
        buildingImage={buildingImage}
        subtitle={"KOMPANIYAMIZ"}
        title={"Nima uchun kompaniyamiz juda mashhur?"}
        headerDesc={"Sayohatingizni boshlash uchun bugun biz bilan bog'laning!"}
        desc={
          "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, professionallar, ekspertlar va vizyonerlardan iborat jamoaviy kuchdir. Mukammallikka intilish bilan bizning mutaxassislarimiz har bir loyihaga boy tajriba va bilim olib keladi. Slack-da biz mukammallikni ta'minlashga sodiqmiz. Kontseptsiyadan boshlab amalga oshirishgacha biz murosaga o'rin qoldirmasdan, sifat va mahoratning eng yuqori standartlarini saqlab qolamiz."
        }
        info1={"Boshqariladigan xizmatlar va mahsulotlar"}
        info2={"Moslashuvchanlik va moslashuvchanlik"}
        info3={"Raqobat ustunligi"}
        btnTitle={"Biz bilan bog’lanish"}
      />
      <Specialists />
      <ServiceSection />
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HelpSection />
      </Box>
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

export default About;
