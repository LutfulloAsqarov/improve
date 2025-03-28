import { Box, Button, Stack, Typography } from "@mui/material";
import bgImg from "../../assets/contact-component/bg.png";
import womenImg from "../../assets/contact-component/women.png";

const HelpSection = () => {
    return (
        <Stack
            alignItems={"center"}
            sx={{
                bgcolor: "#1C1C1C",
                borderRadius: "10px",
                padding: "75px 0",
                position: "relative",
            }}
        >
            <Typography
                component={"img"}
                src={womenImg}
                alt="bg"
                sx={{
                    width: "144px",
                    mb: "30px",
                }}
            />

            <Typography
                component={"img"}
                src={bgImg}
                alt="bg"
                sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "-30%",
                    width: "70%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <Typography
                variant="h3"
                sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Yantramanav",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                }}
            >
                Qo'shimcha yordam kerakmi?
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontFamily: "Yantramanav",
                    fontWeight: 300,
                    fontSize: "18px",
                    lineHeight: "18px",
                    letterSpacing: "0%",
                    pt: "16px",
                    pb: "28px",
                }}
            >
                Har qanday so'rov yoki yordam uchun bepul murojaat qiling.
            </Typography>
            <Button
                sx={{
                    display: "inline-block",
                    bgcolor: "#1351D8",
                    fontSize: "13px",
                    color: "#FFFFFF",
                    margin: "0 auto",
                }}
            >
                Uchrashuvni hoziroq band qiling
            </Button>
        </Stack>
    );
};

export default HelpSection;
