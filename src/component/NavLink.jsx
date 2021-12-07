import React from "react";
import { Link } from 'react-router-dom';


export default function navLink() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-link">
                <Link className='link-primary' to='/registration'>Registartion</Link>
              </li><br/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
