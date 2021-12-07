import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { familyRequest } from "../thunk/allApi";
import Dashbord from "./Dashbord";

export default function Family() {
  const family = useSelector((state) => state.getFamilies.families)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(familyRequest())
  }, [dispatch])
  return (
    <>
      <Dashbord/>
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
              family.map(data => (
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