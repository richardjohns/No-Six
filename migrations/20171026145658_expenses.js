exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('expenses', table => {
    table.increments('id').primary()
    table.string('type')
    table.decimal('value')
    table.string('contractor_id').references('contractors.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('expenses')
};
