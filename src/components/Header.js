/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Link } from "@theme-ui/components";
import { Link as GatsbyLink } from "gatsby";
import { Tween } from "react-gsap";

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
    slug: "/",
    title: "Send a message",
  },
];

const SlideDown = ({ children }) => {
  return (
    <Tween
      from={{
        yPercent: -20,
        opacity: 0,
        delay: 2,
        ease: "power4.out",
      }}
    >
      {children}
    </Tween>
  );
};

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
  return (
    <SlideDown>
      <Flex as="header" sx={{ variant: "styles.header" }}>
        <Link
          as={GatsbyLink}
          to="/"
          sx={{ mb: [6, 0], "::after": { content: "none" } }}
        >
          <LogoIcon />
        </Link>

        <Flex sx={{ alignItems: "center", gap: 9 }}>
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
      </Flex>
    </SlideDown>
  );
};

export default Header;
