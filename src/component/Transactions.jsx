import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transicationRequest } from "../thunk/allApi";
import Dashbord from "./Dashbord";

export default function Transactions() {
  const transication = useSelector((state) => state.getTransication.gettransication)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transicationRequest())
  }, [dispatch])
  return (
    <>
      <Dashbord />
      <h1>Transication</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Cost</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              transication.map(data => (
                <tr>
                  <td key={data.id}>{data.id}</td>
                  <td >{data.cost}</td>
                  <td >{data.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}