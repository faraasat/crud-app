import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.styles.css"
import SmallNavComponent from "../components/small-nav/small-nav.component"

const IndexPage = () => {
  const [todoData, setTodoData] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/.netlify/functions/get_todos")
        setTodoData(await res.json())
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log(todoData)

  return (
    <Layout>
      <SEO title="Index Page" />
      <div className="crud-page__index">
        <SmallNavComponent />
      </div>
    </Layout>
  )
}

export default IndexPage
