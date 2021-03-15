import { Formik } from "formik"
import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Index Page" />
      <div className="crud-page__index">
        <h1>Todo App</h1>
        <Formik
          initialValues={{ message: "" }}
          validate={values => {
            const errors = { message: "" }
            if (!values.message) {
              errors.message = "Required"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            fetch("/.netlify/functions/create_todo", {
              method: "POST",
              body: JSON.stringify(values),
            })
              .then(response => {
                response.json()
              })
              .then(data => {
                console.log("Data => ", data)
              })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}
              <button type="submit" disabled={isSubmitting}>
                Add Message
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default IndexPage
