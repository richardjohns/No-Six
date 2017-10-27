const router = require('express').Router()
const db = require('../db/currentUser')

router.get('/:id', (req, res) => {
  db.updateCurrentUser(req.params.id)
  .then(result => {
      res.json(result)
    })
    .catch(() => {
      res.status(500).end()
    })
})

module.exports = router