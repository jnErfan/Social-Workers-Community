import React from "react";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
const AdminLogin = () => {
  const { setEmail, setPassword, setUser, adminLoginButton, error } = UseAuth();
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
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
