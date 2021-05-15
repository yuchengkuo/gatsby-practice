/** @jsx jsx */
import { Box, Grid, jsx } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { Themed } from "@theme-ui/mdx";

const carouselAnimation = (e) => {
  const pos = e.clientX;
  const targetWid = e.currentTarget.scrollWidth;
  const windowWid = window.innerWidth * 0.985;
  const max = targetWid - windowWid;
  // console.log(windowWid / 2 - pos);
  gsap.to(e.currentTarget, {
    x: gsap.utils.mapRange(0, 1, max, -max, pos / windowWid),
    duration: 0.75,
    ease: "power1",
  });
};

const ImagesCarousel = ({ image }) => {
  // console.log(image);
  return (
    <Box
      className="carousel"
      sx={{
        width: "99%",
        mx: "auto",
        justifyContent: "center",
        justifyItems: "center",
        scrollbarWidth: "none",
        "::-webkit-scrollbar": { display: "none" },
        overflow: ["scroll", "scroll", "hidden"],
      }}
    >
      <Grid
        onMouseMove={carouselAnimation}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            x: 0,
            duration: 1,
            ease: "power1.inOut",
          });
        }}
        sx={{
          gridTemplateColumns: `repeat(${image.length}, 520px)`,
          justifyContent: `center`,
          gap: 10,
        }}
      >
        {image.map((item, index) => {
          // console.log(item);
          return (
            <Box key={index}>
              <Box
                variant="overlay.radial"
                sx={{ ".image": { variant: "shadows.card" } }}
              >
                <GatsbyImage
                  image={getImage(item.img)}
                  alt={item.caption}
                  className="image"
                  objectFit="cover"
                />
              </Box>
              <Themed.p
                sx={{
                  variant: "text.caption",
                  fontSize: 0,
                  textAlign: "center",
                }}
              >
                {item.caption}
              </Themed.p>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ImagesCarousel;
