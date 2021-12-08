import React from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function NavLink() {
  const token = useSelector((state) => state.loginUser.token);

  const history = useHistory()
  const onLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    history.push("/login")
    window.location.reload();
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {!token ? (
                <>
                  <li class="nav-link">
                    <Link className='link-primary' to='/registration'>Registartion</Link>
                  </li>
                  <li class="nav-link">
                    <Link className='link-primary' to='/login'>Login</Link>
                  </li>
                </>
              ) : (
                <>
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
                    <Link className='link-danger' to='/transaction'>Trasnsition</Link>
                  </li>
                  <button
                    onClick={onLogOut}
                    className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
                    Logout
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}
