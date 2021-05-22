/** @jsx jsx */
import { Flex, jsx, Text, useThemeUI } from "theme-ui";
import { useState } from "react";
import { transparentize } from "@theme-ui/color";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tween } from "react-gsap";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Menu = ({ tableOfContents, headings }) => {
  const heading = tableOfContents.items;

  const [isOpen, setIsOpen] = useState(false);

  const context = useThemeUI();

  const variant = {
    open: {
      width: 260,
      height: "unset",
      transition: { when: "beforeChildren", staggerChildren: 0.2, duration: 1 },
    },
    closed: {
      width: `${context.theme.space[10]}`,
      height: `${context.theme.space[10]}`,
    },
  };

  return (
    <AnimatePresence>
      <MotionFlex
        layout
        variants={variant}
        initial="closed"
        whileHover="open"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
        when="beforeChildren"
        // onClick={() => setIsOpen((isOpen) => !isOpen)}
        // onMouseOver={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
        sx={{
          position: "fixed",
          backgroundColor: transparentize("darkGray", 0.4),
          bottom: 8,
          left: 8,
          p: 5,
          flexDirection: "column",
          gap: 1,
          borderRadius: 2,
          boxShadow: "card",
          zIndex: 1,
          transition: "all 200ms ease-out",
        }}
      >
        <AnimateSharedLayout>
          {isOpen &&
            heading.map((item, index) => {
              return (
                <MotionText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
                  }}
                  onClick={() => {
                    gsap.to(window, {
                      scrollTo: { y: `${item.url}`, offsetY: 40 },
                      ease: "power2.inOut",
                    });
                  }}
                >
                  {item.title}
                </MotionText>
              );
            })}
        </AnimateSharedLayout>
      </MotionFlex>
    </AnimatePresence>
  );
};

export default Menu;
