import React from "react"
import Helmet from "@/components/Helmet"
import Layout from "@/layouts/Layout"

const IndexPage: React.FC = () => (
  <Layout>
    <Helmet title="Sample Index Page" />
    <h1>Hello World!</h1>
  </Layout>
)

export default IndexPage
