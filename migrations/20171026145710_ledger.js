exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('ledger', table => {
    table.increments('id').primary()
    table.string('contractor_id').references('contractors.id')
    table.decimal('transaction_amount')
    table.string('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ledger')
};