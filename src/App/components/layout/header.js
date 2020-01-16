import React from 'react'
// import PropTypes from 'prop-types'

/*eslint-disable*/

const Header = (props) => (
  <header>
    <div className='container'>
      <div className='header__content'>
        <ul className='menu menu-left'>
          <li><a href='#'>Travel</a></li>
          <li><a href='#'>Explore</a></li>
        </ul>
        <ul className='menu'>
          <li className='nav-item dropdown  visible-lg'>
            <a className='nav-link dropdown-toggle'><span className='flag flag-gb'> </span> English</a>
            <div className='dropdown-menu'>
              <div className='dropdown-item'><a href='#'><span className='flag flag-hr'> </span> Hrvatski</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-gb'> </span> English</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-de'> </span> Deutsch</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-nl'> </span> Nederlands</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-bg'> </span> Български</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-ro'> </span> Română</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-tr'> </span> Türkçe</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-ru'> </span> Русский</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-it'> </span> Italiano</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-es'> </span> Español</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-fr'> </span> Français</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-hu'> </span> Magyar</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-pl'> </span> Polski</a></div>
              <div className='dropdown-item'><a href='#'><span className='flag flag-sa'> </span> العربية/عربي</a></div>
            </div>
          </li>
          <li className='nav-item dropdown-currency  visible-lg'>
            <a className='nav-link dropdown-toggle-currency'>€ EUR</a>
            <div className='dropdown-menu-currency'>
              <div className='dropdown-item'><a href='#'>€ EUR</a></div>
              <div className='dropdown-item'><a href='#'>HRK</a></div>
              <div className='dropdown-item'><a href='#'>$ USD</a></div>
            </div>
          </li>
          <li className='visible-lg'><a className='manage-booking-toggle' href='#'>Manage My Booking</a></li>
          <li className='sidebar-menu-item'>
            <a id='sidebar-toggle' href='#'>
              <div className='icon-menu' />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className='sidebar-overlay' />
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='sidebar-close'>
          <div className='icon-cross' />
        </div>

        <div className='sidebar-section hidden-lg'>
          <ul>
            <li className='sidebar-language'>
              <span className='flag flag-gb'> </span>
              <select>
                <option>English</option>
                <option>Hrvatski</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>Nederlands</option>
                <option>Български</option>
                <option>Română</option>
                <option>Türkçe</option>
                <option>Русский</option>
                <option>Italiano</option>
                <option>Español</option>
                <option>Français</option>
                <option>Magyar</option>
                <option>Polski</option>
                <option>عربية/عربي</option>
              </select>
            </li>
            <li>
              <select>
                <option>€ EUR</option>
                <option>HRK</option>
                <option>$ USD</option>
              </select>
            </li>
          </ul>
        </div>

        <div className='sidebar-section hidden-lg'>
          <ul>
            <li><a className='manage-booking-toggle' href='#'><span className='icon-book' /> Manage My Booking</a></li>
          </ul>
        </div>

        <div className='sidebar-section'>
          <ul>
            <li><a href='#'><span className='icon-head' /> Login</a></li>
            <li><a href='#'><span className='icon-head' />Register</a></li>
          </ul>
        </div>

        <div className='sidebar-section'>
          <p className='sidebar-section-title'>Contact</p>
          <ul>
            <li><a href='#'><span className='icon-mail' /> Booked with an incorrect email?</a></li>
            <li><a href='#'><span className='icon-phone' /> Support</a></li>
          </ul>
        </div>

        <div className='sidebar-section'>
          <p className='sidebar-section-title'>Company</p>
          <ul>
            <li><a href='#'><span className='icon-search' />Ferry Lines</a></li>
            <li><a href='#'><span className='icon-anchor' />Ferry Companies</a></li>
            <li><a href='#'><span className='icon-star' /> About us</a></li>
          </ul>
        </div>

        <div className='sidebar-section'>
          <p className='sidebar-section-title'>Legal</p>
          <ul>
            <li><a href='#'><span className='icon-unlock' />Terms and Conditions</a></li>
            <li><a href='#'><span className='icon-unlock' />Terms of Use</a></li>
            <li><a href='#'><span className='icon-unlock' />Privacy Policy</a></li>
            <li><a href='#'><span className='icon-unlock' />Security</a></li>
            <li><a href='#'><span className='icon-cog' />Cookie settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
}

export default Header
