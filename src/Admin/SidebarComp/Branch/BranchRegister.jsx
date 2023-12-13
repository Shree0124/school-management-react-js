import React, { useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../../Helpers/AxiosInstance";

const BranchRegister = () => {
  let { id } = useParams();
  // console.log(id);
  // let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const [branch, setBranch] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: "",
  });
  let { address, city, phone, pincode } = branch;
  let handledata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBranch({ ...branch, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { address, city, phone, pincode };
    console.log(payload);
    let data = await axiosInstance.post(`/branches/save?aid=${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    alert("submited");
    // navigate("/admindashboard/viewbranch");
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
      <h1 style={{ width: "200px" }}>Brach register</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={handledata}
        />{" "}
        <br />
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handledata}
        />{" "}
        <br />
        <label htmlFor="">phone:</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handledata}
        />{" "}
        <br />
        <label htmlFor="">pincode:</label>
        <input
          type="number"
          name="pincode"
          value={pincode}
          onChange={handledata}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BranchRegister;
