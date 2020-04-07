import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHelmet from "react-helmet"
import type { HelmetQuery } from "types/graphql"

type HelmetProps = {
  lang?: string;
  title?: string;
  description?: string;
  meta?: object[];
}

export const helmetQuery = graphql`
  query Helmet {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Helmet: React.FC<HelmetProps> = ({
  lang = "ja",
  title = "",
  description = "",
  meta = [],
}) => (
  <StaticQuery
    query={ helmetQuery }
    render={({ site }: HelmetQuery) => {
      const { siteMetadata } = site ?? {}

      return (
        <ReactHelmet
          htmlAttributes={{ lang }}
          title={
            title
              ? `${title} | ${siteMetadata?.title}`
              : siteMetadata?.title || "empty title"
          }
          meta={[
            ...meta,
            {
              name: "description",
              content: description || siteMetadata?.description,
            },
          ]}
        />
      )
    }}
  />
)

export default Helmet
