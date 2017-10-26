exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('contractors', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('username')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contractors')
};
