import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/product/product.services";
import CardItem, { ICadItem } from "./cardItem/CardItem";

const Product = () => {
  const [data, setData] = useState<ICadItem[]>();
  const product = async () => {
    const { data } = await getProduct();
    setData(data);
  };
  useEffect(() => {
    product();
  }, []);

  return (
    <div className="container_general">
      {data && data?.map((e: ICadItem) => <CardItem {...e} key={e.id} />)}
    </div>
  );
};

export default Product;
