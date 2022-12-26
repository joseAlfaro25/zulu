import React from "react";
import "./_CardItem.styles.scss";
import { Link } from "react-router-dom";

export interface ICadItem {
  id: number;
  rate: number;
  price: number;
  title: string;
  count: number;
  image: string;
  category: string;
  description: string;
}

const CardItem = ({ id, title, price, image }: ICadItem) => {
  return (
    <Link to={`/api/items/${id}`} className="link-card-item">
      <div className="wapper-card">
        <div className="card-item-img">
          <img
            src={image}
            alt={`imagen de ${title}`}
            className="card-item-img__container"
          />
        </div>
        <div className="card-item-info">
          <p className="card-item-info__price">$ {price}</p>
          <p className="card-item-info__title">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
