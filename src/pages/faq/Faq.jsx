import React, { useEffect } from "react";
import ServiceSection from "../../components/service-section/ServiceSection";
import { Box, Stack } from "@mui/material";
import HelpSection from "../../components/help-section/HelpSection";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/hero-section/HeroSection";
import Accordion from "./accordion/Accordion";
import SectionHeader from "../../components/section-header/SectionHeader";

const Faq = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HeroSection
          title={
            "Mutaxassislar jamoasi sizning umumiy savollaringizga javob beradi"
          }
          subtitle={"FAQ"}
          desc={
            "Bizning tez-tez so'raladigan savollar bo'limiga xush kelibsiz, biz mijozlarimiz va tashrif buyuruvchilarimiz tez-tez uchraydigan savollar va so'rovlarni ko'rib chiqamiz."
          }
          titleMaxWidth={"1081px"}
          descMaxWidth={"728px"}
          titleSize={"66px"}
        />
      </Box>
      <div className="container">
        <Box sx={{ margin: "100px auto", border: "1px solid #D9D9D9DD" }}></Box>
      </div>
      <Box
        sx={{
          margin: "40px auto",
        }}
        component={"section"}
        className="container"
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <SectionHeader
              subtitle={"FAQ BO’LIM"}
              title={"Tez-tez beriladigan savollar"}
            />
            <Accordion />
          </Box>
        </Stack>
      </Box>
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
    </div>
  );
};

export default Faq;
