/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex } from "@theme-ui/components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { transparentize } from "@theme-ui/color";

function goTopEvent(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const IconSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 11.6667L33.3333 25L30.9763 27.357L20 16.3807L9.02365 27.357L6.66663 25L20 11.6667Z"
      fill="#FBA34A"
    />
  </svg>
);

const GoToTop = () => {
  const { scrollYProgress } = useViewportScroll();

  document.addEventListener("scroll", topButton);
  const [show, setShow] = useState(false);
  function topButton(e) {
    if (window.pageYOffset > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -2, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 2, opacity: 0 }}
        >
          <Box
            as="button"
            onClick={goTopEvent}
            sx={{
              position: "fixed",
              variant: "shadows.card",
              backgroundColor: transparentize("background", 0.2),
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              right: 8,
              bottom: 8,
              height: 64,
              width: 64,
              zIndex: 999,
              overflow: "hidden",
            }}
          >
            {/* progress indicator */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: "0",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%" }}
              >
                <motion.path
                  d="M1,18a17,17 0 1,0 34,0a17,17 0 1,0 -34,0"
                  stroke="#FBA34A"
                  strokeWidth="2"
                  style={{
                    pathLength: scrollYProgress,
                    rotateZ: "90deg",
                    scaleX: "-1",
                  }}
                />
              </svg>
            </Box>

            <Flex
              sx={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconSVG />
            </Flex>
            <Flex
              sx={{
                width: "full",
                height: "full",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconSVG />
            </Flex>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// const GoToTop = () => {
//   document.addEventListener("scroll", topButton);
//   const { scrollYProgress } = useViewportScroll();
//   return (
//     <button className="go-top drop-shadow hide" onClick={goTopEvent}>
//       <svg
//         width="36"
//         height="36"
//         viewBox="0 0 36 36"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="progress-indicator"
//       >
//         <motion.path
//           d="M1,18a17,17 0 1,0 34,0a17,17 0 1,0 -34,0"
//           stroke="#FBA34A"
//           strokeWidth="2"
//           style={{
//             pathLength: scrollYProgress,
//             rotateZ: "90deg",
//             scaleX: "-1",
//           }}
//         />
//       </svg>
//       <div className="btn">
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 40 40"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M20 11.6667L33.3333 25L30.9763 27.357L20 16.3807L9.02365 27.357L6.66663 25L20 11.6667Z"
//             fill="#FBA34A"
//           />
//         </svg>
//         <svg
//           className="up"
//           width="40"
//           height="40"
//           viewBox="0 0 40 40"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M20 11.6667L33.3333 25L30.9763 27.357L20 16.3807L9.02365 27.357L6.66663 25L20 11.6667Z"
//             fill="#FBA34A"
//           />
//         </svg>
//       </div>
//     </button>
//   );
// };

export default GoToTop;