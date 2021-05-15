import { Container } from "@theme-ui/components";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const SharePanel = ({ children }) => {
  return (
    <Container variant="container.wide" sx={{ variant: "section" }}>
      {children}

      <StaticImage src="../images/image01.jpg" alt="" />
      <StaticImage src="../images/image 2.jpg" alt="" />
      <StaticImage src="../images/image 3.jpg" alt="" />
      <StaticImage src="../images/image 4.jpg" alt="" />
      <StaticImage src="../images/image 5.jpg" alt="" />
    </Container>
  );
};

export default SharePanel;
