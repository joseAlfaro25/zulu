import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/product/product.services";
import CardItem, { ICadItem } from "./cardItem/CardItem";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState<ICadItem[]>();
  const [searchParams] = useSearchParams();
  const product = async () => {
    const { data } = await getProduct();
    setData(data);
  };
  const filterData = () => {
    const params = searchParams.get("q");
    const filteredRows =
      data &&
      data.filter((row: ICadItem) => {
        return row.title.toLowerCase().includes(params as string);
      });
    return filteredRows;
  };
  console.log("GET", filterData());
  useEffect(() => {
    product();
  }, []);

  return (
    <div className="container_general">
      {filterData() &&
        filterData()?.map((e: ICadItem) => <CardItem {...e} key={e.id} />)}
    </div>
  );
};

export default Product;
