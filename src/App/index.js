import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './page/home'

import './style.scss'

const app = () => (
  <Router>
    <Route exact path='/' component={Home} />
  </Router>
)

export default app
