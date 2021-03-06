import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../thunk/userPostApi";
import { userRegister } from "../actions";

export default function Registration(props) {
  const dispatch = useDispatch();
  const userinformation = useSelector((state) => state.postUser.userData);

  const history = useHistory()

  const handleChange = (event) => {
    dispatch(userRegister({ ...userinformation, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userRequest(userinformation))
    history.push("/login")
  }

  const onAlreadyAccount = () => {
    localStorage.removeItem("token")
    history.push("/login")
  }

  return (
    <>
      <h1>Registration page</h1>
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card-body p-5">
                <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" name="email" onChange={handleChange} />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" name="password" onChange={handleChange} />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg" onSubmit={handleSubmit}>Register</button>
                    <button
                      onClick={onAlreadyAccount}
                      className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}