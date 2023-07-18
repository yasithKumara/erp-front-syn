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
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
