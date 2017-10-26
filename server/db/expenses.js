const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, './knexfile'))[env]
const knex = require('knex')(config)

function getWeeklyExpenses (id) {
  return knex('expenses')
    .where('user_id', id)
    .first()
}

function updateWeeklyExpenses (id, newData) {
  return knex('expenses')
    .where('user_id', id)
    .update({
      type: newData.type,
      value: newData.value
    })
}

module.exports = {
  updateWeeklyExpenses,
  getWeeklyExpenses
}
