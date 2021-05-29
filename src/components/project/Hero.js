/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Box, Container, Flex, Grid, Text } from "@theme-ui/components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Header from "../Header";
import { SplitWords } from "react-gsap";
import { motion } from "framer-motion";

const Hero = (props) => {
  // unsed data: tag color
  const { title, subtitle, duration, role, tasks, hero } = props.heroData;
  const image = getImage(hero);
  const MotionBox = motion(Box);
  const titleVariant = {
    initial: {
      y: `50%`,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Flex
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxHeight: "1200px",
        maxWidth: "2400px",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Container variant="container.wide" sx={{ px: [0, 0, 0] }}>
        <Header />
      </Container>

      <Container variant="container.wide">
        <MotionBox
          initial={{ y: `30%`, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Text
            as="p"
            sx={{
              variant: "text.paragraph",
              fontSize: 1,
              color: "lightGray",
            }}
          >
            {subtitle}
          </Text>
        </MotionBox>
        <Themed.h1>
          <MotionBox
            initial="initial"
            animate="show"
            transition={{ staggerChildren: 0.1 }}
          >
            <SplitWords
              wrapper={
                <motion.div
                  variants={titleVariant}
                  sx={{ display: "inline-block" }}
                />
              }
            >
              {title}
            </SplitWords>
          </MotionBox>
        </Themed.h1>
        {/* <Text
            as="p"
            sx={{ variant: "text.paragraph", fontSize: 1, color: "lightGray" }}
          >
            {tag}
          </Text> */}
      </Container>

      <MotionBox
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        sx={{
          position: "absolute",
          width: "full",
          height: "95%",
          top: "0",
          zIndex: "-1",
          ".image": {
            position: "absolute",
            width: "full",
            height: "full",
            variant: "overlay.hero",
          },
        }}
      >
        <GatsbyImage
          image={image}
          alt={title}
          className="image"
          objectFit="cover"
          backgroundColor="#1d1e20"
          loading="eager"
        />
      </MotionBox>

      <MotionBox
        initial={{ y: `50%`, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <Grid
          variant="shadows.card"
          sx={{
            boxShadow: `inset 0px 4px 0px #FBA34A`,
            variant: "container.wide",
            gridTemplateColumns: "repeat(3, minmax(240px, 1fr))",
            overflow: "auto",
            justifyItems: "stretch",
            justifyContent: "stretch",
            padding: [6, 6, 6],
            backgroundColor: "background",
            borderRadius: 2,
            "> *": {
              pointerEvents: "none",
            },
            h4: {
              variant: "text.heading",
              fontSize: 2,
              mb: 4,
            },
            p: {
              variant: "text.paragraph",
              fontSize: 1,
              color: "lightGray",
            },
          }}
        >
          <Box>
            <h4>Duration</h4>
            <p>{duration}</p>
          </Box>
          <Box>
            <h4>My Role</h4>
            <p>{role}</p>
          </Box>
          <Box>
            <h4>Main Tasks</h4>
            {tasks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
        </Grid>
      </MotionBox>
    </Flex>
  );
};

export default Hero;
