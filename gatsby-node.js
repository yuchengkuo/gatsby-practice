const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// create node
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: "slug",
      value: `/projects${slug}`,
    });
  }
};
// create pages for projects

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  return graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const projects = result.data.allMdx.edges;

    projects.forEach(({ node }, index) => {
      // console.log(`Creating page for ${node.fields.slug}`);

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/ProjectTemplate.js`),
        context: { id: node.id, slug: node.fields.slug, layout: "project" },
      });
    });
  });
};
