import React from "react"

import Layout from "../components/common/Layout"
import SEO from "../components/common/Seo"
import Content from "../components/common/Content"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
)

export default NotFoundPage
