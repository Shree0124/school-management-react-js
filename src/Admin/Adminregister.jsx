import React, { useState } from "react";
// import "./Components/register.css";
import axiosInstance from "../Helpers/AxiosInstance";
import { useNavigate } from "react-router";

const Adminregister = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
  });
  let { userName, email, password, dob, phone, gender } = data;

  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    let payload = { userName, email, password, dob, phone, gender };
    await axiosInstance.post("/admins/save", payload);

    alert("submited");
    navigate("/login");
  };

  return (
    <div className="forminput">
      <form action="" onSubmit={handleSubmit}>
        <table>
          <div id="heading">
            <h1>AdminRegister</h1>

            <br />
          </div>
          <div>
            <tr>
              <td>
                <label>USERNAME:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" id="email">
                  EMAIL:
                </label>
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
                <label htmlFor="" id="date">
                  DOB :
                </label>
              </td>
              <td>
                <input
                  type="date"
                  id="date"
                  name="dob"
                  value={dob}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">PASSWORD:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">PHONE:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={handledata}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" name="gender">
                  GENDER:
                </label>
              </td>
              <td id="gen">
                <div>
                  Male
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    className="g"
                    value="male"
                    onChange={handledata}
                  />
                </div>
                <div>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                    className="g"
                    onChange={handledata}
                  />
                </div>
              </td>
            </tr>
          </div>
          <br />
          <br />
          <div id="btn">
            <button>Submit</button>
          </div>
        </table>
      </form>
    </div>
  );
};

export default Adminregister;
