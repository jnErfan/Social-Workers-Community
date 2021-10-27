import React from "react";
import { Table } from "react-bootstrap";

const RegisterList = () => {
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="text-center">
        <h1 className="fw-bold">Register List</h1>
      </div>
      <div
        style={{ borderRadius: "15px" }}
        className="d-flex justify-content-center mt-5 shadow-lg py-5"
      >
        <Table bordered hover responsive="md">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="px-5 py-3 border-0 fw-normal">Name</th>
              <th className="px-5 py-3 border-0 fw-normal">Email ID</th>
              <th className="px-5 py-3 border-0 fw-normal">Register Date</th>
              <th className="px-5 py-3 border-0 fw-normal">Interested List</th>
              <th className="px-5 py-3 border-0 fw-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-0">
              <td className="py-4 ps-5 border-0">J.N.Erfan</td>
              <td className="py-4 ps-5 border-0">j.n.erfan@gmail.com</td>
              <td className="py-4 ps-5 border-0">22-10-2021</td>
              <td className="py-4 ps-5 border-0">Stuffed Animals</td>
              <td className="py-4 ps-5 border-0">
                <button className="btn bg-danger p-1 rounded">
                  <i className="far fa-trash-alt fs-4 text-white"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegisterList;
