import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Stack, Typography } from "@mui/material";

const ConceptCard = ({ item }) => {
  return (
    <div key={item.id} className="concepts__card">
      <img src={item.image} alt={item.title} />
      <Stack
        gap={0}
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <div className="concepts__date">
          <span>{item.date}</span>
          <span>{item.category}</span>
        </div>
        <Typography
          component={"h3"}
          className="concepts__title"
          sx={{
            flexGrow: 1,
            fontFamily: "Yantramanav",
            fontWeight: "200",
            fontSize: "18px",
            lineHeight: "20px",
          }}
        >
          {item.title}
        </Typography>
        <hr />
        <p className="concepts__desc">{item.description}</p>
        <button className="concepts__btn">
          <NorthEastIcon />
        </button>
      </Stack>
    </div>
  );
};

export default ConceptCard;
