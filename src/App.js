import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import NewTicket from "./pages/NewTicket";
import PrivateRoute from "./components/PrivateRoute";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";
import SideNavbar from "./components/SideNavbar";
import { useSelector } from "react-redux";
import NewEnquiry from "./pages/NewEnquiry";
import NewJob from "./pages/NewJob";
import Jobs from "./pages/Jobs";
import Employees from "./pages/Employees"
import Clients from "./pages/Clients";
import Enquiries from "./pages/Enquiries";

function App() {

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <div className="container">
        {user ? (<><Header />
          <SideNavbar/></>) : <></>}
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>
            <Route path="/new-enquiry" element={<PrivateRoute />}>
              <Route path="/new-enquiry" element={<NewEnquiry />} />
            </Route>
            <Route path="/new-job" element={<PrivateRoute />}>
              <Route path="/new-job" element={<NewJob />} />
            </Route>
            <Route path="/jobs" element={<PrivateRoute />}>
              <Route path="/jobs" element={<Jobs />} />
            </Route>
            <Route path="/employees" element={<PrivateRoute />}>
              <Route path="/employees" element={<Employees />} />
            </Route>
            <Route path="/clients" element={<PrivateRoute />}>
              <Route path="/clients" element={<Clients />} />
            </Route>
            <Route path="/enquiries" element={<PrivateRoute />}>
              <Route path="/enquiries" element={<Enquiries />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
