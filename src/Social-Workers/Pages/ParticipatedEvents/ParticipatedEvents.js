import React from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ParticipatedEvents = () => {
  const history = useHistory();
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div>
        <h1 className="text-center">Participate Events</h1>
      </div>
      <Row xs={1} md={2} lg={2} className="mt-5 g-4">
        <div className="card mb-3 col col-12 col-md-6 col-lg-6 border-0">
          <div
            style={{ borderRadius: "12px" }}
            className="row g-0  shadow-lg px-4 pb-2 pt-3 me-3 ms-3"
          >
            <div className="col-md-4">
              <img
                className="img-fluid w-100"
                src="https://i.ibb.co/BBJCTs8/extra-Volunteer.png"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title fw-bold">Humanity More</h3>
                <h5 className="card-text">
                  <small className="text-muted fw-bold">29 sep, 2020</small>
                </h5>
                <div className="text-start mt-4 ms-5">
                  <button className="btn btn-outline-secondary rounded px-4 py-2 ms-5">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <div className="text-center my-5">
        <button
          className="btn btn-secondary px-4"
          onClick={() => history.push("/adminPanel")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ParticipatedEvents;
