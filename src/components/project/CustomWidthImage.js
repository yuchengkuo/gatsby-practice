/** @jsx jsx */
import { Box, jsx, Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CustomWidthImage = ({ children, image, width }) => {
  return (
    <Box
      as="figure"
      role="img"
      sx={{
        position: "relative",
        width: [
          `calc(100% + (99vw - 100%))`,
          `calc(100% + (99vw - 100%))`,
          `calc(100% + (${width} - 100%))`,
        ],
        transition: "all 200ms ease-out",
        mx: [
          `calc((100% - 99vw) / 2)`,
          `calc((100% - 99vw) / 2)`,
          `calc((100% - ${width}) / 2)`,
        ],
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

export default CustomWidthImage;
