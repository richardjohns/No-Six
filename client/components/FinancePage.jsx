import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class FinancePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <progress className="progress is-large" value="60" max="100"></progress>
        <a className="button is-large"><Link to="/ledger">Ledger &#8594;</Link></a><br/>
        <a className="button is-large"><Link to="/expenses">Expenses &#8594;</Link></a>
      </div>
    )
  }
}

export default connect()(FinancePage)
