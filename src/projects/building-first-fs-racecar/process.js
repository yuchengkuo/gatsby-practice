/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { Card, Grid } from "@theme-ui/components";
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";

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
    items: ["Cooperations", "Modifications", "Assembly"],
  },
  {
    title: "Test",
    items: ["Test Items", "Site", "Safety"],
  },
  {
    title: "Compete",
    items: ["Transportation", "Accommodation"],
  },
];

const Process = () => {
  const MotionGrid = motion(Grid);
  const MotionCard = motion(Card);
  const context = useThemeUI();

  return (
    <>
      <MotionGrid
        sx={{
          position: "relative",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 10,
          // width: `calc(100% + (99vw - 100%))`,
          // mx: `calc((95vw - 100%) / 2)`,
          my: 11,
          "& > :nth-of-type(1)": { transform: "translateY(20%)" },
          "& > :nth-of-type(2)": { transform: "translateY(10%)" },
          "& > :nth-of-type(4)": { transform: "translateY(-10%)" },
          "& > :nth-of-type(5)": { transform: "translateY(-20%)" },
        }}
      >
        {data.map((item, index) => (
          <MotionCard
            whileHover={{
              backgroundColor: `${context.theme.colors.darkGray}`,
            }}
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
          </MotionCard>
        ))}
      </MotionGrid>
    </>
  );
};

export default Process;
