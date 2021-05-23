/** @jsx jsx */
import Reacr from "react"
import { Box, Flex, Grid, jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ children }) => {
  return (
    <>
      <Grid
        variant="container.wide"
        sx={{
          gridTemplateColumns: ["0.36fr 0.64fr"],
          gap: 10,
          mt: 11,
          mb: 11,
        }}
      >
        <Box
          variant="overlay.radial"
          sx={{
            width: "170%",
            zIndex: -1,
            "::after": {
              background: `linear-gradient(90deg,rgba(24, 25, 27, 0.2) 0%, rgba(24, 25, 27, 0.5) 100%);`,
            },
          }}
        >
          <StaticImage
            src="../../images/why.jpg"
            alt=""
            placeholder="none"
            objectFit="cover"
            height={1000}
            loading="eager"
          />
        </Box>
        <Flex sx={{ flexDirection: "column", justifyContent: "center" }}>
          {children}
        </Flex>
      </Grid>
    </>
  );
};

export default Hero;
