/** @jsx jsx */
import { Box, jsx, Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FullWidthImage = ({
  children,
  image,
  overlay = true,
  shadow = true,
  alt,
}) => {
  return (
    <Box
      as="figure"
      role="img"
      sx={{
        position: "relative",
        width: `calc(100% + (99vw - 100%))`,
        mx: `calc((100% - 99vw) / 2)`,
        my: 10,
        borderRadius: 2,
        pointerEvents: "none",
      }}
    >
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
          alt={`${children ?? alt}`}
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
