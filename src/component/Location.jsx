import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationRequest } from "../thunk/allApi";

export default function Location() {
  const location = useSelector((state) => state.getLocations.getlocation)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationRequest())
  }, [])
  return (
    <>
      <h1>Location</h1>
      {location.map((data) =>
        <li>{data.id}:{data.id}:{data.name}</li>
      )}
    </>
  )
}