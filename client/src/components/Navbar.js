import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider"
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

  openBurger() {
    var x = document.getElementById('nav')
    if (x.className === 'nav') {
      x.className += 'responsive'
    } else {
      x.className = 'nav'
    }
  }

  rightNavItems = () => {
    const { auth: { user, handleLogout } } = this.props

    if (user) {
      return (
        <>
          <a class='nav-link' href='/my_cats'>
            My Cats
        </a>
          <a
            class='nav-link'
            onClick={() => handleLogout(this.props.history)}
          >
            Logout
        </a>
        </>
      )
    } else {
      return (
        <>
          <a class='nav-link' href='/login'>
            Login
        </a>
          <a class='nav-link' href='/register'>
            Register
        </a>
        </>
      )
    }
  }

  render() {
    return (
      <>
        <nav class='nav' id='nav'>
          <a class='nav-link' href='/'>
            <img class='logo' src='https://image.flaticon.com/icons/svg/57/57162.svg' />
          </a>
          {this.rightNavItems()}
          <FontAwesomeIcon class='icon' icon={faBars} onClick={() => this.openBurger()} />
        </nav>
      </>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar)