import { Box, Typography } from "@mui/material";
import HeroSection from "../../components/hero-section/HeroSection";
import Popular from "../../components/popular/Popular";
import HelpSection from "../../components/help-section/HelpSection";
import Contact from "../../components/contact/Contact";

import buildingImage from "../../assets/images/partnerBg.svg";
import buildingImage2 from "../../assets/images/partnerBg2.svg";

import React, { useEffect } from "react";
import PartnerImages from "./components/partnerImages/PartnerImages";
import PartnerCard from "./components/PartnerCard";

const Partners = () => {
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
              Bizning zamonaviy dunyoda ajoyib sheriklarimiz bor
            </Typography>
          }
          subtitle={"HAMKORLARIMIZ"}
          desc={
            "Hamkorlarimiz turli tajriba, resurslar va umumiy qadriyatlarni stolga olib, sayohatimizda hal qiluvchi rol o'ynaydi."
          }
          titleMaxWidth={"800px"}
          descMaxWidth={"685px"}
        />
      </Box>
      <PartnerImages />
      <Popular
        buildingImage={buildingImage}
        subtitle={"HAMKORIMIZ"}
        title={"Jahon banki"}
        headerDesc={"Biznesingizni boshlash uchun bugun biz bilan bog'laning!"}
        btnTitle={"Biz bilan bog’lanish"}
        desc={
          "Bizning hamkorligimiz barqaror taraqqiyot va innovatsiyalarni qo‘llab-quvvatlaydi. Jahon banki bilan hamkorlikda biz biznes ekotizimni mustahkamlash, tadbirkorlarni qo‘llab-quvvatlash va global miqyosda o‘sish imkoniyatlarini kengaytirishga intilamiz. Biz resurslar, bilim va tajribani uyg‘unlashtirib, kelajak iqtisodiyoti uchun mustahkam poydevor yaratishga sodiqmiz. Shu hamkorlik orqali biz barqaror va samarali rivojlanish yo‘lida eng yuqori standartlarni saqlab qolamiz."
        }
        info1={"Moliyaviy o‘sish kafolati!"}
        info2={"Investitsiya – kelajak poydevori!"}
        info3={"Barqaror rivojlanish yo‘lida!"}
      />
      <PartnerCard />
      <Popular
        buildingImage={buildingImage2}
        subtitle={"HAMKORIMIZ"}
        title={
          "O’zbekiston respublikasi bandlik va mehnat munosabatlari vazirligi"
        }
        titleWidth={"698px"}
        btnTitle={"Biz bilan bog’lanish"}
        desc={
          "Bizning hamkorligimiz barqaror bandlik va adolatli mehnat munosabatlarini rivojlantirishga qaratilgan. Bandlik va Mehnat Munosabatlari Vazirligi bilan hamkorlikda biz ishchi kuchi salohiyatini oshirish, yangi ish o‘rinlarini yaratish va innovatsion yechimlar orqali iqtisodiy rivojlanishga hissa qo‘shishga intilamiz. Tajriba va bilim almashinuvi orqali biz mehnat bozori ehtiyojlariga mos keluvchi, samarali va inklyuziv ish muhitini shakllantirishga sodiqmiz."
        }
        info1={"Barqaror bandlik – farovon kelajak!"}
        info2={"Mehnat rivoji – iqtisodiy yuksalish!"}
        info3={"Har bir ish o‘rni – yangi imkoniyat!"}
      />
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HelpSection />
      </Box>
      <Box component={"section"} className="container">
        <Contact />
      </Box>
    </Box>
  );
};

export default Partners;
