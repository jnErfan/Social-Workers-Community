import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`https://soacial-workers-server.herokuapp.com/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  const eventBooking = (eventDetail) => {
    const userEmail = user.email;
    eventDetail.email = userEmail;
    axios.post(
      "https://soacial-workers-server.herokuapp.com/booking",
      eventDetail
    );
    console.log(eventDetail);
  };

  const eventDetail = event?.[0];
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <p className="text-center">ID: {eventDetail?._id}</p>
      <div className="my-3 text-center">
        <Link to="/events">
          <button className="btn btn-secondary px-4">Back</button>
        </Link>
      </div>
      <Row xs={1} md={1} lg={1}>
        <div className="col col-12 col-md-6 col-lg-6">
          <h1 className="fw-bold mb-3 text-primary">{eventDetail?.event}</h1>
          <h5 className="fw-bold my-3">{eventDetail?.description}</h5>
          <h4 className="fw-bold my-3">
            {eventDetail?.date || "Date Did't Given"}
          </h4>
        </div>
        <div className="col col-12 col-md-6 col-lg-6">
          <img className="w-75" src={eventDetail?.img} alt="" />
        </div>
      </Row>
      <div className="mt-5 d-flex justify-content-around">
        <button className="btn btn-danger">Remove</button>
        <button
          onClick={() => eventBooking(eventDetail)}
          className="btn btn-primary"
        >
          Booking
        </button>
        <button className="btn btn-success">Edit</button>
      </div>
    </div>
  );
};

export default EventDetails;
