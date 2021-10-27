import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const SignUp = () => {
  const { googleLogin } = UseAuth();
  return (
    <div>
      <div
        style={{ marginTop: "80px" }}
        className="container d-flex justify-content-center"
      >
        <div
          style={{ width: "670px", height: "457px" }}
          className="shadow-lg p-5 mt-5"
        >
          <div className="">
            <h3 className="fw-bold text-center mb-4 mt-5">Sign Up With</h3>

            <button
              onClick={googleLogin}
              className="btn rounded-pill border border-3 w-100 text-start"
            >
              <span>
                <img
                  className="ms-2 me-5"
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt=""
                />
              </span>
              <span className="fw-bold">Continue With Google</span>
            </button>
            <p className="fw-bold text-center mt-3">
              You Have An Account ? <Link to="/login"> Login</Link>
            </p>
            <div className="text-center">
              <button className="btn btn-outline-secondary py-0 rounded-pill">
                Admin Login ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
