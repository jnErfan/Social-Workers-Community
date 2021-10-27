import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children, rest }) => {
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
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
