var hash = require('../auth/hash')

function createUser (name, username, password, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('contractors')
        .insert({name, username, password:hash})
        .then(ids => resolve(ids[0]))
    })

  })
}
function userExists (username, db) {
  return db('contractors')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db) {
  return db('contractors')
    .where('username', username)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}
