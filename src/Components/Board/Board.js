import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Board.css";
import back from "../../assets/images/back.jpg";
import balos from "../../assets/images/balos-beach.jpg";
import torre from "../../assets/images/beach-of-torregorda.jpg";
import evening from "../../assets/images/evening-beach.jpg";
import rock from "../../assets/images/rock-beach.jpg";
import sunny from "../../assets/images/sunny-beach.jpg";
import sunrise from "../../assets/images/sunrise-rock-beach.jpg";
import { useDispatch } from "react-redux";

const Board = (props) => {
  const dispatch = useDispatch();
  const beachCards = buildCards();
  const [cards, setCards] = useState(beachCards);
  const [score, setScore] = useState(0);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const onCardClick = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
      dispatch({ type: "INCREASE_SCORE", payload: 1 });

      console.log("cards", cards);
      console.log("checkers", checkers);
      console.log("completed", completed);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      console.log("cards", cards);
      console.log("checkers", checkers);
      console.log("completed", completed);
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped:
        checkers.find((c) => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed]);

  return (
    <div className="Board">
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
};

export default Board;
function buildCards() {
  let id = 0;
  const images = { balos, torre, evening, rock, sunny, sunrise };
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      back,
      frontImg: images[item],
      flipped: false,
    });
    return [...result, getCard(), getCard()];
  }, []);
  return shuffle(cards);
}

function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    let copyCurrent = { ...arr[i] };
    let copyRandom = { ...arr[randomIdx] };
    arr[i] = copyRandom;
    arr[randomIdx] = copyCurrent;
  }
  return arr;
}
