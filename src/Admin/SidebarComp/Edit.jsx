import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../Helpers/AxiosInstance";
import { useState } from "react";

const Edit = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let [academy, setAcademy] = useState({
    academyName: "",
    email: "",
    description: "",
    contact: "",
  });

  let { academyName, email, description, contact } = academy;
  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAcademy({ ...academy, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { academyName, email, description, contact, id };
    console.log(payload);
    let data = await axiosInstance.put(`/academies/update`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    alert("submited");
    navigate("/admindashboard/viewacademy");
  };

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academies/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAcademy(data.data);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        border: "2px solid black",
        borderRadius: "5px",
        marginLeft: "300px",
        marginTop: "80px",
        "box-shadow": "6px 6px 6px black",
        "background-image": " linear-gradient(lightblue 01%, white 95%)",
      }}
    >
      <h1>EDIT ACADEMY</h1>
      <form action="" onSubmit={handleSubmit}>
        <table>
          <div>
            <tr>
              <td>
                <label htmlFor="">Academy Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="academyName"
                  value={academyName}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Description</label>
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Email</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">contact</label>
              </td>
              <td>
                <input
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={handledata}
                />
              </td>
            </tr>
            <br />
            <br />
            <button>submit</button>
          </div>
        </table>
      </form>
    </div>
  );
};

export default Edit;
