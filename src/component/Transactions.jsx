import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transicationRequest } from "../thunk/allApi";

export default function Transactions() {
  const transication = useSelector((state) => state.getTransication.gettransication)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transicationRequest())
  }, [])
  return (
    <>
      <h1>Transication</h1>
      {transication.map((data) =>
        <li>{data.id}:{data.id}:{data.name}</li>
      )}
    </>
  )
}