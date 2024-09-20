import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

function ProductList() {
  const { data, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <p>Loading..</p>;
  }
  if (error.length > 0) {
    return <p>{error}</p>;
  }
  return (
    <div>
      ProductList
      {data.map((singleData, index) => {
        return <p key={index}>{singleData.title}</p>;
      })}
    </div>
  );
}

export default ProductList;
