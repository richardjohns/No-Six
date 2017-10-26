
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ledger').del()
    .then(function () {
      // Inserts seed entries
      return knex('ledger').insert([
        {id: 1, contractor_id: 1, transaction_amount: 300, comment:'From a visual design contract'},
        {id: 2, contractor_id: 1, transaction_amount: -400, comment:'Weekly withdrawl'},
        {id: 3, contractor_id: 1, transaction_amount: 500, comment:'From a visual design contract'}
      ]);
    });
};
