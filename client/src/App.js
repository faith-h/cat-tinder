import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import MyCats from './components/MyCats'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Register from './components/Register'
import { Switch, Route, } from 'react-router-dom'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path='/my_cats' component={MyCats} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App
