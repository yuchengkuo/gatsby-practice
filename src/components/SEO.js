import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const SEO = ({ children, title, location, description, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>

        {/* Fav Icon */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/logo.ico" />

        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={site.siteMetadata.description} />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={image || "/logo.svg"} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          property="og:site_name"
          content={site.siteMetadata.title}
          key="ogsitename"
        />
        <meta
          property="og:description"
          content={description}
          key="ogdescription"
        />
        {children}
      </Helmet>
    </>
  );
};

export default SEO;
