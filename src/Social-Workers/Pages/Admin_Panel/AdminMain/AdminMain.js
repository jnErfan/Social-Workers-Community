import React from "react";
import { Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddEvents from "../AddEvents/AddEvents";

const AdminMain = () => {
  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div className="">
        <Row xs={1} md={2} lg={2}>
          <div className="col col-12 col-md-4 col-lg-2">
            <Navbar bg="light" expand={false}>
              <Container fluid>
                <p>
                  <i className="far fa-calendar-plus"></i> See ALL
                </p>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      <span className="fw-bold fs-2">
                        S
                        <span className="text-primary">
                          <i className="fas fa-praying-hands"></i>
                        </span>{" "}
                        Workers
                      </span>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink
                        style={{ color: "black" }}
                        activeStyle={activeStyle}
                        className="py-1 px-3 text-decoration-none fw-bold"
                        to="/addEvents"
                      >
                        <i className="far fa-calendar-plus fs-4 me-2" /> Add
                        Event
                      </NavLink>
                      <br />
                      <NavLink
                        style={{ color: "black" }}
                        activeStyle={activeStyle}
                        className="py-1 px-3 text-decoration-none fw-bold"
                        to="/registerList"
                      >
                        <i className="far fa-list-alt fs-4 me-2"></i> Workers
                        Register List
                      </NavLink>
                      <br />
                      <NavLink
                        style={{ color: "black" }}
                        activeStyle={activeStyle}
                        className="py-1 px-3 text-decoration-none fw-bold"
                        to="/participated"
                      >
                        <i className="far fa-calendar-alt fs-4 me-2"></i>{" "}
                        Participate Events Booking
                      </NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
          <div className="col col-12 col-md-8 col-lg-10">
            <h4 className="text-end fw-bold">
              <span className="text-primary">ADMIN</span> PANEL
            </h4>
            <div style={{ marginTop: "-80px" }}>
              <AddEvents />
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default AdminMain;
