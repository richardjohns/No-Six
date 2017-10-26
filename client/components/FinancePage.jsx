import React from 'react'
import {connect} from 'react-redux'
import {sumTotal} from '../utils/sumtotal'
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
        <progress className="progress is-large" value="60" max={this.props.total || 100}></progress> <div className="level-right">Total:{this.props.total * 52}</div>
        <br/>
        <br/>
        <a className="button is-large"><Link to="/ledger">Ledger &#8594;</Link></a><br/>
        <a className="button is-large"><Link to="/expenses">Expenses &#8594;</Link></a>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    total: sumTotal(state.expenses)
  }
}

export default connect(mapStateToProps)(FinancePage)
