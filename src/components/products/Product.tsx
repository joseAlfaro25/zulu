import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/product/product.services";
import CardItem, { ICadItem } from "./cardItem/CardItem";
import { useSearchParams } from "react-router-dom";
import NoResult from "components/shared/noResult/NoResult";

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
    const dataEnd = params === "" ? [] : filteredRows;
    return dataEnd;
  };
  const dataProduct = filterData();
  useEffect(() => {
    product();
  }, []);

  return (
    <div className="container_general">
      {dataProduct && dataProduct?.length > 0 ? (
        filterData() &&
        filterData()?.map((e: ICadItem) => <CardItem {...e} key={e.id} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default Product;
