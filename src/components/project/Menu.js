/** @jsx jsx */
import { Box, Flex, jsx, Text } from "theme-ui";
import React, { useRef, useState } from "react";
import { transparentize } from "@theme-ui/color";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { Tween } from "react-gsap";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const Menu = ({ tableOfContents, headings }) => {
  const heading = tableOfContents.items;

  // const article = document.querySelectorAll("article");

  // ScrollTrigger.create({
  //   trigger: article,
  //   onToggle: (self) => console.log("toggled, isActive:", self.isActve),
  // });

  // const scrollHandler = () => {
  //   console.log("hi");
  //   console.log(article[0].getBoundingClientRect().top);
  // };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{
        position: "fixed",
        backgroundColor: transparentize("darkGray", 0.4),
        bottom: 8,
        left: 8,
        width: 260,
        p: 5,
        flexDirection: "column",
        gap: 1,
        borderRadius: 2,
        boxShadow: "card",
        zIndex: 1,
        transition: "all 200ms ease-out",
      }}
    >
      {isOpen &&
        heading.map((item, index) => {
          return (
            <Tween to={{ opacity: 1, ease: "power4" }}>
              <Text
                as="p"
                variant="text.caption"
                key={index}
                sx={{
                  p: 2,
                  fontSize: 0,
                  color: "lightGray",
                  cursor: "pointer",
                  transition: "all 200ms ease-out",
                  ":hover": {
                    backgroundColor: "primary",
                    color: "background",
                    variant: "shadows.card",
                  },
                  opacity: 0,
                }}
                onClick={() => {
                  gsap.to(window, {
                    scrollTo: { y: `${item.url}`, offsetY: 40 },
                    ease: "power2.inOut",
                  });
                }}
              >
                {item.title}
              </Text>
            </Tween>
          );
        })}
    </Flex>
  );
};

export default Menu;
