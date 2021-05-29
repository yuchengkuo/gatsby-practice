/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

const UnderConstruction = () => {
  return (
    <Flex
      sx={{
        borderRadius: 3,
        p: 5,
      }}
    >
      <h1 sx={{ variant: "text.heading", fontSize: 2 }}>
        Under construction...
      </h1>
    </Flex>
  );
};

export default UnderConstruction;
