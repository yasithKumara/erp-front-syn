import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import dashboardIcon from '../resources/dashboard.svg';
import jobsIcon from '../resources/jobs.svg';
import inquiryIcon from '../resources/inquiry.svg';
import purchasingIcon from '../resources/purchasing.svg';
import quotationsIcon from '../resources/quotations.svg';
import designsIcon from '../resources/designs.svg';
import bomIcon from '../resources/bom.svg';
import manufacturingIcon from '../resources/manufacturing.svg';
import qcIcon from '../resources/qc.svg';
import installationsIcon from '../resources/installations.svg';
import employeesIcon from '../resources/employees.svg';
import clientsIcon from '../resources/clients.svg';
import logoutIcon from '../resources/logout.svg';

function SideNavbar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [lastId, setLastId] = useState('')
  const [activeLink, setActiveLink] = useState('');

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const clickedLink = (e) => {
    const clickedLinkId = e.target.id;
    setActiveLink(clickedLinkId);
  }

  return (<>
    <div className="drawer-content-custom ">
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden bg-white"
        > :: </label>
      </div>
    <div className="drawer lg:drawer-open w-14 float-left lg:w-1/4 z-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden p-2 rounded-full"
        > :: </label>
      </div> */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-base-100 text-base-content">

          {/* {user && user.type === 'super-admin' ? (<></>) : (<></>)}
        {user && user.type === 'design-manager' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)} */}
          <li>
            <Link to="/" id="dashboard" onClick={clickedLink} className={`font-medium ${activeLink === 'dashboard' ? 'active-link' : ''}`}>
              <img src={dashboardIcon} className={` ${activeLink === 'dashboard' ? 'active-icon' : ''} `} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/jobs" id="jobs" onClick={clickedLink} className={`font-medium ${activeLink === 'jobs' ? 'active-link' : ''}`}>
              <img src={jobsIcon} className={` ${activeLink === 'jobs' ? 'active-icon' : ''} `} /> Job Details
            </Link>
          </li>
          <li>
            <Link to="/new-enquiry" id="job-enquiries" onClick={clickedLink} className={`font-medium ${activeLink === 'job-enquiries' ? 'active-link' : ''}`}>
              <img src={inquiryIcon} className={` ${activeLink === 'job-enquiries' ? 'active-icon' : ''} `} /> Job Enquiries
            </Link>
          </li>
          <li>
            <Link to="/purchasing" id="purchasing" onClick={clickedLink} className={`font-medium ${activeLink === 'purchasing' ? 'active-link' : ''}`}>
              <img src={purchasingIcon} className={` ${activeLink === 'purchasing' ? 'active-icon' : ''} `} /> Purchasing
            </Link>
          </li>
          <li>
            <Link to="/" id="quotations" onClick={clickedLink} className={`font-medium ${activeLink === 'quotations' ? 'active-link' : ''}`}>
              <img src={quotationsIcon} className={`${activeLink === 'quotations' ? 'active-icon' : ''} `} /> Quotations
            </Link>
          </li>
          <li>
            <Link to="/" id="designs" onClick={clickedLink} className={`font-medium ${activeLink === 'designs' ? 'active-link' : ''}`}>
              <img src={designsIcon} className={` ${activeLink === 'designs' ? 'active-icon' : ''} `} /> Designs
            </Link>
          </li>
          <li>
            <Link to="/" id="bom" onClick={clickedLink} className={`font-medium ${activeLink === 'bom' ? 'active-link' : ''}`}>
              <img src={bomIcon} className={` ${activeLink === 'bom' ? 'active-icon' : ''} `} /> BOM
            </Link>
          </li>
          <li>
            <Link to="/" id="manufacturing" onClick={clickedLink} className={`font-medium ${activeLink === 'manufacturing' ? 'active-link' : ''} `}>
              <img src={manufacturingIcon} className={`h-10 w-10 ml-[-5px]  ${activeLink === 'manufacturing' ? 'active-icon' : ''} `} /> Manufacturing
            </Link>
          </li>
          <li>
            <Link to="/" id="qc" onClick={clickedLink} className={`font-medium ${activeLink === 'qc' ? 'active-link' : ''}`}>
              <img src={qcIcon} className={`h-10 w-10 ml-[-5px] ${activeLink === 'qc' ? 'active-icon' : ''} `} /> QC
            </Link>
          </li>
          <li>
            <Link to="/" id="installations" onClick={clickedLink} className={`font-medium ${activeLink === 'installations' ? 'active-link' : ''}`}>
              <img src={installationsIcon} className={`h-10 w-10 ml-[-5px]  ${activeLink === 'installations' ? 'active-icon' : ''} `} /> Installations
            </Link>
          </li>
          <li>
            <Link to="/" id="employees" onClick={clickedLink} className={`font-medium ${activeLink === 'employees' ? 'active-link' : ''}`}>
              <img src={employeesIcon} className={`h-10 w-10 ml-[-5px]  ${activeLink === 'employees' ? 'active-icon' : ''} `} /> Employees
            </Link>
          </li>
          <li>
            <Link to="/" id="clients" onClick={clickedLink} className={`font-medium ${activeLink === 'clients' ? 'active-link' : ''}`}>
              <img src={clientsIcon} className={`h-10 w-10 ml-[-5px] ${activeLink === 'clients' ? 'active-icon' : ''} `} /> Clients
            </Link>
          </li>

          {user ? (

            <li onClick={onLogout} className="font-medium">
              <a>
                <img src={logoutIcon} className="ml-[-2px]" /> Logout
              </a>
            </li>

          ) : (<>
            <li>
              <Link to="/register" className="font-medium">
                <FaSignInAlt />
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="font-medium">
                <FaUser />
                Login
              </Link>
            </li>
          </>)}
        </ul>
      </div>
    </div>
    </>
  );
}

export default SideNavbar;
