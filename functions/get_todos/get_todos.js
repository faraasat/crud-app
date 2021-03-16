const faunadb = require("faunadb"),
  q = faunadb.query
require("dotenv").config({
  path: `.env`,
})

var adminClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
})

const handler = async event => {
  try {
    const result = await adminClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("todoId"))),
        q.Lambda(x => q.Get(x))
      )
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ data: result.data }),
    }
  } catch (error) {
    console.log(error)
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
