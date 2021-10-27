import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEvents = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/events", data);
    console.log(data);
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1 className="my-5">Set Event</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row row-cols-2">
            <div className="col col-12 col-md-6 col-lg-6">
              <Form.Label className="fw-bold" htmlFor="title">
                Event Title
              </Form.Label>
              <FormControl
                className="mb-5"
                id="title"
                type="text"
                placeholder="Event Title"
                {...register("event")}
                required
              />

              <Form.Label className="fw-bold" htmlFor="Description">
                Description
              </Form.Label>
              <Form.Control
                id="Description"
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Description"
                {...register("description")}
                required
              />
            </div>
            <div className="col col-12 col-md-6 col-lg-6">
              <Form.Label className="fw-bold" htmlFor="date">
                Event Date
              </Form.Label>
              <FormControl
                id="date"
                className="mb-5"
                type="date"
                {...register("date")}
                required
              />

              <Form.Label className="fw-bold" htmlFor="image">
                Upload Event Banner
              </Form.Label>
              <FormControl
                className="mb-3"
                id="image"
                type="url"
                placeholder="Image Url"
                {...register("img")}
                required
              />
              <Form.Control disabled type="file" size="lg" />
            </div>
          </div>
          <div className="text-end">
            <input
              className="btn btn-secondary mt-5"
              type="submit"
              value="Event Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
