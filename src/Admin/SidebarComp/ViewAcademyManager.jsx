import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/AxiosInstance";
import "./viewmanager.css";
import { Link } from "react-router-dom";

const ViewAcademyManager = () => {
  let token = localStorage.getItem("token");
  let [manager, setManager] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/academymanagers/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setManager(data.data);
    };
    fetchData();
  }, [token]);

  return (
    <>
      <div className="block">
        {manager.map((x, index) => {
          return (
            <>
              <div className="box" key={index}>
                <div id="desc">
                  <h3>NAME:{x.userName}</h3>
                  <h4>ID:{x.id}</h4>
                  <h4>ROLE:{x.role}</h4>
                  <h4>Email:{x.email}</h4>
                  <h4>DOB:{x.dob}</h4>
                  <h4>PHONE{x.phone}</h4>
                  <h4>Gender:{x.gender}</h4>

                  <div>
                    <button>
                      <Link
                        style={{ color: "black" }}
                        to={`/admindashboard/viewacademymanager/viewacademyeachmanager/${x.id}`}
                      >
                        View
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div></div>
    </>
  );
};
export default ViewAcademyManager;
