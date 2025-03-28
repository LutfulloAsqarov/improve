import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import strategy from "../../assets/icons/strategy.svg";
import optimization from "../../assets/icons/optimization.svg";
import btn from "../../assets/icons/btn.svg";
import Code from "../../components/code/Code";
import SectionHeader from "../../components/section-header/SectionHeader";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import HelpSection from "../../components/help-section/HelpSection";
import Contact from "../../components/contact/Contact";
import { useParams } from "react-router";
import { packages } from "../../constants/data";

const Inner = () => {
    const { tariff } = useParams();
    console.log(tariff);

    const data = packages.find((e) => e.id === tariff);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                                fontSize: {
                                    xs: "18px",
                                    md: "24px",
                                    lg: "52px",
                                },
                                textAlign: "center",
                            }}
                        >
                            {data.name}: Cheksiz Imkoniyatlar va Eksklyuziv
                            Imtiyozlar!
                        </Typography>
                    }
                    subtitle={data.name}
                    desc={
                        "Eng yuqori darajadagi xizmatlar va eksklyuziv imtiyozlardan bahramand bo‘lish uchun Platinum tanlang!"
                    }
                    titleMaxWidth={"860px"}
                    descMaxWidth={"685px"}
                />
            </Box>
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "20px",
                            flexWrap: "wrap",
                            alignItems: "center",
                            "@media (max-width: 560px)": {
                                gap: "10px",
                                paddingBottom: "20px",
                            },
                        }}
                    >
                        <SectionHeader
                            subtitle={"TARIF HAQIDA"}
                            title={"Tarif ichiga nimalar kiradi"}
                        />
                        <button
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                background: "#1351D8",
                                color: "#FFFFFF",
                                padding: "12px 26px",
                                fontSize: "13px",
                                borderRadius: "6px",
                                border: "none",
                            }}
                        >
                            <span>Sotib olish</span>
                            <img src={btn} alt="" />
                        </button>
                    </Box>
                    <Box className="specialization">
                        <div className="specialization__cards">
                            <div className="specialization__card">
                                <div className="specialization__icon">
                                    <img src={strategy} alt="" />
                                </div>
                                <span>Traininglar</span>
                            </div>
                            <div className="specialization__card">
                                <div className="specialization__icon">
                                    <img src={optimization} alt="" />
                                </div>
                                <span>Services</span>
                            </div>
                            <div className="specialization__card">
                                <div className="specialization__icon">
                                    <img src={optimization} alt="" />
                                </div>
                                <span>Innovation and startups</span>
                            </div>
                        </div>
                        <div className="specialization__box">
                            <Code>
                                <div className="specialization__info">
                                    <div className="specialization__info__icon">
                                        <img src={strategy} alt="" />
                                    </div>
                                    <span>Traininglar</span>
                                </div>
                                <p className="specialization__desc">
                                    Doimiy rivojlanib borayotgan biznes
                                    landshaftida mustahkam va aniq strategiyalar
                                    sizning muvaffaqiyat sari yo'l-yo'riq
                                    ko'rsatuvchi vositadir. Strategic Business
                                    Solutions kompaniyasida biz oddiy rejalardan
                                    tashqari biznes strategiyalarini ishlab
                                    chiqishga ixtisoslashganmiz.
                                    <br />
                                    <br />
                                    Ular o'sish, innovatsiyalar, yechimlar va bu
                                    farovonlik uchun mustahkam rejalardir.
                                </p>
                                <button className="specialization__btn">
                                    <NorthEastIcon />
                                </button>
                            </Code>
                            <div className="specialization__left">
                                <p className="specialization__desc">
                                    Doimiy rivojlanib borayotgan biznes
                                    landshaftida mustahkam va aniq strategiyalar
                                    sizning muvaffaqiyat sari yo'l-yo'riq
                                    ko'rsatuvchi vositadir. Strategic Business
                                    Solutions kompaniyasida biz oddiy rejalardan
                                    tashqari biznes strategiyalarini ishlab
                                    chiqishga ixtisoslashganmiz. Ular o'sish,
                                    innovatsiyalar, yechimlar va bu farovonlik
                                    uchun mustahkam rejalardir.
                                    <br />
                                    <br />
                                    Doimiy rivojlanib borayotgan biznes
                                    landshaftida mustahkam va aniq strategiyalar
                                    sizning muvaffaqiyat sari yo'l-yo'riq
                                    ko'rsatuvchi vositadir. Strategic Business
                                    Solutions kompaniyasida biz oddiy rejalardan
                                    tashqari biznes strategiyalarini ishlab
                                    chiqishga ixtisoslashganmiz. Ular o'sish,
                                    innovatsiyalar, yechimlar va bu farovonlik
                                    uchun mustahkam rejalardir.Ular o'sish,
                                    innovatsiyalar, yechimlar va bu farovonlik
                                    uchun mustahkam rejalardir.Ular o'sish,
                                    innovatsiyalar, yechimlar va bu farovonlik
                                    uchun mustahkam rejalardir.
                                </p>
                            </div>
                        </div>
                    </Box>
                </Stack>
            </Box>
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
                // sx={{ marginTop: "100px" }}
            >
                <Contact />
            </Box>
        </Box>
    );
};

export default Inner;
