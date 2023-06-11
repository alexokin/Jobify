import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./logo";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          type="button"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => console.log("show/hide dropdown")}
          >
            <FaUserCircle />
            alex
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              onClick={() => console.log("logout user")}
              type="button"
              className="dropdown-btn"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
