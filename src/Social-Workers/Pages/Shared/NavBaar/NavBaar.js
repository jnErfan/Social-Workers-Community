import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const NavBaar = () => {
  const { user, logOut } = UseAuth();
  const history = useHistory();
  const [scrollChange, setScrollChange] = useState(false);
  const defaultUserImage = "https://i.ibb.co/hM9DLXG/avt2.png";
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
              S<i className="fas fa-praying-hands text-primary"></i>Workers
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
                to="/workRegister"
              >
                Register
              </NavLink>
            </Nav>
          </div>
          <div className="">
            {user?.email === "gamechainger1@gmail.com" ||
            user?.email === "j.n.erfan420@gmail.com" ? (
              <NavLink
                style={{ color: "black" }}
                className="me-3 py-1 px-3 rounded-pill text-decoration-none fw-bold"
                to="/adminPanel"
              >
                ADMIN{" "}
                <img
                  className="me-3"
                  src="https://img.icons8.com/fluency/48/000000/admin-settings-male.png"
                  alt=""
                />
              </NavLink>
            ) : (
              <span>{""}</span>
            )}

            {user ? (
              <>
                <span>
                  <img
                    width="45px"
                    className="border rounded-circle me-3"
                    src={user?.photoURL || defaultUserImage}
                    alt=""
                  />
                </span>
                <span className="me-3">{user.displayName}</span>
                <button
                  onClick={logOut}
                  className="btn btn-outline-secondary rounded-pill me-3 py-1"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                {" "}
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
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBaar;
