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
  // const location = useLocation();

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
    <div className="drawer lg:drawer-open w-14 float-left lg:w-1/4 z-10 block">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden p-2 rounded-full"
        > :: </label>
      </div> */}
      <div className="drawer-side p-1 ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 text-base-content px-6 rounded-lg">
        {/* {user && user.type === 'super-admin' ? (<></>) : (<></>)}
        {user && user.type === 'design-manager' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)}
        {user && user.type === '' ? (<></>) : (<></>)} */}

          <li className="p-[2px]">
            <Link to="/dashboard" id="dashboard" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'dashboard' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'dashboard' ? '' : 'hidden'} bg-[#5c4ec9] `}></div>  
            <img src={dashboardIcon} className={`px-2 ${activeLink === 'dashboard' ? 'active-icon' : ''} `} /> Dashboard
            </Link>
          </li>

          <li className="p-[2px]">
            <Link to="/jobs" id="jobs" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'jobs' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'jobs' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={jobsIcon} className={`px-2 ${activeLink === 'jobs' ? 'active-icon' : ''} `} /> Job Details
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/enquiries" id="job-enquiries" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'job-enquiries' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'job-enquiries' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={inquiryIcon} className={`px-2 ${activeLink === 'job-enquiries' ? 'active-icon' : ''} `} /> Job Enquiries
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/purchasing" id="purchasing" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'purchasing' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'purchasing' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={purchasingIcon} className={`px-2 ${activeLink === 'purchasing' ? 'active-icon' : ''} `} /> Purchasing
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/" id="quotations" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'quotations' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'quotations' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={quotationsIcon} className={`px-2 ${activeLink === 'quotations' ? 'active-icon' : ''} `} /> Quotations
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/" id="designs" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'designs' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'designs' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={designsIcon} className={`px-2  ${activeLink === 'designs' ? 'active-icon' : ''} `} /> Designs
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/boms" id="bom" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'bom' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'bom' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={bomIcon} className={` px-2 ${activeLink === 'bom' ? 'active-icon' : ''} `} /> BOM
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/" id="manufacturing" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'manufacturing' ? 'active-link pl-0' : ''} `}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'manufacturing' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={manufacturingIcon} className={`px-2  ml-[-5px]  ${activeLink === 'manufacturing' ? 'active-icon' : ''} `} /> Manufacturing
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/" id="qc" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'qc' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'qc' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={qcIcon} className={`px-2  ml-[-5px] ${activeLink === 'qc' ? 'active-icon' : ''} `} /> QC
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/" id="installations" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'installations' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'installations' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={installationsIcon} className={`px-2  ml-[-5px]  ${activeLink === 'installations' ? 'active-icon' : ''} `} /> Installations
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/employees" id="employees" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'employees' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'employees' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={employeesIcon} className={`px-2  ml-[-5px]  ${activeLink === 'employees' ? 'active-icon' : ''} `} /> Employees
            </Link>
          </li>
          <li className="p-[2px]">
            <Link to="/clients" id="clients" onClick={clickedLink} className={`font-medium flex items-center ${activeLink === 'clients' ? 'active-link pl-0' : ''}`}>
            <div className={` w-[5px] h-[18px] rounded-r-lg ${activeLink === 'clients' ? '' : 'hidden'} bg-[#5c4ec9] `}></div> 
              <img src={clientsIcon} className={`px-2  ml-[-5px] ${activeLink === 'clients' ? 'active-icon' : ''} `} /> Clients
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
