const router = require('express').Router()

const db = require('../db/ledger')

router.get('/:id', (req, res) => {
  db.getContractorLedger(req.params.id)
    .then(result => res.json(result))
    .catch(() => {
      res.status(500).end()
    })
})

router.post('/:id', (req, res) => {
  const newTrans = {
    contractorId: req.body.contractorId,
    transactionAmount: req.body.transactionAmount,
    transactionComment: req.body.transactionComment
  }
  db.addContractorTransaction(newTrans)
    .then(() => {
      res.status(201).end()
    })
    .catch(() => {
      res.status(500).end()
    })
})

module.exports = router
