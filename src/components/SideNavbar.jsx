import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function SideNavbar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [lastId, setLastId] = useState('')

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const clickedLink = (e) =>{
    console.log(e.target.id)

    if(lastId!=='')
    document.getElementById(lastId).style.backgroundColor = "white"
    setLastId(e.target.id)

    document.getElementById(e.target.id).style.backgroundColor = "lightblue"
  }

  return (
    <div className="drawer lg:drawer-open w-1/4 float-left sm:w-1/5 p-1">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-base-100 text-base-content">

        {/* {user && user.type === 'super-admin' ? (<></>) : (<></>)}
        {user && user.type === 'design-manager' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)} */}
          <li>
          <Link to="/">
            <img src={require("../resources/dashboard.png")} className="h-5 pl-2" /> Dashboard
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/material-symbols_folder-open-rounded.png")} className="h-5 pl-2" /> Job Details
          </Link>
          </li>
          <li>
          <Link to="/new-enquiry" id="job-enquiries" onClick={clickedLink} >
            <img src={require("../resources/tabler_report-search.png")} className="h-5 pl-2 after:bg-slate-500" /> Job Enquiries
          </Link>
          </li>
          <li>
          <Link to="/purchasing" id="purchasing" onClick={clickedLink}>
            <img src={require("../resources/majesticons_note-text-plus-line.png")} className="h-5 pl-2" /> Purchasing
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/tabler_report-search.png")} className="h-5 pl-2" /> Quotations
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/tabler_report-search (2).png")} className="h-5 pl-2" /> Designs
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/tabler_report-search (1).png")} className="h-5 pl-2" /> BOM
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/majesticons_note-text-plus-line (5).png")} className="h-5 pl-2" /> Manufacturing
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/majesticons_note-text-plus-line (4).png")} className="h-5 pl-2" /> QC
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/majesticons_note-text-plus-line (3).png")} className="h-5 pl-2" /> Installations
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/majesticons_note-text-plus-line (2).png")} className="h-5 pl-2" /> Employees
          </Link>
          </li>
          <li>
          <Link to="/">
            <img src={require("../resources/majesticons_note-text-plus-line (1).png")} className="h-5 pl-2" /> Clients
          </Link>
          </li>

          {user ? (
                
                  <li onClick={onLogout}>
          <a>
            <img src={require("../resources/ci_log-out.png")} className="h-5 pl-2" /> Logout
          </a>
          </li>
                
              ) : (<>
                <li>
                  <Link to="/register">
                    <FaSignInAlt />
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <FaUser />
                    Login
                  </Link>
                </li>
              </>)}
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
