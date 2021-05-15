import React from "react";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

const ProjectLayout = ({ children }) => {
  return (
    <>
      <GoToTop />
      {children}
      <Footer />
    </>
  );
};

export default ProjectLayout;
