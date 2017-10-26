const router = require('express').Router()

const db = require('../db/expenses')

router.get('/users/:id', (req, res) => {
  db.getWeeklyExpenses(req.params.id)
    .then(result => res.json(result))
    .catch(() => {
      res.status(500).end()
    })
})

router.put('/users/:id', (req, res) => {
  db.updateWeeklyExpenses(Number(req.params.id), req.body)
    .then(() => {
      res.status(201).end()
    })
    .catch(() => {
      res.staus(500).end()
    })
})

router.post('/users/:id', (req, res) => {
  db.addWeeklyExpense(req.params.id, req.body)
    .then(() => {
      res.status(201).end()
    })
    .catch(() => {
      res.staus(500).end()
    })
})

// this delete route does not work :(
// router.delete('users/:id', (req, res) => {
//   db.deleteExpense(req.body)
//     .then(() => {
//       res.status(201).end()
//     })
//     .catch(() => {
//       res.status(500).end()
//     })
// })

module.exports = router
