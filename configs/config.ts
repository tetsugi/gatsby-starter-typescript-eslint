import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "SITE NAME",
    description: "sample description",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "types/graphql.d.ts",
        documentPaths: [
          "./src/**/*.{ts,tsx}",
        ],
      },
    },
  ],
}

export default config
