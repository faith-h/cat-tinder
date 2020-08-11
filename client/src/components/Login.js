import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'

class Login extends React.Component {
  state = { email: 'test@test.com', password: 'password' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.auth.handleLogin({ email, password }, this.props.history)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state

    return (
      <>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <img alt='cat logo' style={{ height: '4rem', filter: 'invert(1)' }} src='https://image.flaticon.com/icons/svg/57/57162.svg' /> <h1 style={{ fontSize: '4rem' }}>  tinder </h1>
        </div>
        <div class='loginBox'>
          <h1 class='header'> Login </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              class='form'
              label="Email"
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <input
              required
              class='form'
              label="Password"
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            <div style={{ textAlign: 'center' }}>
              <button class='submitButton' type='submit'> Click here to demo! </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}