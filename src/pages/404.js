/** @jsx jsx */
import { Box, Flex, jsx, Link, Themed } from "theme-ui";
import { Link as GatsbyLInk } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <Flex
      variant="container.wide"
      sx={{ height: "70vh", flexDirection: "column", justifyContent: "center" }}
    >
      <Themed.h1 sx={{ fontSize: 120 }}>404</Themed.h1>
      <Themed.p>No page found.</Themed.p>
      <Link
        as={GatsbyLInk}
        to="/"
        variant="link.button"
        sx={{ flexGrow: "unset", width: "50%" }}
      >
        Head back to home.
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
