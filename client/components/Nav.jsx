import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

function Nav (props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img className="bannerimg" src="/images/nosixlogo.png" />
      </div>
      <br/>
      <Link to="/home">Home</Link>{' | '}
      {props.auth.isAuthenticated
        ? <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
        : <div>
          <Link to="/login">Login</Link>{' | '}
          <Link to="/register">Register</Link>
        </div>
      }
    </nav>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Nav)
