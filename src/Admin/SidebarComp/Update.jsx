import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../Helpers/AxiosInstance";

const Update = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let [user, setUser] = useState({
    userName: "",
    role: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
  });
  let { userName, email, password, dob, phone, gender } = user;
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data.data);
    };
    fetchData();
  }, []);
  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { userName, email, password, dob, phone, gender, id };
    let data = await axiosInstance.put("/academymanagers/update", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data);
    alert("updated");
    navigate("/ViewAcademyManager");
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
      <form action="" onSubmit={handleSubmit}>
        <table>
          <div id="heading">
            <h1>Update form</h1>

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

export default Update;
