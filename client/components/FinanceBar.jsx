import React from 'react'
import { connect } from 'react-redux'

class FinanceBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div><progress className="progress is-large" value="60" max="100"></progress></div>
    )
  }
}

export default connect()(FinanceBar)
