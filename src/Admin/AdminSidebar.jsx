import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="si">
      <h3>Admin dashboard</h3>
      <ol className="ol">
        <li>
          <Link className="li" to={"/admindashboard/addacademymanager"}>
            Add academy Manager
          </Link>
        </li>
        <li>
          <Link className="li" to={"/admindashboard/viewacademymanager"}>
            View Academy Manager
          </Link>
        </li>
        <li>
          <Link className="li" to={"/admindashboard/viewacademy"}>
            View Academy
          </Link>
        </li>
        <li>
          <Link className="li" to={"/admindashboard/viewbranch"}>
            View Branch
          </Link>
        </li>
        <li>
          <Link className="li" to={"/admindashboard/viewcourse"}>
            View Course
          </Link>
        </li>
        <li>
          <Link className="li">Home</Link>
        </li>
      </ol>
    </div>
  );
};

export default AdminSidebar;
