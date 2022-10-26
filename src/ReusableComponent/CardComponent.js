import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./CardComponent.scss";

const CardComponent = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/cardData.json")
      .then((response) => response.json())
      .then((data) => setCardData(data.data));
  }, []);

  return (
    <div className="cardList">
      {cardData.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  );
};

export default CardComponent;
