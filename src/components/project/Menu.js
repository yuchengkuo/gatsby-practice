/** @jsx jsx */
import { Box, Flex, jsx, Text } from "theme-ui";
import React from "react";
import { transparentize } from "@theme-ui/color";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Menu = ({ tableOfContents, headings }) => {
  // get h2 h4
  const heading = tableOfContents.items;
  //   headings.forEach((item) => {
  //     if (item.depth === 2) {
  //       heading.push(item);
  //     }
  //   });

  // get #id
  //   const url = [];
  //   tableOfContents.items.forEach((item) => {
  //     url.push(item.url);
  //   });

  console.log(heading);

  return (
    <Flex
      sx={{
        position: "sticky",
        backgroundColor: transparentize("darkGray", 0.5),
        top: "50%",
        left: "2%",
        width: "15%",
        p: 6,
        flexDirection: "column",
        gap: 4,
        transform: "translateY(-50%)",
      }}
    >
      {heading.map((item, index) => {
        return (
          <Text
            as="p"
            variant="text.caption"
            key={index}
            sx={{
              fontSize: 0,
              color: "lightGray",
              variant: "shadows.card",
              cursor: "pointer",
            }}
            onClick={(e) => {
              gsap.to(window, { scrollTo: { y: `${item.url}`, offsetY: 50 }, ease: "power2.inOut" });
            }}
          >
            {item.title}
          </Text>
        );
      })}
    </Flex>
  );
};

export default Menu;
