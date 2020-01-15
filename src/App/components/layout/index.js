import React from 'react'
import PropTypes from 'prop-types'
import Header from './header.js'

const Layout = (props) => (
  <div className='layout_page'>
    <Header />
    <React.Fragment>
      {props.children}
    </React.Fragment>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
