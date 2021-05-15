/** @jsx jsx */
import { Box, jsx, Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CardEffect from "../CardEffect";
import CardEffectReset from "../CardEffectReset";

const FullWidthImage = ({ children, image }) => {
  // console.log(image);
  return (
    <div
      onMouseMove={(e) => CardEffect(e, 0.1)}
      onMouseOut={CardEffectReset}
      role="img"
      sx={{
        position: "relative",
        width: "99%",
        left: "0.5%",
        transition: "all 200ms ease-out",
        my: 6,
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
    </div>
  );
};

export default FullWidthImage;
