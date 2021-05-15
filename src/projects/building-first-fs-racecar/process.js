/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, Flex, Grid, Link } from "@theme-ui/components";
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const data = [
  {
    title: "Research",
    items: ["Background", "Competition Rules", "Project Goal", "Challenges"],
  },
  {
    title: "Design",
    items: ["Design Goal", "Design Process", "Challenges"],
  },
  {
    title: "Develop",
    items: ["Cooperations", "Modifications", "Assembly", "Challenges"],
  },
  {
    title: "Test",
    items: ["Test Item", "Site", "Challenges"],
  },
  {
    title: "Compete",
    items: ["Transportation", "Accommodation", "Challenges"],
  },
];

const Process = () => {
  return (
    <>
      <Grid
        sx={{
          position: "relative",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 10,
          width: "90%",
          mb: 11,
          mx: "auto",
          "& > :nth-of-type(1)": { transform: "translateY(20%)" },
          "& > :nth-of-type(2)": { transform: "translateY(10%)" },
          "& > :nth-of-type(4)": { transform: "translateY(-10%)" },
          "& > :nth-of-type(5)": { transform: "translateY(-20%)" },
        }}
      >
        {data.map((item, index) => (
          <Card
            onClick={() => {
              gsap.to(window, {
                scrollTo: { y: `#${item.title.toLowerCase()}`, offsetY: 50 },
                ease: "power2.inOut",
              });
            }}
            variant="cards.card"
            key={index}
            sx={{
              textDecoration: "none",
              transition: "all 200ms ease-out",
              cursor: "pointer",
              ":hover": { backgroundColor: "darkGray" },
            }}
          >
            <h4 sx={{ variant: "text.heading", fontSize: 2 }}>{item.title}</h4>
            {item.items.map((li, index) => (
              <p
                key={index}
                sx={{ variant: "text.paragraph", color: "lightGray" }}
              >
                {li}
              </p>
            ))}
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Process;
