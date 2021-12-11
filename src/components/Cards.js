import React from "react";
import {
  Slide,
  Grid,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import Card from "./Card";

import "../styles/styles.css";
import shortid from "shortid";

const useStyles = makeStyles(() =>
  createStyles({
    cardsList: {
      display: "flex",
      justifyContent: "center",
      margin: "40px auto 0 180px",
      height: "282px",
    },
    action: {
      textAlign: "center",
      marginTop: "50px",
      marginBottom: "50px",
    },
    choosenCards: {
      display: "flex",
      justifyContent: "center",
      height: "50%",
    },

    error: {
      textAlign: "center",
      marginBottom: "0.5rem",
      color: "rgb(240, 240, 240)",
    },
  })
);

export const data = [
  {
    name: "diamonds",
    value: 2,
  },
  {
    name: "diamonds",
    value: 3,
  },
  {
    name: "diamonds",
    value: 4,
  },
  {
    name: "diamonds",
    value: 5,
  },
  {
    name: "diamonds",
    value: 6,
  },
  {
    name: "diamonds",
    value: 7,
  },
  {
    name: "diamonds",
    value: 8,
  },
  {
    name: "diamonds",
    value: 9,
  },
  {
    name: "diamonds",
    value: 10,
  },
  {
    name: "diamonds",
    value: "J",
  },
  {
    name: "diamonds",
    value: "Q",
  },
  {
    name: "diamonds",
    value: "K",
  },
  {
    name: "diamonds",
    value: "A",
  },
  {
    name: "spades",
    value: 2,
  },
  {
    name: "spades",
    value: 3,
  },
  {
    name: "spades",
    value: 4,
  },
  {
    name: "spades",
    value: 5,
  },
  {
    name: "spades",
    value: 6,
  },
  {
    name: "spades",
    value: 7,
  },
  {
    name: "spades",
    value: 8,
  },
  {
    name: "spades",
    value: 9,
  },
  {
    name: "spades",
    value: 10,
  },
  {
    name: "spades",
    value: "J",
  },
  {
    name: "spades",
    value: "Q",
  },
  {
    name: "spades",
    value: "K",
  },
  {
    name: "spades",
    value: "A",
  },
  {
    name: "hearts",
    value: 2,
  },
  {
    name: "hearts",
    value: 3,
  },
  {
    name: "hearts",
    value: 4,
  },
  {
    name: "hearts",
    value: 5,
  },
  {
    name: "hearts",
    value: 6,
  },
  {
    name: "hearts",
    value: 7,
  },
  {
    name: "hearts",
    value: 8,
  },
  {
    name: "hearts",
    value: 9,
  },
  {
    name: "hearts",
    value: 10,
  },
  {
    name: "hearts",
    value: "J",
  },
  {
    name: "hearts",
    value: "Q",
  },
  {
    name: "hearts",
    value: "K",
  },
  {
    name: "hearts",
    value: "A",
  },

  {
    name: "clubs",
    value: 2,
  },
  {
    name: "clubs",
    value: 3,
  },
  {
    name: "clubs",
    value: 4,
  },
  {
    name: "clubs",
    value: 5,
  },
  {
    name: "clubs",
    value: 6,
  },
  {
    name: "clubs",
    value: 7,
  },
  {
    name: "clubs",
    value: 8,
  },
  {
    name: "clubs",
    value: 9,
  },
  {
    name: "clubs",
    value: 10,
  },
  {
    name: "clubs",
    value: "J",
  },
  {
    name: "clubs",
    value: "Q",
  },
  {
    name: "clubs",
    value: "K",
  },
  {
    name: "clubs",
    value: "A",
  },
];
function DeckCards() {
  const classes = useStyles();
  const [cards, setCards] = React.useState(data);
  const [selected, setSelected] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [shuffle, setShuffle] = React.useState(false);

  const shuffle_fn = () => {
    setError(null);
    setSelected([]);
    setShuffle(true);
    let cards = data.slice();
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setCards(cards);
  };

  React.useEffect(() => {
    shuffle_fn();
  }, []);

  const cardHandler = () => {
    let allCards = cards.slice();
    let choosenCards = [];
    if (cards.length < 5) {
      setError(
        "There is no chance to pick another 5 cards since we left with 2 cards"
      );
    } else {
      for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * allCards.length);
        choosenCards.push(allCards[index]);
        allCards.splice(index, 1);
      }
      setCards(allCards);
      setSelected(choosenCards);
    }
  };

  return (
    <Grid>
      <Slide direction="down" in={shuffle} mountOnEnter unmountOnExit>
        <Grid className={classes.cardsList}>
          {cards.map((card) => {
            return <Card key={shortid.generate()} card={card} />;
          })}
        </Grid>
      </Slide>
      <Grid className={classes.action}>
        <Button
          onClick={shuffle_fn}
          variant="contained"
          color="primary"
          style={{ marginRight: "20px" }}
        >
          Shuffle{" "}
        </Button>
        <Button onClick={cardHandler} variant="contained" color="secondary">
          Pick 5 Cards
        </Button>
      </Grid>
      {error && <Grid className={classes.error}>{error}</Grid>}
      <Slide direction="down" in={selected.length} mountOnEnter unmountOnExit>
        <Grid className={classes.choosenCards}>
          {selected.map((card) => {
            return (
              <Card selected={true} card={card} key={shortid.generate()} />
            );
          })}
        </Grid>
      </Slide>
    </Grid>
  );
}

export default DeckCards;
