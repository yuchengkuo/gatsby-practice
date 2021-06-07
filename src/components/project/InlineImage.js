/** @jsx jsx */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, jsx, Themed } from "theme-ui";

const inlineImage = ({
  children,
  image,
  overlay = true,
  shadow = true,
  alt,
}) => {
  return (
    <Box as="figure" sx={{ pointerEvents: "none" }}>
      <Box
        variant={overlay && "overlay.radial"}
        sx={
          shadow && {
            ".image": {
              variant: "shadows.card",
            },
          }
        }
      >
        <GatsbyImage
          image={getImage(image)}
          alt={`${alt ?? children}`}
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
