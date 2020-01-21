import React, { useState } from 'react'

import './style.scss'

const SearchBox = () => {
  const [way] = useState([
    {
      label: 'One Way',
      id: '1'
    },
    {
      label: 'Return',
      id: '2'
    },
    {
      label: 'MultiCity',
      id: '3'
    }
  ])

  const [seletedWay, setWay] = useState(null)

  return (
    <div className='sbox-form'>
      <form>
        <div className='sbox-form-header'>
          {
            way.map((w, k) =>
              <div className='sbox-form-header__item' key={k}>
                <input
                  type='radio'
                  name='travelType'
                  value={w.id}
                  checked={seletedWay === w.id}
                  onChange={() => setWay(w.id)}
                />
                <label>{w.label}</label>
              </div>
            )
          }
        </div>
        <div className='sbox-form-row'>
          <div className='sbox-form-item'>
            <label>Where from?</label>
            <input type='text' id='from' name='whereFrom' placeholder='Hvar' />
          </div>
        </div>
        <div className='sbox-form-row'>
          <div className='sbox-form-item'>
            <label>Where to?</label>
            <input type='text' id='to' name='whereTo' placeholder='Hvar' />
          </div>
        </div>
        <div className='sbox-form-row'>
          <div className='sbox-form-item'>
            <label>Departure</label>
            <input type='text' id='departure' name='arrival' placeholder='departure' />
          </div>
          <div className='sbox-form-item sbox-form-item--return'>
            <label>Return</label>
            <input type='text' id='arrival' name='departure' placeholder='arival' />
          </div>
        </div>
        <div className='sbox-form-row'>
          <div className='sbox-form-item'>
            <label>Passengers</label>
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </div>
          <div className='sbox-form-item'>
            <label>Vehicles</label>
            <select>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </div>
        </div>
        <div className='sbox-form-row'>
          <a href='departures-list.html#jumpToHero' className='submit-btn'>Search</a>
        </div>
      </form>
    </div>
  )
}

export default SearchBox
