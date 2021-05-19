import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Card, Container } from "@theme-ui/components";

// project components
import Hero from "../components/project/Hero";
import FullWidth from "../components/project/FullWidthImg";
import Carousel from "../components/project/ImagesCarousel";
import UpNext from "../components/project/UpNext";
import Menu from "../components/project/Menu";

import SEO from "../components/SEO";
import { useInView } from "react-intersection-observer";

const ProjectTemplate = ({ data }) => {
  // destructure data
  const {
    title,
    subtitle,
    slug,
    tag,
    duration,
    role,
    tasks,
    color,
    embeddedImagesLocal,
    hero,
  } = data.mdx.frontmatter;

  const heroData = {
    title,
    subtitle,
    tag,
    duration,
    role,
    tasks,
    hero,
    color,
  };

  const Article = ({ children }) => {
    const { ref, inView } = useInView({
      threshold: 0.4,
    });
    return (
      <>
        <Container
          as="article"
          variant="section"
          sx={{ variant: "container.text" }}
          ref={ref}
        >
          {children}
        </Container>
      </>
    );
  };

  // shorcodes
  const shortcodes = {
    FullWidth,
    Carousel,
    Article,
    Card,
  };

  // data for upnext section
  const current = data.allMdx.edges.find(
    (item) => item.node.id === data.mdx.id
  );
  const currentIndex = data.allMdx.edges.indexOf(current);
  const amount = data.allMdx.edges.length;
  let next,
    previous = null;
  if (currentIndex === 0) {
    next = data.allMdx.edges[currentIndex + 1];
    previous = data.allMdx.edges[amount - 1];
  } else if (currentIndex === amount - 1) {
    next = data.allMdx.edges[0];
    previous = data.allMdx.edges[currentIndex - 1];
  } else {
    next = data.allMdx.edges[currentIndex + 1];
    previous = data.allMdx.edges[currentIndex - 1];
  }
  const upNextData = {
    next,
    previous,
  };

  return (
    <>
      {/* SEO */}
      <SEO title={title} image={hero} />

      {/* hero section */}
      <Hero heroData={heroData} />

      <Menu
        tableOfContents={data.mdx.tableOfContents}
        headings={data.mdx.headings}
      />

      {/* render context in mdx */}
      <section>
        <MDXProvider components={shortcodes}>
          <MDXRenderer localImages={embeddedImagesLocal}>
            {data.mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </section>

      {/* upNext section */}
      <UpNext upNextData={upNextData} />
    </>
  );
};

export default ProjectTemplate;

export const ProjectQuery = graphql`
  query ProjectQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      id
      tableOfContents(maxDepth: 2)
      headings {
        depth
        value
      }
      frontmatter {
        title
        subtitle
        slug
        tag
        duration
        role
        tasks
        color
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              backgroundColor: "#1d1e20"
              formats: AUTO
              placeholder: BLURRED
              transformOptions: { fit: COVER }
            )
          }
        }
        hero {
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
