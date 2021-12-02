import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequest } from "../thunk/getProductApi";

export default function Product() {
  const products = useSelector((state) => state.getProduct.products)
 const dispatch=useDispatch();

useEffect(()=>{
dispatch(productRequest())
},[])

  return (
    <>
      <h1>Product</h1>
      {products.map((data)=>
      <li>{data.id}:{data.name}:{data.cost}</li>
      )}
    </>
  )
}