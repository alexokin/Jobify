import React from "react";
import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import BigSidebar from "../../components/big-sidebar";
import SmallSidebar from "../../components/small-sidebar";
import NavBar from "../../components/nav-bar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
