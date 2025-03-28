import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <Box className="container">
      <Box
        sx={{
          padding: "50px 0",
          display: "grid",
          gridTemplateColumns: "repeat(4 , 1fr)",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: "24px",
        }}
      >
        <Card
          sx={{
            boxShadow: "0px 4px 20px 5px #00000008",
            padding: "36px 20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "42px",
                textAlign: "start",
                color: "#1351D8",
              }}
            >
              300+
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                padding: "18px 0 15px",
                fontSize: "18px",
                textAlign: "start",
                color: "#000000",
              }}
            >
              Loyihalar
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#212529",
              }}
            >
              Biz butun dunyo bo'ylab tarqaldik.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            boxShadow: "0px 4px 20px 5px #00000008",
            padding: "36px 20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "42px",
                textAlign: "start",
                color: "#1351D8",
              }}
            >
              100%
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                padding: "18px 0 15px",
                fontSize: "18px",
                textAlign: "start",
                color: "#000000",
              }}
            >
              Mijozlarning qoniqishi
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#212529",
              }}
            >
              Mijozlarimiz xizmatimizdan mamnun.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            boxShadow: "0px 4px 20px 5px #00000008",
            padding: "36px 20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "42px",
                textAlign: "start",
                color: "#1351D8",
              }}
            >
              15k
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                padding: "18px 0 15px",
                fontSize: "18px",
                textAlign: "start",
                color: "#000000",
              }}
            >
              Yuridik mijozlar
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#212529",
              }}
            >
              Bizning mijozlarimiz ko'plab mamlakatlardan.
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            boxShadow: "0px 4px 20px 5px #00000008",
            padding: "36px 20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "42px",
                textAlign: "start",
                color: "#1351D8",
              }}
            >
              2021
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                padding: "18px 0 15px",
                fontSize: "18px",
                textAlign: "start",
                color: "#000000",
              }}
            >
              Biz tashkil qildik
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#212529",
              }}
            >
              Bizning kompaniyamiz katta tarixga ega.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Cards;
