import { StaticQuery, graphql } from "gatsby"
import React from "react"
import ReactHelmet, { HelmetProps as ReactHelmetProps } from "react-helmet"
import type { HelmetQuery } from "types/graphql"

type HelmetProps = {
  description?: string;
} & ReactHelmetProps

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
  htmlAttributes,
  title = "",
  description = "",
  meta = [],
  children,
  ...props
}) => (
  <StaticQuery
    query={ helmetQuery }
    render={({ site }: HelmetQuery) => {
      const { siteMetadata } = site ?? {}

      return (
        <ReactHelmet
          {...props}
          htmlAttributes={htmlAttributes ?? { lang: "ja" }}
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
            } as JSX.IntrinsicElements["meta"],
          ]}
        >
          {children}
        </ReactHelmet>
      )
    }}
  />
)

export default Helmet
