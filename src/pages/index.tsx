import React from "react"
import Helmet from "@/components/Helmet"
import Layout from "@/layouts/Layout"
import { css } from "@emotion/core"

const IndexPage: React.FC = () => (
  <Layout>
    <Helmet title="Sample Index Page" />
    <h1
      css={css`
        text-decoration: underline;
      `}
    >
      Hello World!
    </h1>
  </Layout>
)

export default IndexPage
