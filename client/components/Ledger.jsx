import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Ledger extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  sumTotal () {
    return this.props.transactions.reduce((gross, Transaction) => {
      return gross + parseFloat(Transaction.amount)
    }, 0)
  }

  renderRows () {
    return this.props.transactions.map(transaction => {
      return <tr> <td >{transaction.comment}</td> <td>{transaction.amount}</td></tr>
    })
  }

  render () {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                  Ledger
              </h1>
              <h2 className="subtitle">
                  Here you can view your income and expenses.
              </h2>
            </div>
          </div>
        </section>
        <br />
        <table className="table is-striped">
          <thead>
            <tr><th>Transaction</th><th>Amount</th></tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <br /><hr />
      Gross Earnings to Date: {this.sumTotal()}

        <br/>

        <Link to='/ledgerEntry' >Add Transaction</Link>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps)(Ledger)
