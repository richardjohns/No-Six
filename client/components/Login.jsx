import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit (e) {
    e.preventDefault()
    let {username, password} = this.state
    this.props.dispatch(loginUser({username, password}))
  }
  render () {
    return (
      <form className="field" onSubmit={this.submit}>
        <label>Userame:
          <input className="input" type="text" name="username" onChange={this.updateDetails}/>
        </label><br/>
        <label>Password:
          <input className="input" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <br/>
        <Link to="/home"><input className="button is-medium" type="submit" /></Link>
      </form>
    )
  }
}

export default connect()(Login)
