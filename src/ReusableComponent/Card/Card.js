import React from "react";
import Item from "../Item/Item";
import "./Card.scss";

const Card = ({ cardData }) => {
  const { status, title, type, imageUrl, contents, itemList } = cardData;
  return (
    <article className="card">
      <div className="cardImg">
        <img alt="cardImg" src={imageUrl} />
      </div>
      <div className="cardMain">
        <div className="status">
          <span className={status}>{status}</span>
        </div>
        <h3>{title}</h3>
        <div>
          <p>{contents}</p>
        </div>
      </div>
      {itemList &&
        itemList.map((item) => (
          <Item key={item.id} itemData={item} type={type} />
        ))}
    </article>
  );
};

export default Card;
