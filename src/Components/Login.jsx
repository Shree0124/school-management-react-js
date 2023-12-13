import React, { useState } from "react";
import "./register.css";
import axiosInstance from "../Helpers/AxiosInstance";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  let [data, setData] = useState({
    userEmail: "",
    password: "",
  });
  let { userEmail, password } = data;

  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    let payload = { userEmail, password };
    let { data } = await axiosInstance.post("/authenticate", payload);
    console.log(data);
    let token = data.token;
    let role = data.role;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      toast.success("login successfull",{position:"top-center"});
      navigate("/home");
    }
  };

  return (
    <div className="forminput">
      <form action="" onSubmit={handleSubmit}>
        <table>
          <div id="heading">
            <h1>Login form</h1>

            <br />
          </div>
          <div>
            <br />
            <br />
            <tr>
              <td>
                <label htmlFor="" id="userEmail">
                  EMAIL:
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="userEmail"
                  value={userEmail}
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
          </div>
          <br />
          <br />
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

export default Login;
