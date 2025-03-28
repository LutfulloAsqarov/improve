import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import SectionCard from "../section-card/SectionCard";

const Popular = ({
  subtitle,
  title,
  headerDesc,
  desc,
  info1,
  info2,
  info3,
  buildingImage,
  btnTitle,
  titleWidth,
}) => {
  return (
    <Box component={"section"} className="container">
      <Stack
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
          bgcolor: "#F3F6FD",
          border: "1px solid #1351D81A",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 200px" },
            gap: "30px",
            alignItems: "center",
          }}
        >
          <SectionHeader
            subtitle={subtitle}
            title={
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "45px" },
                  fontWeight: "bold",
                  maxWidth: `${titleWidth ? titleWidth : "100%"}`,
                }}
              >
                {title}
              </Typography>
            }
            desc={headerDesc}
          />
          <Stack sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Button
              sx={{
                border: "none",
                borderRadius: "30px",
                background: "#1351D8",
                color: "white",
                padding: "13px 13px",
                fontSize: "13px",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              {btnTitle}
            </Button>
          </Stack>
        </Box>
        <SectionCard
          desc={desc}
          info1={info1}
          info2={info2}
          info3={info3}
          buildingImage={buildingImage}
        />
      </Stack>
    </Box>
  );
};

export default Popular;
