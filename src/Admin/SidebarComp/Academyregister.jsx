import React, { useState } from "react";
import axiosInstance from "../../Helpers/AxiosInstance";
import { useNavigate, useParams } from "react-router";

const Academyregister = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  console.log(id);
  let token = localStorage.getItem("token");
  let [data, setData] = useState({
    academyName: "",
    email: "",
    description: "",
    contact: "",
  });
  let { academyName, email, description, contact } = data;

  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { academyName, email, description, contact };
    console.log(payload);
    let data = await axiosInstance.post(
      `/academies/saveacademy?managerId=${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    alert("submited");
    navigate("/admindashboard/viewacademy");
  };
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
      <h1>Academy Register</h1>
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

export default Academyregister;
