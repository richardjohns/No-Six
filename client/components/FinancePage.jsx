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
        <progress className="progress is-large is-primary" value={this.props.grossIncome} max={this.props.total*52 || 100}></progress> <div className="level-right">Total:{this.props.total * 52}</div>
        <br />
        <br />
        <div className="tile is-ancestor">
          <div className="tile is-16 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">Ledger</p> <br/>
              <p className="subtitle">Here you can work out your gross earnings and see how your progress bar changes ! This highlights your financial goals and process your current work. Good luck saving !</p>
              <br />
              <button className="button is-large"><Link to="/ledger">Ledger &#8594;</Link></button>
            </div>

            <div>
              <div className="tile is-child box">
                <p className="title">Expenses</p><br />
                <p className="subtitle">Here you can input your expenses which will be calculated weekly and yearly. The yearly amount sets your living full bar total !</p>
                <button className="button is-large"><Link to="/expenses">Expenses &#8594;</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    total: sumTotal(state.expenses),
    grossIncome: sumTotal(state.transactions)
  }
}

export default connect(mapStateToProps)(FinancePage)
