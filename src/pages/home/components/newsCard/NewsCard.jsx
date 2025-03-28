import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import bgImg from "../../../../assets/images/biznesBag.svg";
import vrImage from "../../../../assets/images/biznes.svg";

const NewsCard = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        bgcolor: "#1C1C1C",
        borderRadius: "10px",
        padding: "20px 0",
        position: "relative",
        width: "100%",
        // maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={bgImg}
        alt="Background pattern"
        sx={{
          position: "absolute",
          right: "-30%",
          bottom: "-30%",
          width: "700px",
          height: "620px",
          objectFit: "cover",
          opacity: 0.1,
          zIndex: 1,
        }}
      />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          position: "relative",
          zIndex: 2,
          padding: "20px",
        }}
      >
        <Box
          component="img"
          src={vrImage}
          alt="VR Laptop"
          sx={{
            maxWidth: "640px",
            height: { xs: "250px", md: "auto" },
            objectFit: "cover",
            borderRadius: "8px",
            "@media (max-width: 1100px)": {
              maxWidth: "450px",
            },
            "@media (max-width: 900px)": {
              maxWidth: "100%",
            },
          }}
        />

        <Stack
          spacing={1}
          sx={{
            width: { xs: "100%", md: "50%" },
            color: "#fff",
            paddingLeft: "50px",
            "@media (max-width: 900px)": {
              paddingLeft: "0px",
            },
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#1351D8",
                background: "#FFFFFF",
                padding: "10px 20px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              Sep 16, 2024
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#1351D8",
                background: "#FFFFFF",
                padding: "10px 20px",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              #travel
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#FFFFFF",
              padding: "20px 0",
            }}
          >
            Bluebase xalqaro va mahalliy biznes uchun smartfondada yangi X Tap
            to Pay-ni ishga tushirdi
          </Typography>
          <Stack
            sx={{
              border: "0.1px solid #D9D9D9DD",
            }}
          ></Stack>
          <Typography
            variant="body1"
            sx={{
              padding: "20px 0",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#FFFFFFB3",
            }}
          >
            Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni
            shakllantiradigan va hayotni boyitadigan o‘zgartiruvchi
            yechimlarning boshida bo‘lish. Bu qarash bizning asosiy
            qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda
            chuqur ildiz otgan.
          </Typography>
          <Button
            endIcon={<NorthEastIcon />}
            sx={{
              position: "absolute",
              bottom: 15,
              right: 15,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#007bff",
              color: "#FFFFFF",
              fontSize: "13px",
              borderRadius: "50%",
              width: 40,
              height: 40,
              minWidth: 0,
              padding: 0,
              "&:hover": {
                bgcolor: "#0056b3",
              },
              ".MuiButton-endIcon": {
                margin: 0,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewsCard;
