import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { locationRequest } from "../thunk/allApi";

export default function Location() {
  const location = useSelector((state) => state.getLocations.getLocation)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationRequest())
  }, [dispatch])

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
            </tr>
          </thead>
          <tbody>
            {
              location.map(data => (
                <tr>
                  <td key={data.id}>{data.id}</td>
                  <td >{data.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}