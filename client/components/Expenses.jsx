import React from 'react'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

class Expenses extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expense: '',
      amount: ''
    }
    this.submitExpense = this.submitExpense.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  submitExpense (evt) {
    evt.preventDefault()
    this.props.dispatch(addExpense(this.state))
  }

  render () {
    return (
      <div>
        <table className="table">
          <thead>
            <thread><tr><th>Expense</th><th>Amount</th></tr></thread>
          </thead>
          <tbody>
            <tr>
              {this.props.expenses.map(expense => {
                return <td >{expense.expense} {expense.amount}</td>
              })}
            </tr>
          </tbody>
        </table>
        <br/>
        <form onSubmit={this.submitExpense}>
          <div className="field">
            <label className="label">Expense</label>
            <div className="control">
              <input className="input" type="text" placeholder="Food, rent, petrol etc..." onChange={this.handleChange} name="expense"/>
            </div>
            <br/>
            <label className="label">Amount</label>
            <div className="control">
              <input className="input" type="text" placeholder="$0.00" onChange={this.handleChange} name="amount" />
            </div>
            <div>
              <br/>
              <input className="button is-medium is-success" type="submit" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(Expenses)
