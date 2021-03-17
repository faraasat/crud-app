const faunadb = require("faunadb"),
  q = faunadb.query
require("dotenv").config({
  path: `.env`,
})

var adminClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
})

const handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)
    console.log(data)
    const result = await adminClient.query(
      q.Delete(q.Ref(q.Collection(data.collection), data.refId))
    )

    console.log(result)

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
