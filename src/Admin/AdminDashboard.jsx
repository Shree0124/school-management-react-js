import React from "react";
import "./admindashboard.css";
import AdminSidebar from "./AdminSidebar";
import AdminMainbar from "./AdminMainbar";

const AdminDashboard = () => {
  return (
    <>
      <div className="dash">
        <div className="sidebar">
          <AdminSidebar />
        </div>
        <div className="mainbar">
          <AdminMainbar />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
