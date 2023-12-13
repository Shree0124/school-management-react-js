import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../../Helpers/AxiosInstance";
import { Link } from "react-router-dom";

const View = () => {
  let token = localStorage.getItem("token");
  let { id } = useParams();
  let [detail, setDetails] = useState({
    userName: "",
    role: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDetails(data.data);
      console.log(data.data);
    };
    fetchdata();
  }, []);

  let handleDelete = (id) => {
    axiosInstance.delete(`/academymanagers/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("deleted");
    window.location.assign("/admindashboard/viewacademymanager");
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
      <h1>Manager detail</h1>
      <h3>Name:{detail.userName}</h3>
      <h3>DOB:{detail.dob}</h3>
      <h3>PHONE:{detail.phone}</h3>
      <h3>Gender:{detail.gender}</h3>
      <h3>EMAIL:{detail.email}</h3>
      <h4 style={{ marginLeft: "58px" }}>{detail.role}</h4>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <button>
          <Link
            style={{ color: "black" }}
            to={`/admindashboard/viewacademymanager/update/${detail.id}`}
          >
            UPDATE
          </Link>
        </button>
        <button>
          <Link
            style={{ color: "black" }}
            to={`/admindashboard/viewacademymanager/academyregister/${detail.id}`}
          >
            Add
          </Link>{" "}
        </button>
        <button
          onClick={() => {
            handleDelete(detail.id);
          }}
        >
          <Link style={{ color: "black" }}>DELETE</Link>
        </button>
      </div>
    </div>
  );
};

export default View;
