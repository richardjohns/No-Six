var router = require('express').Router()

var {userExists, createUser} = require('../db/contractors')
var token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {name, username, password} = req.body
  userExists(username, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "User exists"})
      createUser(name, username, password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => res.status(500).send({message: err.message}))
}



router.post('/login', token.issue)

module.exports = router
