import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="mb-5">
      <h1 style={{ paddingTop: "150px" }} className="fw-bold ">
        We Work To Keep Society Good
      </h1>

      <div className="d-flex justify-content-center">
        <InputGroup className="mt-5 w-75">
          <FormControl type="text" className="py-2" placeholder="Search..." />
          <Button variant="primary">Search</Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
