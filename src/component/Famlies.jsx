import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { familyRequest } from "../thunk/allApi";

export default function Family() {
  const family = useSelector((state) => state.getFamilies.families)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(familyRequest())
  }, [])
  return (
    <>
      <h1>Families</h1>
      {family.map((data) =>
        <li>{data.id}:{data.name}:{data.cost}</li>
      )}
    </>
  )
}