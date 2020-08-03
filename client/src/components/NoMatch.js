import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <h1> We can't seem to find that page, try returning <Link to="/" style={{ textDecoration: 'none' }} >home. </Link> </h1>
)

export default NoMatch