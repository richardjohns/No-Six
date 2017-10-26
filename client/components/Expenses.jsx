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

  sumTotal () {
    return this.props.expenses.reduce((totalExpense, expense) => {
      return totalExpense + parseFloat(expense.amount)
    }, 0)
  }

  render () {
    return (
      <div>
        <table className="table is-striped">
          <thead>
            <tr><th>Expense</th><th>Amount</th></tr>
          </thead>
          <tbody>
            {this.props.expenses.map(expense => {
              return <tr> <td >{expense.expense}</td> <td>{expense.amount}</td></tr>
            })}
          </tbody>
        </table>
        <br/><hr/>
        Total Weekly: {this.sumTotal()}
        <br/>
        Total Yearly: {this.sumTotal() * 52}
        <br/>
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
