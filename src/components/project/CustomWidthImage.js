/** @jsx jsx */
import { Box, jsx, Themed } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CustomWidthImage = ({
  children,
  image,
  width = "65vw",
  overlay = true,
  shadow = true,
  alt,
}) => {
  console.log(children);
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

export default CustomWidthImage;
