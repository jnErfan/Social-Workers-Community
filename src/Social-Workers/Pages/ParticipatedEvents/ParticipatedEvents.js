import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const ParticipatedEvents = () => {
  const history = useHistory();
  const [participateEvents, setParticipateEvents] = useState([]);
  const [bookingCancel, setBookingCancel] = useState("");
  const { user } = UseAuth();
  useEffect(() => {
    fetch(
      `https://soacial-workers-server.herokuapp.com/matchEvents/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingCancel(data);
        setParticipateEvents(data);
      });
  }, [bookingCancel]);

  const cancelEvent = (id) => {
    console.log(id);
    axios.delete(
      `https://soacial-workers-server.herokuapp.com/deleteBookingEvent/${id}`
    );
  };

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div>
        <h1 className="text-center">Participate Events</h1>
      </div>
      <Row xs={1} md={2} lg={2} className="mt-5 g-4">
        {participateEvents.map((events) => (
          <div className="card mb-3 col col-12 col-md-6 col-lg-6 border-0">
            <div
              style={{ borderRadius: "12px" }}
              className="row g-0  shadow-lg px-4 pb-2 pt-3 me-3 ms-3"
            >
              <div className="col-md-4">
                <img className="img-fluid w-100" src={events?.img} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title fw-bold">{events?.event}</h3>
                  <h5 className="card-text">
                    <small className="text-muted fw-bold">
                      {events?.date || "29 sep, 2020"}
                    </small>
                  </h5>
                  <div className="text-start mt-4 ms-5">
                    <button
                      onClick={() => cancelEvent(events._id)}
                      className="btn btn-outline-secondary rounded px-4 py-2 ms-5"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
