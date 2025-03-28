import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./contact.scss";
import SectionHeader from "../section-header/SectionHeader";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import callIcon from "../../assets/contact-component/call.png";
import mapIcon from "../../assets/contact-component/map.png";
import {
  Facebook,
  FacebookOutlined,
  FacebookSharp,
  Instagram,
  Telegram,
} from "@mui/icons-material";

const statisticsData = [
  { title: "3+", subtitle: "Yillik", description: "Biznes tajribasi" },
  {
    title: "25+",
    subtitle: "Loyihalar",
    description: "Dunyo bo'ylab bajarilgan",
  },
  { title: "99%", subtitle: "", description: "Mijozlarning qoniqishi" },
  {
    title: "2016",
    subtitle: "Yillik",
    description: "Tashkil etilgan sanasi",
  },
];

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <Grid container spacing={3}>
        {/* Aloqa formasi */}
        <Grid item xs={12} md={6}>
          <ItemMain
            sx={{
              padding: "40px",
              "@media (max-width: 600px)": {
                padding: "15px",
              },
            }}
          >
            <SectionHeader
              subtitle={"BIZNING JAMOA"}
              title={
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    "@media (max-width: 500px)": {
                      fontSize: "24px",
                    },
                  }}
                >
                  Aloqaga chiqish
                </Typography>
              }
              desc={"Biz bilan outlook@gmail.com orqali bogʻlanishingiz mumkin"}
            />

            <Divider sx={{ mt: "22px", mb: "28px", bgcolor: "#1C1C1C0" }} />
            <Grid container spacing={2}>
              {/* Ism */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Ism
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Ism"
                  variant="outlined"
                />
              </Grid>

              {/* Familiya */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Familiya
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Familiya"
                  variant="outlined"
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Pochta Manzili
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Pochta Manzili"
                  variant="outlined"
                />
              </Grid>

              {/* Telefon va Mamlakat */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Telefon raqam
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Telefon raqam"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Mamlakat
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Mamlakat"
                  variant="outlined"
                />
              </Grid>

              {/* Xabar */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Xabar
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Bizga xabar qoldiring..."
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>

              {/* Yuborish tugmasi */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    bgcolor: "#1351D8",
                    color: "#fff",
                    py: "11.5px",
                    borderRadius: "6px",
                  }}
                >
                  Yuborish
                </Button>
              </Grid>
            </Grid>
          </ItemMain>
        </Grid>

        {/* Statistik ma'lumotlar */}
        <Grid item xs={12} md={3}>
          <Item>
            <Grid container spacing={5}>
              {statisticsData.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        fontFamily: "Yantramanav",
                      }}
                    >
                      {item.title}{" "}
                      {item.subtitle && (
                        <Typography
                          component="span"
                          variant="h5"
                          sx={{ fontSize: "18px", fontWeight: "normal" }}
                        >
                          {item.subtitle}
                        </Typography>
                      )}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "primary.main",
                        mt: 1,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  {index !== statisticsData.length - 1 && (
                    <Divider sx={{ mt: 5 }} />
                  )}
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>

        {/* Aloqa ma'lumotlari */}
        <Grid item xs={12} md={3}>
          <Item>
            <Stack>
              <Typography
                component={"img"}
                src={callIcon}
                width={"35px"}
                height={"35px"}
                alt="call icon"
              />
              <Typography
                variant="h6"
                sx={{ fontFamily: "Yantramanav", mt: 3 }}
              >
                Aloqa ma'lumotlari
              </Typography>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Yantramanav",
                    fontWeight: "400",
                    color: "#1C1C1CCC",
                    mt: 2,
                  }}
                >
                  +998 93 511 11 11
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Yantramanav",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#1C1C1CCC",
                    mt: 0.5,
                  }}
                >
                  outlook@gmail.com
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ mt: 5 }} />
            <Stack mt={5}>
              <Typography
                component={"img"}
                src={mapIcon}
                width={"35px"}
                height={"35px"}
                alt="call icon"
              />
              <Typography
                variant="h6"
                sx={{ fontFamily: "Yantramanav", mt: 3, lineHeight: "20px" }}
              >
                Bizning ofisimizga tashrif buyuring
              </Typography>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Yantramanav",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#1C1C1CCC",
                    mt: 2,
                  }}
                >
                  16/9, Down Street Edinburgh, Scotland United Kingdom
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ mt: 5 }} />
            <Stack>
              {[
                { icon: FacebookSharp, text: "Facebook" },
                { icon: Telegram, text: "Telegram" },
                { icon: Instagram, text: "Instagram" },
              ].map(({ icon: Icon, text }, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  mt={index === 0 ? 5 : 2}
                >
                  <Icon sx={{ color: "#1351D8" }} />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "15.62px",
                      letterSpacing: "0%",
                      color: "#1C1C1CCC",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

const ItemMain = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F3F6FD",
  padding: "60px",
  borderRadius: "10px",
  boxShadow: "none",
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F3F6FD",
  padding: "50px",
  boxShadow: "none",
  borderRadius: "10px",
  height: "100%",
}));

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    padding: "0px",
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "#10182833",
    },
    "&:hover fieldset": {
      borderColor: "#10182833",
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "13px", // Matn o‘lchami
    fontWeight: "400",
    color: "#8A7E7E",
    padding: "8px 15px", // 🔥 Paddingni olib tashlash
  },
});
