import React from 'react'

import Layout from '../../components/layout'
import SearchBox from '../../components/search-box'

const Home = () => {
  return (
    <Layout>
      <div className='main-content'>
        <div className='map-wrapper'>
          <SearchBox />
        </div>
        <section />
      </div>
    </Layout>
  )
}

export default Home
