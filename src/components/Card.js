import React from "react";
import "../styles/styles.css";
import { Grid } from "@material-ui/core";
const Card = (props) => {
  const { card, selected } = props;
  const [img, setimg] = React.useState("");
  const getImages = (img) => {
    import(`./assets/images/${img}.png`).then((img) => setimg(img.default));
  };
  getImages(card.name);
  return (
    <Grid className={`${selected ? "choosen-card" : "container"}`}>
      <Grid className="top">
        <Grid>{card.value}</Grid>
        <img src={img} alt="img" />
      </Grid>
      <Grid className="center">
        <img src={img} alt="img" />
      </Grid>
      <Grid className="bottom">
        <Grid>{card.value}</Grid>
        <img src={img} alt="img" />
      </Grid>
    </Grid>
  );
};

export default Card;
