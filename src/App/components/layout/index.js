import React from 'react'
import PropTypes from 'prop-types'
import Header from './header.js'

import './style.scss'

const Layout = (props) => (
  <div className='layout_page'>
    <Header />
    {props.children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
