/** @jsx jsx */
import { Box, Container, Flex, Grid, jsx, Link } from "theme-ui";
import React from "react";
import { Themed } from "@theme-ui/mdx";
import { graphql, Link as GatsbyLink } from "gatsby";
import CardEffect from "../components/CardEffect";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/SEO";
import { motion } from "framer-motion";

const IndexPage = ({ data }) => {
  const MotionBox = motion(Box);
  const heroVariant = {
    initial: {
      y: `100%`,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 20,
      },
    },
  };
  return (
    <>
      <Seo title={`Home`} />

      <Container as="section" variant="container.hero">
        <Themed.h1
          sx={{
            fontSize: [48, 64],
            mb: 6,
          }}
        >
          <motion.div
            initial="initial"
            animate="show"
            transition={{ staggerChildren: 0.3 }}
          >
            <MotionBox variants={heroVariant}>
              He<span sx={{ color: "primary" }}>&#47;&#47;</span>o,<br></br>
            </MotionBox>
            <MotionBox variants={heroVariant}>
              I'm YuCheng Kuo.<br></br>
            </MotionBox>
            <MotionBox variants={heroVariant}>
              Nice to meet you.<br></br>
            </MotionBox>
          </motion.div>
        </Themed.h1>
        <MotionBox
          initial={{ y: `30%`, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Themed.p>
            A self-taught UI/UX Designer, web developer and more.
          </Themed.p>
          <Themed.p sx={{ variant: "text.caption", fontSize: 0 }}>
            SCROLL FOR MORE
          </Themed.p>
        </MotionBox>
      </Container>

      <Container as="section" id="project" variant="section">
        <Container variant="container.text">
          <Themed.h4 sx={{ variant: "text.sectionTitle" }}>
            &#47;&#47; Projects
          </Themed.h4>
          <Grid
            sx={{
              gap: 8,
              "@media (min-width: 800px)": {
                rowGap: "0",
                gridTemplateColumns: "1fr 1fr",
                a: {
                  "&:nth-of-type(1)": {
                    gridColumn: "1 / 3",
                    mb: 8,
                  },

                  "&:nth-of-type(3), &:nth-of-type(5)": {
                    mt: 8,
                  },
                  "&:nth-of-type(2), &:nth-of-type(4)": {
                    mb: 8,
                  },
                },
              },
            }}
          >
            {data.allMdx.edges.map((item) => (
              <ProjectCard
                key={item.node.id}
                title={item.node.frontmatter.title}
                tag={item.node.frontmatter.tag}
                cover={item.node.frontmatter.cover}
                slug={item.node.fields.slug}
                badge={item.node.frontmatter.badge[0]}
              ></ProjectCard>
            ))}
          </Grid>
        </Container>
      </Container>

      <Container as="section" id="about" variant="section">
        <Box variant="container.text">
          <Themed.h4 sx={{ variant: "text.sectionTitle" }}>
            &#47;&#47; About
          </Themed.h4>
          <Themed.p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            iure eos reprehenderit sequi minima, ducimus dolores veniam ipsa
            nesciunt adipisci tempore? Ullam necessitatibus autem, consequuntur
            temporibus nulla sit. Fugit, deserunt!
          </Themed.p>
          <Flex sx={{ gap: 4 }}>
            <Link
              as={GatsbyLink}
              to="/about"
              variant="link.button"
              onMouseMove={CardEffect}
            >
              More Info
            </Link>
            <Link
              as={GatsbyLink}
              to="/resume"
              variant="link.button"
              onMouseMove={CardEffect}
            >
              Read CV
            </Link>
          </Flex>
        </Box>
      </Container>

      <Container as="section" id="contact" variant="section">
        <Box variant="container.text">
          <Themed.h4 sx={{ variant: "text.sectionTitle" }}>
            &#47;&#47; Contact
          </Themed.h4>
          <Flex>
            <Link
              href="mailto:hey@yuchengkuo.com?subject=Hi"
              variant="link.button"
              onMouseMove={CardEffect}
              sx={{ verticalAlign: "center" }}
            >
              Send a mail
            </Link>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export const indexQuery = graphql`
  query MyQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: fileAbsolutePath }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tag
            badge {
              show
              message
            }
            cover {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  backgroundColor: "#1d1e20"
                  formats: AUTO
                  placeholder: NONE
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
