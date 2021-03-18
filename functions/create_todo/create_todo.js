const faunadb = require("faunadb"),
  q = faunadb.query
require("dotenv").config({
  path: `.env`,
})
const cuid = require("cuid")

var adminClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
})

const handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)
    const result = await adminClient.query(
      q.Create(q.Collection("todoApp"), {
        data: {
          id: cuid(),
          task: data.todo,
          starred: false,
        },
      })
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ data: result.ref.id }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }
