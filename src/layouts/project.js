import React from "react";
import Footer from "../components/Footer";

const ProjectLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default ProjectLayout;
