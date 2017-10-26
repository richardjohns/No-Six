import {combineReducers} from 'redux'

import auth from './auth'
import expenses from './expenses'
import transactions from './ledger'

export default combineReducers({
  auth,
  expenses,
  transactions
})
