const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../../knexfile'))[env]
const knex = require('knex')(config)

function getContractorLedger (id) {
  return knex('ledger')
    .select()
    .where('contractor_id', id)
    .first()
}

function addContractorTransaction ({contractorId, transactionAmount, transactionComment}) {
  return knex('ledger')
    .select()
    .where('contractor_id', contractorId)
    .insert({
      contractor_id: contractorId,
      transaction_amount: transactionAmount,
      comment: transactionComment
    })
}

module.exports = {
  getContractorLedger,
  addContractorTransaction
}
