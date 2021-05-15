/** @jsx jsx */
import { jsx } from "theme-ui";
import { Badge, Box, Link, Text } from "@theme-ui/components";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Tween } from "react-gsap";
import { transparentize } from "@theme-ui/color";
// import CardEffect from "./CardEffect";
// import CardEffectReset from "./CardEffectReset";

//data: link project-img, title, caption

const ProjectCard = ({ cover, title, tag, slug, badge, color }) => {
  const image = getImage(cover);
  const link = `${slug}`;
  return (
    <Link
      as={GatsbyLink}
      to={link}
      sx={{
        ":hover": { transform: "scale3d(1.02,1.02,1.02)" },
        ":active": { transform: "scale3d(0.99,0.99,0.99)" },
        "::after": { content: "none" },
        variant: "cards.project",
        overflow: "hidden",
        transition: "all 250ms ease-out",
        textDecoration: "none",
      }}
    >
      {badge && (
        <Badge
          sx={{
            position: "absolute",
            left: 3,
            top: 3,
            zIndex: 1,
            backgroundColor: transparentize("gray", 0.3),
            py: 1,
            pointerEvents: "none",
          }}
        >
          Draft
        </Badge>
      )}

      <Box sx={{ p: 3, zIndex: 5, pointerEvents: "none" }}>
        <Text
          as="p"
          sx={{ variant: "text.caption", color: "lightGray", fontSize: 0 }}
        >
          {tag}
        </Text>
        <Text
          as="h4"
          sx={{ color: "text", fontSize: 2, fontWeight: "heading" }}
        >
          {title}
        </Text>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "all 750ms ease-out",
          ":hover": {
            transform: "scale3d(1.03,1.03,1.03)",
            zIndex: -2,
          },
          ".project-image": {
            position: "absolute",
            variant: "overlay.project",
            width: "100%",
            height: "100%",
            zIndex: -2,
          },
        }}
      >
        <GatsbyImage
          image={image}
          alt=""
          objectFit="cover"
          objectPosition="50% 50%"
          backgroundColor="#1d1e20"
          className="project-image"
        />
      </Box>
    </Link>
  );
};

export default ProjectCard;
