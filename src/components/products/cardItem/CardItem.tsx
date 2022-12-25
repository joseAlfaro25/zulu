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

const CardItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rate,
  count,
}: ICadItem) => {
  return (
    <Link to={`product/${id}`} className="link-card-item">
      <div className="wapper-card">
        <div>
          <img
            src={image}
            alt={`imagen de ${title}`}
            className="card-item-img"
          />
        </div>
        <div className="card-item-info">
          <p className="card-item-info__price">$ {price}</p>
          <p>{title}</p>
          <p>{description?.slice(0, 40)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
