import React from "react";
import "./WorkRegister.css";
import { FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";

const WorkRegister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              placeholder="Full Name"
              {...register("name")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              placeholder="Username Or Email"
              {...register("email")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              placeholder="Date"
              {...register("date")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
              placeholder="Description"
              {...register("description")}
              required
            />
            <FormControl
              className="w-100 my-4 inputField"
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
