import React from "react";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="d-flex justify-content-center align-items-center">
          <Banner />
        </div>
        <Events />
      </div>
    </div>
  );
};

export default Home;
