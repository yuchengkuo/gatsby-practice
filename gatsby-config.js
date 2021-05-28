module.exports = {
  siteMetadata: {
    title: "YuCheng Kuo",
    description: "A person",
    authr: "YuCheng Kuo",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [require("remark-slug")],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-R8P64RL9K2"],
        pluginConfig: {
          head: false,
          exclude: [],
        },
      },
    },
  ],
};
