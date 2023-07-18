import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="navbar bg-base-100 h-10 pl-15">
        <div className="navbar-start">
          <Link to="/">
            <img src={require("./logo.png")} className="h-5 pl-2" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-25 md:w-auto h-7"
            />
          </div>

          <button className="btn btn-ghost btn-circle m-1">
            <img
              className="h-5 w-5"
              src={require("../resources/octicon_bell-fill-24.png")}
            />
          </button>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <img
                className="h-5 w-5"
                src={require("../resources/ph_gear-fill.png")}
              />
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar m-1">
              <div className="w-7 h-7 rounded-full">
                <img src={require("../resources/Profile.png")} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-38 mr-1"
            >
              {user ? (
                <>
                  <li>
                    <a>Profile</a>
                  </li>
                  <li onClick={onLogout}>
                    <a>
                      <FaSignOutAlt /> Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
