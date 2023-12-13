import React from "react";
import axiosInstance from "../../Helpers/AxiosInstance";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewAcademy = () => {
  let token = localStorage.getItem("token");
  let [academy, setAcademy] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/academies/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setAcademy(data.data);
    };
    fetchData();
  }, [token]);

  let handleDelete = (id) => {
    axiosInstance.delete(`/academies/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("deleted");
    window.location.assign("/admindashboard/viewacademy");
  };
  return (
    <div className="table">
      <h1 style={{ width: "200px" }}> view Academy</h1>

      <div
        style={{
          marginTop: "25px",
          marginLeft: "250px",
          gap: "10px",
          lineHeight: "1.8",
        }}
      >
        <table border={1}>
          <tr>
            <th>AcademyName</th>
            <th>Email</th>
            <th>contact</th>
            <th>description</th>
            <th>Add Brach</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {academy.map((y, i) => {
            return (
              <tr key={i}>
                <td>{y.academyName}</td>
                <td>{y.email}</td>
                <td>{y.contact}</td>
                <td>{y.description}</td>
                <td>
                  <button>
                    <Link
                      style={{ color: "black" }}
                      to={`/admindashboard/branchregister/${y.id}`}
                    >
                      Add
                    </Link>{" "}
                  </button>
                </td>
                <td>
                  <button>
                    <Link
                      style={{ color: "black" }}
                      to={`/admindashboard/viewacademy/edit/${y.id}`}
                    >
                      Edit
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(y.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ViewAcademy;
