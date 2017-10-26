const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../../knexfile'))[env]
const knex = require('knex')(config)

function getWeeklyExpenses (id) {
  return knex('expenses')
    .where('contractor_id', id)
}

function updateWeeklyExpenses (id, newData) {
  return knex('expenses')
    .where('id', id)
    .update({
      type: newData.type,
      value: newData.value,
      contractor_id: newData.contractorId
    })
}

module.exports = {
  updateWeeklyExpenses,
  getWeeklyExpenses
}
