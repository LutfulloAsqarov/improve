import { Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = ({
  subtitle,
  title,
  desc,
  titleColor,
  descColor,
  titleMaxWidth,
  descMaxWidth,
  btnBack,
  btnRadius,
  buttonTitle,
  titleSize,
  news,
}) => {
  return (
    <Stack alignItems={"center"} textAlign={"center"}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "10px",
          letterSpacing: "35%",
          color: "#1351D8",
          letterSpacing: "1px",
          padding: "14px 20px",
          background: `${btnBack ? btnBack : "#1351D81A"}`,
          borderRadius: `${btnRadius ? btnRadius : "10px"}`,
          textTransform: "uppercase",
        }}
      >
        {subtitle && subtitle}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Yantramanav",
          fontWeight: 500,
          fontSize: `${titleSize ? titleSize : "75px"}`,
          lineHeight: "66px",
          maxWidth: `${titleMaxWidth ? titleMaxWidth : "100%"}`,
          color: `${titleColor ? titleColor : "#212529"}`,
          mt: "25px",
          mb: "20px",
          "@media (max-width: 850px)": {
            fontSize: "45px",
            lineHeight: "50px",
          },
          "@media (max-width: 500px)": {
            fontSize: "28px",
            lineHeight: "35px",
          },
        }}
      >
        {title && title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "22px",
          maxWidth: `${descMaxWidth ? descMaxWidth : "100%"}`,
          color: `${descColor ? descColor : "#1C1C1CB2"}`,
          "@media (max-width: 500px)": {
            fontSize: "16px",
            lineHeight: "18px",
          },
        }}
      >
        {desc && desc}
      </Typography>
      {news ? (
        <Typography
          sx={{
            margin: "37px auto 0",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "10px",
            letterSpacing: "35%",
            background: "#1351D8",
            letterSpacing: "1px",
            padding: "14px 19px",
            color: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          {buttonTitle && buttonTitle}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
};

export default HeroSection;
