import React from 'react'
import { connect } from 'react-redux'

class Ledger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>Ledger Page</div>
    )
  }
}

export default connect()(Ledger)
