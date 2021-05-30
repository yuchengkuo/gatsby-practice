/**  @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Grid } from "@theme-ui/components";
import { useInView } from "react-intersection-observer";

// project components
import {
  Hero,
  FullWidth,
  CustomWidth,
  Carousel,
  InlineImage,
  UpNext,
  Menu,
  UnderConstruction,
} from "../components/project";

import Seo from "../components/SEO";
import GoToTop from "../components/GoToTop";

const ProjectTemplate = ({ data }) => {
  const {
    title,
    subtitle,
    //slug,
    tag,
    duration,
    role,
    tasks,
    color,
    images,
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

  const GridContainer = ({ children }) => {
    return (
      <Grid
        as="article"
        variant="section"
        sx={{
          display: ["unset", "grid"],
          gridTemplateColumns: "auto minmax(auto, 640px) auto",
          gap: 0,
          "> *": {
            gridColumn: 2,
          },
        }}
      >
        {children}
      </Grid>
    );
  };

  const components = {
    FullWidth,
    CustomWidth,
    Carousel,
    InlineImage,
    UnderConstruction,
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

  const { ref, inView } = useInView({
    rootMargin: "-250px 0px",
  });

  return (
    <main>
      {/* SEO */}
      <Seo title={title} image={hero} />

      {/* hero section */}
      <Hero heroData={heroData} />

      <Menu
        tableOfContents={data.mdx.tableOfContents}
        headings={data.mdx.headings}
        inView={inView}
      />
      <GoToTop inView={inView} />

      {/* render context in mdx */}
      <article sx={{ px: [7, "unset"] }} ref={ref}>
        <GridContainer>
          <MDXProvider components={components}>
            <MDXRenderer images={images}>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </GridContainer>
      </article>

      {/* upNext section */}
      <UpNext upNextData={upNextData} />
    </main>
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
        images {
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
