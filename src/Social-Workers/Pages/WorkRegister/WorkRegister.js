import React from "react";
import "./WorkRegister.css";
import { FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";

const WorkRegister = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuth();
  const onSubmit = (data) => {
    axios.post(
      "https://soacial-workers-server.herokuapp.com/workRegister",
      data
    );
    console.log(data);
    reset();
  };
  return (
    <div
      style={{ marginTop: "100px" }}
      className="container d-flex justify-content-center"
    >
      <div className="mb-5">
        <div className="text-center">
          <span className="fw-bold fs-1">
            S
            <span className="text-primary">
              <i className="fas fa-praying-hands"></i>
            </span>{" "}
            Workers
          </span>
        </div>
        <div className="shadow-lg p-5 rounded">
          <div>
            <h3 className="fw-bold pb-3">Register Social Worker</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              className="w-100 my-4 inputField"
              type="name"
              value={user.displayName}
              placeholder="Full Name"
              {...register("name")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              type="email"
              value={user.email}
              placeholder="Username Or Email"
              {...register("email")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              type="date"
              placeholder="Date 22-10-2021"
              {...register("date")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              as="textarea"
              placeholder="Description"
              {...register("description")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              type="text"
              placeholder="Which Events You Interest"
              {...register("interestEvent")}
              required
            />

            <input
              className="btn btn-primary w-100 mt-4"
              type="submit"
              value="Registration"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkRegister;
