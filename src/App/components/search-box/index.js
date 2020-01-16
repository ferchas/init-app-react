import React from 'react'
// import PropTypes from 'prop-types'

import './style.scss'

const SearchBox = () => (
  <div className='map-form'>
    <form>
      <div className='form-header'>
        <div className='form-header__item'>
          <input type='radio' id='one-way' name='travelType' value='One Way' />
          <label>One Way</label>
        </div>
        <div className='form-header__item'>
          <input type='radio' id='return' checked='checked' name='travelType' value='Return' />
          <label>Return</label>
        </div>
        <div className='form-header__item'>
          <input type='radio' id='multicity' name='travelType' value='MultiCity' />
          <label>MultiCity</label>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-item'>
          <label>Where from?</label>
          <input type='text' id='from' name='whereFrom' placeholder='Hvar' />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-item'>
          <label>Where to?</label>
          <input type='text' id='to' name='whereTo' placeholder='Hvar' />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-item'>
          <label>Departure</label>
          <input type='text' id='departure' name='arrival' placeholder='departure' />
        </div>
        <div className='form-item form-item--return'>
          <label>Return</label>
          <input type='text' id='arrival' name='departure' placeholder='arival' />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-item'>
          <label>Passengers</label>
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
        <div className='form-item'>
          <label>Vehicles</label>
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
      </div>
      <div className='form-row'>
        <a href='departures-list.html#jumpToHero' className='submit-btn'>Search</a>
      </div>
    </form>
  </div>
)

export default SearchBox
