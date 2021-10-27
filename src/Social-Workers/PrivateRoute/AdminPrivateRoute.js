import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import { Spinner } from "react-bootstrap";

const AdminPrivateRoute = ({ children, rest }) => {
  const { user, isLoading } = UseAuth();
  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "200px" }}
      >
        <Spinner
          style={{ padding: "100px" }}
          animation="border"
          variant="info"
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email === "gamechainger1@gmail.com" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/adminLogin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
