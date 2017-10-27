import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

function Nav (props) {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/home">
          <img className="bannerimg" src="/images/nosixlogo.png" />
        </Link>
      </div>
      <br/>
      <div className="navbar-end">
        <Link to="/home">Home</Link>{' | '}
        {props.auth.isAuthenticated
          ? <button className="button is-light" onClick={() => props.dispatch(logoutUser())}>Logout</button>
          : <div>
            <Link to="/login">Login</Link>{' | '}
            <Link to="/register">Register</Link>
          </div>
        }
      </div>
    </nav>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Nav)
