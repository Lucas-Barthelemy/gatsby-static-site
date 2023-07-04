import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BlogiBlogoBloga`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins:
  [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options:
      {
        name: "blogs",
        path: `${__dirname}/content/blogs`
      }
    },
    "gatsby-transformer-remark"
  ]
};

export default config;