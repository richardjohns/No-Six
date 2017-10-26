
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contractors').del()
    .then(function () {
      // Inserts seed entries
      return knex('contractors').insert([
        {id: 1,
          name: 'Bob',
          username: 'Bob123',
          password: ''
        }
      ])
    })
}
