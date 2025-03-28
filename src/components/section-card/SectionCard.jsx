import { Box, Stack, Typography } from "@mui/material";
import galochka from "../../assets/icons/galochka.svg";
import React from "react";

const SectionCard = ({ info1, info2, info3, desc, buildingImage }) => {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={buildingImage}
        alt="Company Building"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Stack spacing={2} sx={{ color: "#333" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "15px",
            color: "#1C1C1CE6",
            lineHeight: "25px",
            fontWeight: "400",
            mb: 2,
          }}
        >
          {desc && desc}
        </Typography>
        <Box
          sx={{
            border: "1px solid #D9D9D9DD",
            margin: "30px 0",
          }}
        ></Box>
        <Stack
          sx={{
            color: "#007bff",
            display: "flex",
            gap: "50px",
            flexDirection: "row",
            "@media (max-width: 1050px)": {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            },
            "@media (max-width: 790px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#1C1C1CE6",
              fontSize: "15px",
              fontWeight: "500",
              display: "grid",
              gridTemplateColumns: "15px 1fr",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={galochka} alt="" />
            {info1 && info1}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1C1C1CE6",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={galochka} alt="" />
            {info2 && info2}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1C1C1CE6",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={galochka} alt="" />
            {info3 && info3}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SectionCard;
