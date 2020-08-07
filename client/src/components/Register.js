import React from 'react'
import { AuthConsumer, } from '../providers/AuthProvider'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state
    const { auth: { handleRegister, }, history } = this.props

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation }, history)
    else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password, passwordConfirmation } = this.state

    return (
      <>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <img class='logo' style={{ height: '4rem' }} src='https://image.flaticon.com/icons/svg/57/57162.svg' /> <h1 style={{ fontSize: '4rem' }}>  tinder </h1>
        </div>
        <div class='loginBox'>
          <h1 class='header'> Register </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              class='form'
              label="Email"
              required
              autoFocus
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <input
              class='form'
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            <input
              class='form'
              label="Password Confirmation"
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />
            <div style={{ textAlign: 'center' }} >
              <button class='submitButton' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}