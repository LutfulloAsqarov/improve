import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import { Box, Grid } from "@mui/material";
import SectionHeader from "../../components/section-header/SectionHeader";
import img1 from "../../assets/images/concepts1.png";
import img2 from "../../assets/images/concepts2.png";
import img3 from "../../assets/images/concepts3.png";
import Concepts from "../../components/concepts/Concepts";
import Contact from "../../components/contact/Contact";
import NewsCard from "./components/NewsCard";

const fakeData = [
  {
    id: 1,
    date: "Sep 16, 2024",
    category: "Forex",
    title:
      "Birja bozorlari bugun texnologik aktsiyalar bilan aralash notada ochildi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img1, // Rasmlar uchun relative yo‘l
  },
  {
    id: 2,
    date: "Sep 16, 2024",
    category: "#sayohat",
    title: "Avtomobil sanoati elektr transportda o‘zgaruvchan yo‘lni boshladi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img2,
  },
  {
    id: 3,
    date: "Sep 16, 2024",
    category: "#simply_lifestyle",
    title:
      "Sog'liqni saqlash sektori bemorlarni masofadan turib kuzatishga moslashmoqda",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img3,
  },
  {
    id: 1,
    date: "Sep 16, 2024",
    category: "Forex",
    title:
      "Birja bozorlari bugun texnologik aktsiyalar bilan aralash notada ochildi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img1, // Rasmlar uchun relative yo‘l
  },
  {
    id: 2,
    date: "Sep 16, 2024",
    category: "#sayohat",
    title: "Avtomobil sanoati elektr transportda o‘zgaruvchan yo‘lni boshladi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img2,
  },
  {
    id: 3,
    date: "Sep 16, 2024",
    category: "#simply_lifestyle",
    title:
      "Sog'liqni saqlash sektori bemorlarni masofadan turib kuzatishga moslashmoqda",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img3,
  },
];

const News = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Box py={"100px"} bgcolor={"#1C1C1C"}>
        <Box maxWidth={"992px"} m={"0 auto"}>
          <HeroSection
            subtitle={"Yangilik va Tadbirlar"}
            title={"Biznes inkubator yangiliklari va tadbirlari markazi"}
            desc={
              "Biz tashkil etadigan har bir tadbir unutilmas tajribalarni yaratish uchun noyob imkoniyatdir. Biz har bir tafsilotga e'tibor berib, odatdagidan tashqariga chiqamiz"
            }
            titleColor={"#fff"}
            descColor={"#FFFFFFE6"}
            btnBack={"#FFFFFF"}
            btnRadius={"20px"}
            buttonTitle={"Uchrashuvni hoziroq band qiling"}
            news={true}
          />
        </Box>
      </Box>
      <Box className="container">
        <Box pt={"120px"} pb={"60px"}>
          <SectionHeader
            subtitle={"KOMPANIYA TADBIRLARI"}
            title={"So'ngi yangiliklar"}
            desc={"Tadbirlarni boshqarish murakkab ish bo'lishi mumkin"}
          />
          <Grid container spacing={3} mt={"60px"}>
            <Grid item xs={12} md={6}>
              <NewsCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewsCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewsCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <NewsCard />
            </Grid>
          </Grid>
        </Box>
        <Box pt={"60px"} pb={"60px"}>
          <SectionHeader
            subtitle={"KUNLIK YANGILIKLAR"}
            title={"Kundalik tushunchalar haqida ko'proq o'qing"}
            desc={
              "Axborot shakllanayotgan tez sur'atda dunyoda bizning kundalik yangiliklar xizmatimiz so'nggi o'zgarishlardan xabardor bo'lishdir"
            }
            descWidth={"450px"}
          />
          <Concepts data={fakeData} />
        </Box>
        <Contact />
      </Box>
    </>
  );
};

export default News;
