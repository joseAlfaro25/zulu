import React, { useEffect, useState } from "react";
import { ICadItem } from "../cardItem/CardItem";
import { getProductDetails } from "services/product/product.services";
import { useParams } from "react-router-dom";
import "./_ProductDetails.styles.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<ICadItem>();
  useEffect(() => {
    const product = async () => {
      const { data } = await getProductDetails(id as string);
      setData(data);
    };
    product();
  }, [id]);

  return (
    <div className="wapper-product-details container_general">
      <div className="product-details">
        <div className="product-details-img">
          <img
            className="product-details-img__container"
            src={data?.image}
            alt={`imagen de ${data?.title}`}
          />
        </div>
        <div className="product-details-info">
          <p className="product-details-info__title">{data?.title}</p>
          <p className="product-details-info__price">$ {data?.price}</p>
          <button className="product-details-info__button">Comprar</button>
        </div>
      </div>
      <div className="product-details-description">
        <p className="product-details-description__title">
          Descripcion del producto
        </p>
        <p className="product-details-description__text">{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
