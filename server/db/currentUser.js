const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../../knexfile'))[env]
const knex = require('knex')(config)

function updateCurrentUser (id) {
  return knex('contractors')
  .where('id', id)
  .first()
}

module.exports = {
  updateCurrentUser
}