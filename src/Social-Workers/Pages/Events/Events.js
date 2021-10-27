import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="container eventContainer">
      <Row xs={2} md={3} lg={4} className="d-flex justify-content-center">
        {events.map((event) => (
          <Col className="mb-4 cardContainer" key={event._id}>
            <Card
              border="info"
              className="p-0"
              style={{ borderRadius: "12px" }}
            >
              <Card.Img height="250px" variant="top" src={event.img} />
              <Card.Body
                className="bg-info text-white"
                style={{
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              >
                <Card.Title>{event.event}</Card.Title>
                <Card.Text className="ellipsis">{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Events;
