/** @jsx jsx */
import { Flex, jsx, Text } from "theme-ui";
import { transparentize } from "@theme-ui/color";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Menu = ({ tableOfContents, inView }) => {
  const heading = tableOfContents.items;

  const box = {
    initial: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <MotionFlex
      sx={{
        position: "fixed",
        backgroundColor: transparentize("darkGray", 0.8),
        top: 280,
        left: 8,
        width: 260,
        p: 5,
        flexDirection: "column",
        gap: 1,
        borderRadius: 2,
        boxShadow: "card",
        display: [`none`, `none`, `flex`],
      }}
      variants={box}
      initial="initial"
      animate={inView ? "show" : "initial"}
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
  );
};

// const Menu = ({ tableOfContents, headings }) => {
//   const heading = tableOfContents.items;

//   const [isOpen, toggleOpen] = useCycle(false, true);

//   const context = useThemeUI();
//   const size = context.theme.space[10];

//   const container = {
//     open: {
//       width: 260,
//       height: 400,
//       transition: { duration: 0.3, staggerChildren: 0.01 },
//       backgroundColor: `${context.theme.colors.background}`,
//     },
//     closed: {
//       width: size,
//       height: size,
//     },
//   };

//   const text = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: { delay: 0.3 },
//     },
//     closed: {
//       y: 40,
//       opacity: 0,
//     },
//   };

//   return (
//     <AnimatePresence>
//       <MotionFlex
//         variants={container}
//         animate={isOpen ? "open" : "closed"}
//         onHoverStart={() => toggleOpen()}
//         onHoverEnd={() => toggleOpen()}
//         sx={{
//           position: "fixed",
//           backgroundColor: transparentize("darkGray", 0.4),
//           bottom: 8,
//           left: 8,
//           p: 5,
//           flexDirection: "column",
//           gap: 1,
//           borderRadius: 2,
//           boxShadow: "card",
//           zIndex: 1,
//           transition: "all 200ms ease-out",
//         }}
//       >
//         {isOpen &&
//           heading.map((item, index) => {
//             return (
//               <MotionText
//                 variants={text}
//                 initial="closed"
//                 animate="open"
//                 exit="closed"
//                 onTap={() => {
//                   gsap.to(window, {
//                     scrollTo: { y: `${item.url}`, offsetY: 40 },
//                     ease: "power2.inOut",
//                   });
//                 }}
//                 as="p"
//                 variant="text.caption"
//                 key={index}
//                 sx={{
//                   p: 2,
//                   fontSize: 0,
//                   color: "lightGray",
//                   cursor: "pointer",
//                   transition: "all 200ms ease-out",
//                   ":hover": {
//                     backgroundColor: "primary",
//                     color: "background",
//                     variant: "shadows.card",
//                   },
//                 }}
//               >
//                 {item.title}
//               </MotionText>
//             );
//           })}
//       </MotionFlex>
//     </AnimatePresence>
//   );
// };

export default Menu;
