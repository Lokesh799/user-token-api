import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

export default function Dashbord() {
  return (
    <>
      <h1>Welcome To Dashbord</h1>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-link">
                <Link className='link-primary' to='/product'>Product</Link>
              </li><br />
              <li class="nav-link">
                <Link className='link-info' to='/location'>Location</Link>
              </li>
              <li class="nav-link">
                <Link className='link-warnig' to='/famlies'>Families</Link>
              </li>
              <li class="nav-link">
                <Link className='link-danger' to='/transactions'>Trasnsition</Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          // onClick={onLogOut}
          className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </nav>
    </>
  )
}
