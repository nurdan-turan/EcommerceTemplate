import  { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";

import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


import Product from "../components/Product";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { products, error, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map(product => (
        <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
