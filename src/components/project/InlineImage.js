/** @jsx jsx */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, jsx, Themed } from "theme-ui";

const inlineImage = ({ children, image }) => {
  return (
    <Box as="figure">
      <Box
        variant="overlay.radial"
        sx={{
          ".image": {
            variant: "shadows.card",
          },
        }}
      >
        <GatsbyImage
          image={getImage(image)}
          alt={`${children}`}
          layout="fullWidth"
          className="image"
        />
      </Box>
      <Themed.p
        sx={{
          variant: "text.caption",
          fontSize: 0,
          textAlign: "center",
          mt: 2,
        }}
      >
        {children}
      </Themed.p>
    </Box>
  );
};

export default inlineImage;
