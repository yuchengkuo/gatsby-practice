import React from "react";
import { Tween } from "react-gsap";

const SlideUp = ({ children }) => {
  return (
    <Tween
      from={{ yPercent: 100, opacity: 0, delay: 0.5, ease: "power4" }}
      duration={1.5}
      stagger={0.25}
    >
      {children}
    </Tween>
  );
};

export default SlideUp;
