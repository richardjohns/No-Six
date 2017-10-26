var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')
var expenses = require('./routes/expenses')
var ledger = require('./routes/ledger')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

server.use('/api/contractor/expenses', expenses)
server.use('/api/ledger', ledger)
server.use('/api/auth', require('./routes/auth'))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
