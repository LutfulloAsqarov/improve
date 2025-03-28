import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import newImg from "../../../assets/images/newsimg.png";
import time from "../../../assets/icons/time.svg";
import data from "../../../assets/icons/data.svg";
import loc from "../../../assets/icons/loc.svg";
import user from "../../../assets/icons/user.svg";

const NewsCard = () => {
  return (
    <Box px={"22px"} py={"24px"} bgcolor={"#E7EEFF"} borderRadius={"10px"}>
      <Typography component={"img"} src={newImg} alt="img" width={"100%"} />
      <Stack>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "10px",
            color: "#1351D8",
            mt: "50px",
          }}
        >
          Aprerl 17
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            p: "16px 0 25px",
          }}
        >
          Slack Cloud Computing and Cloud Service Solutions Undertaken
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#1C1C1CCC",
          }}
        >
          Small UK merchants, businesses, and other enterprises can now use Tap
          to Pay on service to replace payment terminals at point of sale.
        </Typography>
        <Divider sx={{ bgcolor: "#D9D9D9DD", m: "35px 0 40px" }} />
        <Grid
          container
          spacing={"23px"}
          sx={{
            display: "flex",
            "@media (max-width: 400px)": {
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              "@media (max-width: 400px)": {},
            }}
          >
            <img src={time} alt="icon" />
            <Typography
              sx={{
                fontFamily: "13px",
                fontWeight: "500",
                lineHeight: "13px",
                color: "#1C1C1CCC",
              }}
            >
              9 AM - 2PM
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              "@media (max-width: 400px)": {},
            }}
          >
            <img src={loc} alt="icon" />
            <Typography
              sx={{
                fontFamily: "13px",
                fontWeight: "500",
                lineHeight: "13px",
                color: "#1C1C1CCC",
              }}
            >
              Samarqand
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              "@media (max-width: 400px)": {},
            }}
          >
            <img src={data} alt="icon" />
            <Typography
              sx={{
                fontFamily: "13px",
                fontWeight: "500",
                lineHeight: "13px",
                color: "#1C1C1CCC",
              }}
            >
              17-05-2023
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              "@media (max-width: 400px)": {},
            }}
          >
            <img src={user} alt="icon" />
            <Typography
              sx={{
                fontFamily: "13px",
                fontWeight: "500",
                lineHeight: "13px",
                color: "#1C1C1CCC",
              }}
            >
              Umid Xusanov
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default NewsCard;
