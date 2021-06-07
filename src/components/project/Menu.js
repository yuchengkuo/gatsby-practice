/** @jsx jsx */
import { Flex, jsx, Text } from "theme-ui";
import { transparentize } from "@theme-ui/color";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollToPlugin);

const Menu = ({ tableOfContents, inView }) => {
  const MotionText = motion(Text);
  const MotionFlex = motion(Flex);

  const heading = tableOfContents.items;

  const box = {
    initial: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <AnimatePresence>
      {inView && (
        <MotionFlex
          sx={{
            position: "fixed",
            backgroundColor: transparentize("darkGray", 0.8),
            top: 280,
            left: 8,
            width: 200,
            p: 5,
            flexDirection: "column",
            gap: 1,
            borderRadius: 2,
            boxShadow: "card",
            display: [`none`, `none`, `flex`],
          }}
          variants={box}
          initial="initial"
          animate="show"
          exit="initial"
        >
          {heading?.map((item, index) => (
            <MotionText
              whileTap={() => {
                gsap.to(window, {
                  scrollTo: { y: `${item.url}`, offsetY: 40 },
                  ease: "power2.inOut",
                });
              }}
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
            >
              {item.title}
            </MotionText>
          ))}
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};

export default Menu;
