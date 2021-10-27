import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
const AdminLogin = () => {
  const {
    setEmail,
    setPassword,
    setUser,
    adminLoginButton,
    googleLogin,
    error,
  } = UseAuth();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const redirect = "/adminPanel";
  const onSubmit = (data) => {
    setEmail(data.email);
    setPassword(data.password);
    adminLoginButton().then((result) => {
      setUser(result?.user);
      history.push(redirect);
    });
  };

  const loginGoogle = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      history.push(redirect);
    });
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div className="d-flex justify-content-center">
        <div className="shadow-lg p-5 rounded">
          <h1 className="text-center mx-5 fw-bold">
            <span style={{ color: "orangered" }}>ADMIN</span> PANEL
          </h1>
          <p className="text-center text-secondary mb-5">
            <small> Social Workers Community Admin</small>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              className="my-3"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <FormControl
              className="mt-3 mb-1"
              type="password"
              placeholder="Password"
              {...register("password")}
              required
            />
            <p className="mt-0 text-danger">
              <small>{error}</small>
            </p>
            <input
              style={{ backgroundColor: "orangered" }}
              className="btn w-100 text-light"
              type="submit"
              value="Login"
            />
            <div className="text-center my-3">
              <p className="text-secondary">__________ Or __________</p>
            </div>
          </form>
          <div className="text-center mt-4">
            <button
              onClick={loginGoogle}
              className="btn rounded-pill border border-1"
            >
              <span>
                <img
                  className="mx-2 me-5"
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt=""
                />
              </span>
              <span className="fw-bold me-3"> Google Admin SignIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
