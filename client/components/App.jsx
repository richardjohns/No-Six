import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
<<<<<<< refs/remotes/origin/master
import FinancePage from './FinancePage'
import Expenses from './Expenses'
import Ledger from './Ledger'
=======
import LedgerEntryPanel from './LedgerEntryPanel'
>>>>>>> add ledger entry page

const App = () => (
  <Router>
    <div className="container">
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
<<<<<<< refs/remotes/origin/master
      <hr/>
      <Route path="/home" component={FinancePage} />
      <Route path="/expenses" component={Expenses} />
      <Route path="/ledger" component={Ledger} />
=======
      <Route path="/ledgerEntry" component={LedgerEntryPanel}/>
>>>>>>> add ledger entry page
    </div>
  </Router>
)

export default App
