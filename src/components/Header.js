/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Link } from "@theme-ui/components";
import { Link as GatsbyLink } from "gatsby";
import { Tween } from "react-gsap";
import { motion } from "framer-motion";

const NavItem = [
  {
    slug: "/#project",
    title: "Project",
  },
  {
    slug: "/about",
    title: "About",
  },
  {
    slug: "mailto:hey@yuchengkuo.com?subject=Hi",
    title: "Send a message",
  },
];

const LogoIcon = () => (
  <svg
    width="32"
    height="22"
    viewBox="0 0 32 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{
      path: { stroke: "gray", transition: "all 200ms ease-out" },
      "&:hover": {
        path: { stroke: "text" },
      },
    }}
  >
    <path
      d="M11 1V21M11 1H1L6 11L1 21H11M11 1H21M11 21H21M11 21L21 1M26 11.4167L31 1H21M26 11.4167L31 21H21M26 11.4167L21 21"
      stroke="#777980"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const MotinoFlex = motion(Flex);
  return (
    <MotinoFlex
      as="header"
      sx={{ variant: "styles.header" }}
      initial={{ y: `-20%`, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Link as={GatsbyLink} to="/" sx={{ mb: [6, 0] }}>
        <LogoIcon />
      </Link>

      <Flex sx={{ alignItems: "center", rowGap: 9 }}>
        {NavItem.map((item) => (
          <Link
            as={GatsbyLink}
            key={item.slug}
            to={item.slug}
            variant="link.nav"
          >
            {item.title}
          </Link>
        ))}
      </Flex>
    </MotinoFlex>
  );
};

export default Header;
