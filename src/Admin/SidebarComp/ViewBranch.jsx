import React from "react";
import axiosInstance from "../../Helpers/AxiosInstance";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const ViewBranch = () => {
  let token = localStorage.getItem("token");
  let [branch, setBranch] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/branches/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBranch(data.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ width: "250px" }}>View branch</h1>
      <div
        style={{
          marginTop: "25px",
          marginLeft: "300px",
          gap: "10px",
          lineHeight: "1.8",
        }}
      >
        <table border={1}>
          <tr>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
            <th>Pincode</th>
            <th>Modify</th>
            <th>Add</th>
            <th>Delete</th>
          </tr>
          {branch.map((b, i) => {
            return (
              <tr key={i}>
                <td>{b.address}</td>
                <td>{b.city}</td>
                <td>{b.phone}</td>
                <td>{b.pincode}</td>
                <td>
                  <button>Modify</button>
                </td>
                <td>
                  <button>Add</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ViewBranch;
