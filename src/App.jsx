import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Adminregister from "./Admin/Adminregister";
import "./global.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ServiceRoutes/ProtectedRoute";
import AdminDashboard from "./Admin/AdminDashboard";
import AcademyManagerRegister from "./Admin/SidebarComp/AcademyManagerRegister";
import ViewAcademyManager from "./Admin/SidebarComp/ViewAcademyManager";
import ViewAcademy from "./Admin/SidebarComp/ViewAcademy";
import ViewBranch from "./Admin/SidebarComp/ViewBranch";
import ViewCourse from "./Admin/SidebarComp/ViewCourse";
import About from "./Components/About";
import View from "./Admin/SidebarComp/View";
import Update from "./Admin/SidebarComp/Update";
import Academyregister from "./Admin/SidebarComp/Academyregister";
import Edit from "./Admin/SidebarComp/Edit";
import BranchRegister from "./Admin/SidebarComp/Branch/BranchRegister";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminregister" element={<Adminregister />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route
              path="/admindashboard/addacademymanager"
              element={<AcademyManagerRegister />}
            />
            <Route
              path="/admindashboard/viewacademymanager"
              element={<ViewAcademyManager />}
            />
            <Route
              path="/admindashboard/viewacademy"
              element={<ViewAcademy />}
            />
            <Route path="/admindashboard/viewbranch" element={<ViewBranch />} />
            <Route path="/admindashboard/viewcourse" element={<ViewCourse />} />
            <Route
              path="/admindashboard/viewacademymanager/viewacademyeachmanager/:id"
              element={<View />}
            />
            <Route
              path="/admindashboard/viewacademymanager/update/:id"
              element={<Update />}
            />
            <Route
              path="/admindashboard/viewacademymanager/academyregister/:id"
              element={<Academyregister />}
            />
            <Route
              path="/admindashboard/viewacademy/edit/:id"
              element={<Edit />}
            />
            <Route
              path="/admindashboard/branchregister/:id"
              element={<BranchRegister />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
