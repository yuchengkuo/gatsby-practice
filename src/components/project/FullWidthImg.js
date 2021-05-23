/** @jsx jsx */
import { Box, jsx, Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CardEffect from "../CardEffect";
import CardEffectReset from "../CardEffectReset";

const FullWidthImage = ({ children, image }) => {
  const width = 800;

  return (
    <Box
      as="figure"
      role="img"
      sx={{
        position: "relative",
        width: `calc(100% + (99vw - 100%))`,
        transition: "all 200ms ease-out",
        mx: `calc((100% - 99vw) / 2)`,
        my: 11,
        borderRadius: 2,
      }}
    >
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

export default FullWidthImage;
