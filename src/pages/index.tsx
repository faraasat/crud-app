import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Index Page" />
      <div className="crud-page__index"></div>
    </Layout>
  )
}

export default IndexPage
