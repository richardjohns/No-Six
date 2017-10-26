import React from 'react'
import { connect } from 'react-redux'

class Expenses extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>Expense Page</div>
    )
  }
}

export default connect()(Expenses)
