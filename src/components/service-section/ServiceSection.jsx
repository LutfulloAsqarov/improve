import React from "react";
import serviceImg from "../../assets/service/service.png";
import { Stack, Typography } from "@mui/material";
import checkIcon from "../../assets/icons/check.png";

const ServiceSection = () => {
  return (
    <Stack bgcolor={"#1C1C1C"}>
      <div className="container">
        <Stack bgcolor={"#1C1C1C"}>
          <div className="container">
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={"center"}
              gap={{ xs: "30px", md: "65px" }}
              py={{ xs: "60px", md: "120px" }}
              textAlign={{ xs: "start", md: "left" }}
              sx={{
                "@media (max-width: 1050px)": {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
              }}
            >
              <img
                src={serviceImg}
                alt="img"
                width={"100%"}
                style={{
                  maxWidth: "500px",
                  "@media (max-width: 1100px)": {
                    width: "100%",
                  },
                }}
              />
              <div>
                <Typography
                  sx={{
                    fontFamily: "Yantramanav",
                    fontWeight: 700,
                    fontSize: { xs: "20px", md: "35px" },
                    lineHeight: { xs: "25px", md: "40px" },
                    color: "#fff",
                  }}
                >
                  Nega bizning xizmatlarimiz boshqalardan yaxshiroq?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "15px" },
                    lineHeight: "22px",
                    color: "#FFFFFFCC",
                    fontWeight: "400",
                    mt: "20px",
                  }}
                >
                  Biz hamma uchun bir xil yondashuvga ishonmaymiz. Bizning
                  xizmatlarimiz sizning maqsadingizga erishishingizni ta'minlab,
                  sizning maxsus ehtiyojingizga mos ravishda moslashtirilgan.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "15px" },
                    lineHeight: "22px",
                    color: "#FFFFFFCC",
                    fontWeight: "400",
                    mt: "15px",
                  }}
                >
                  Biz sizning bevosita loyihangizdan tashqariga chiqadigan
                  qiymatni yetkazib berishga ishonamiz. Bizning xizmatlarimiz
                  uzoq muddatli foyda keltirish uchun yaratilgan.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  gap={"30px"}
                  fontWeight={"400"}
                  mt={4}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={2}>
                    <img src={checkIcon} alt="check-icon" width={"20px"} />
                    <Typography color="#FFFFFFCC" fontWeight={"400"}>
                      PPD ishlab chiqish
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"} gap={2}>
                    <img src={checkIcon} alt="check-icon" width={"20px"} />
                    <Typography color="#FFFFFFCC" fontWeight={"400"}>
                      PPD ishlab chiqish
                    </Typography>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default ServiceSection;
