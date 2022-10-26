import React from "react";
import "./Item.scss";

const Item = ({ itemData, type }) => {
  const { price, name, imageUrl } = itemData;
  //type에 따라 다르게 주기 - list, card 다르게 주기
  return (
    <ul>
      <li className={"item " + type}>
        <img alt="item" src={imageUrl} />
        <div className="content">
          <div>
            <p>{name}</p>
            <p className="price">{price}원</p>
          </div>
          <button className="button" />
        </div>
      </li>
    </ul>
  );
};

export default Item;
