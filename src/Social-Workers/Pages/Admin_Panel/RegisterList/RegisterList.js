import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const RegisterList = () => {
  const history = useHistory();
  const [registerList, setRegisterList] = useState([]);
  const [deleteRegister, setDeleteRegister] = useState("");

  useEffect(() => {
    fetch("https://soacial-workers-server.herokuapp.com/workRegister")
      .then((res) => res.json())
      .then((data) => {
        setDeleteRegister(data);
        setRegisterList(data);
      });
  }, [deleteRegister]);
  const deleteWorker = (id) => {
    axios
      .delete(`https://soacial-workers-server.herokuapp.com/registerList/${id}`)
      .then((result) => {
        if (result.data.deletedCount) {
          console.log(result.data.deletedCount);
          alert("Delete Successful");
        }
      });
  };
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
            {registerList.map((register) => (
              <tr className="border-0" key={register._id}>
                <td className="py-4 ps-5 border-0">{register.name}</td>
                <td className="py-4 ps-5 border-0">{register.email}</td>
                <td className="py-4 ps-5 border-0">{register.date}</td>
                <td className="py-4 ps-5 border-0">{register.interestEvent}</td>
                <td className="py-4 ps-5 border-0">
                  <button
                    onClick={() => deleteWorker(`${register._id}`)}
                    className="btn bg-danger p-1 rounded"
                  >
                    <i className="far fa-trash-alt fs-4 text-white"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="text-center my-5">
        <button
          className="btn btn-secondary px-4"
          onClick={() => history.push("/adminPanel")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RegisterList;
