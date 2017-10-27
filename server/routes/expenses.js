const router = require('express').Router()
const token = require('../auth/token')

const db = require('../db/expenses')

router.get('/users/:id', (req, res) => {
  db.getWeeklyExpenses(req.params.id)
    .then(result => res.json(result))
    .catch(() => {
      res.status(500).end()
    })
})

router.put('/users', token.decode, (req, res) => {
  db.updateWeeklyExpense(Number(req.user.id), req.body)
    .then(() => {
      res.status(201).end()
    })
    .catch(() => {
      res.status(500).end()
    })
})

router.post('/users', token.decode, (req, res) => {
  console.log(req.user)
  db.addWeeklyExpense(Number(req.user.id), req.body)
    .then((id) => {
      res.json({newId: id[0]}).end()
    })
    .catch((res) => {
      res.status(500).end()
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
