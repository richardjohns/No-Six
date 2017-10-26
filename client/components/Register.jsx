import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {Link} from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit (e) {
    e.preventDefault()
    e.target.reset()
    let {name, username, password, confirm_password} = this.state
    if (password == confirm_password) this.props.dispatch(registerUserRequest({name, username, password}))
  }
  render () {
    return (
      <form className="field" onSubmit={this.submit}>
        <label className="label">Name:
          <input className="input" type="text" name="name" onChange={this.updateDetails}/>
        </label ><br/>
        <label className="label">username:
          <input className="input" type="text" name="username" onChange={this.updateDetails}/>
        </label><br/>
        <label className="label">Password:
          <input className="input" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <label className="label">Confirm:
          <input className="input" type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label><br/>
        <Link to="/home"><input className="button is-medium" type="submit" /></Link>
      </form>
    )
  }
}

export default connect()(Register)
