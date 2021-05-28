import React from "react";
import Footer from "../components/Footer";
import ProjectLayout from "./project";
import Header from "../components/Header";
import "normalize.css";

import "../styles/reset.css";

const Layout = ({ children, pageContext }) => {
  if (pageContext.layout === "project") {
    return <ProjectLayout>{children}</ProjectLayout>;
  }
  return (
    <>
      {/* <GoToTop /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
