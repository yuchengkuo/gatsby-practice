/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Box, Container, Flex, Grid, Text } from "@theme-ui/components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CardEffect from "../CardEffect";
import CardEffectReset from "../CardEffectReset";
import Header from "../Header";
import { Timeline, Tween } from "react-gsap";

const Hero = (props) => {
  const { title, subtitle, tag, duration, role, tasks, hero, color } =
    props.heroData;
  const image = getImage(hero);

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
      {/* import nav componet */}

      <Container variant="container.wide" sx={{ px: [0, 0, 0] }}>
        <Header />
      </Container>

      <Container variant="container.wide">
        <div className="text">
          <Tween
            from={{
              yPercent: 30,
              opacity: 0,
              duration: 1,
              delay: 2,
              ease: "power4.out",
            }}
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
          </Tween>
          <Themed.h1>{title}</Themed.h1>
          {/* <Text
            as="p"
            sx={{ variant: "text.paragraph", fontSize: 1, color: "lightGray" }}
          >
            {tag}
          </Text> */}
        </div>
      </Container>

      <Timeline
        target={
          <Box
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
          </Box>
        }
        labels={[{ label: "start", position: 0 }]}
      >
        <Tween
          from={{ opacity: 0, ease: "power4.out", delay: 2 }}
          duration={2}
          position="start"
        />
        <Tween
          from={{ scale: 1.05, ease: "none", delay: 2 }}
          duration={4}
          position="start"
        />
      </Timeline>

      <Tween
        from={{
          yPercent: 40,
          opacity: 0,
          ease: "power4.out",
          delay: 2,
          duration: 1,
        }}
      >
        <Box>
          <Grid
            onMouseMove={(e) => CardEffect(e, 0.5)}
            onMouseOut={CardEffectReset}
            role="img"
            variant="shadows.card"
            sx={{
              boxShadow: `inset 0px 4px 0px #FBA34A`,
              variant: "container.wide",
              gridTemplateColumns: "repeat(3, minmax(240px, 1fr))",
              overflow: "scroll",
              scrollbarWidth: "thin",
              "::-webkit-scrollbar": { height: 2 },
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
        </Box>
      </Tween>
    </Flex>
  );
};

export default Hero;
