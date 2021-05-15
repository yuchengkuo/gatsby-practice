import { Container, Flex, Text } from "@theme-ui/components";
import React from "react";
import ProjectCard from "../ProjectCard";

const Divider = () => {
  return (
    <Container variant="container.text" sx={{ variant: "section" }}>
      <Flex
        as="p"
        sx={{
          variant: "styles.p",
          color: "gray",
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <span>&#47;</span>
        <span>&#47;</span>
        <span>&#47;</span>
      </Flex>
    </Container>
  );
};

const UpNext = ({ upNextData }) => {
  return (
    <>
      <Divider />
      <Container variant="container.text" sx={{ variant: "section" }}>
        <Text as="h2" variant="styles.h2">
          Up Next
        </Text>
        <Flex sx={{ gap: 8, minHeight: 360, flexDirection: ["column", "row"] }}>
          <ProjectCard
            title={upNextData.previous.node.frontmatter.title}
            tag={upNextData.previous.node.frontmatter.tag}
            cover={upNextData.previous.node.frontmatter.cover}
            slug={upNextData.previous.node.fields.slug}
          />
          <ProjectCard
            title={upNextData.next.node.frontmatter.title}
            tag={upNextData.next.node.frontmatter.tag}
            cover={upNextData.next.node.frontmatter.cover}
            slug={upNextData.next.node.fields.slug}
          />
        </Flex>
      </Container>
    </>
  );
};

export default UpNext;
