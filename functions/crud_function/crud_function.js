const faunadb = require("faunadb"),
  q = faunadb.query
require("dotenv").config({
  path: `.env`,
})

const handler = async event => {
  try {
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = { handler }
