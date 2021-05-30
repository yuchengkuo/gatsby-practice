/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { Link } from "gatsby";

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

const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        variant: "container.wide",
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-end"],
        mt: 7,
        pb: 7,
      }}
    >
      <Link to="/">
        <LogoIcon />
      </Link>
      <h5 sx={{ fontSize: 0, color: "gray", m: 0, ml: 2 }}>
        yucheng kuo &copy; 2021-
      </h5>
    </Flex>
  );
};

export default Footer;
