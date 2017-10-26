
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('expenses').insert([
        {id: 1, type:'food', value: 100, contractor_id: 1},
        {id: 2, type: 'rent', value: 210, contractor_id: 1},
        {id: 3, type: 'travel', value: 60, contractor_id: 1},
        {id: 4, type: 'entertainment', value: 30, contractor_id: 1}
      ]);
    });
};
