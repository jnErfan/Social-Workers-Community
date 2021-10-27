import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBaar = () => {
  const history = useHistory();
  const [scrollChange, setScrollChange] = useState(false);

  const onScrollHeader = () => {
    window.scrollY >= 50 ? setScrollChange(true) : setScrollChange(false);
  };
  window.addEventListener("scroll", onScrollHeader);

  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div>
      <Navbar
        fixed="top"
        className={scrollChange ? "bg-white" : "bg-transparent"}
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/home">
            <span className="fw-bold fs-4">
              S<i className="fas fa-praying-hands"></i>Workers
            </span>
          </Navbar.Brand>
          <div className="">
            <Nav className="me-auto">
              <NavLink
                style={{ color: "black" }}
                activeStyle={activeStyle}
                className="me-3 py-1 px-3 rounded-pill text-decoration-none fw-bold"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={{ color: "black" }}
                activeStyle={activeStyle}
                className="me-3 py-1 px-3 rounded-pill text-decoration-none fw-bold"
                to="/events"
              >
                Events
              </NavLink>
              <NavLink
                style={{ color: "black" }}
                activeStyle={activeStyle}
                className="me-3 py-1 px-3 rounded-pill text-decoration-none fw-bold"
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                style={{ color: "black" }}
                activeStyle={activeStyle}
                className="me-3 py-1 px-3 rounded-pill text-decoration-none fw-bold"
                to="/about"
              >
                About
              </NavLink>
            </Nav>
          </div>
          <div className="">
            <span>
              <img
                width="45px"
                className="me-3 border rounded-circle"
                src="https://i.ibb.co/hM9DLXG/avt2.png"
                alt=""
              />
            </span>
            <span>J.N.Erfan</span>
            <button className="btn btn-outline-secondary rounded-pill mx-3 py-1">
              Log Out
            </button>
            <button
              onClick={() => history.push("/login")}
              className="btn btn-outline-secondary rounded-pill mx-3 py-1"
            >
              Login
            </button>
            <button
              onClick={() => history.push("/signup")}
              className="btn btn-secondary rounded-pill py-1"
            >
              Sign Up
            </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBaar;
