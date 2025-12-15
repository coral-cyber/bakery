import React from "react";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Layout;
