const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../../knexfile'))[env]
const knex = require('knex')(config)

function getWeeklyExpenses (id) {
  return knex('expenses')
    .where('contractor_id', id)
}

function updateWeeklyExpense (id, newData) {
  return knex('expenses')
    .where('id', newData.id)
    .update({
      type: newData.expense,
      value: newData.amount,
      contractor_id: id
    })
}

function addWeeklyExpense (id, expense) {
  return knex('expenses')
    .insert({
      type: expense.expense,
      value: expense.amount,
      contractor_id: id
    })
}

// function deleteExpense (data) {
//   return knex('expenses')
//     .where('id', data.id)
//     .del()
// }

module.exports = {
  updateWeeklyExpense,
  addWeeklyExpense,
  // deleteExpense,
  getWeeklyExpenses
}
