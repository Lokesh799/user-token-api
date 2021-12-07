import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequest } from "../thunk/allApi";
import { setProductFilter } from "../actions";
import Dashbord from "./Dashbord";

export default function Product() {
  const products = useSelector((state) => state.getProduct.products.products)
  const filters = useSelector((state) => state.getProduct.products.filters)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch(setProductFilter({ [name]: value }));
  };

  useEffect(() => {
    const getProducts = () => {
      dispatch(productRequest(filters));
    };
    getProducts();
  }, [filters.limit, filters.page]);

  return (
    <>
      <Dashbord />
      <h1>product</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(data => (
                <tr>
                  <td key={data.id}>{data.name}</td>
                  <td >{data.id}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <select class="form-select" aria-label="Default select example" name="limit" value={filters.limit} onChange={handleChange}>
          <option selected>Open this select menu</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={6}>6</option>
        <option value={8}>8</option>
        <option value={10}>10</option>
      </select>
    </div>
    </>
  )
}