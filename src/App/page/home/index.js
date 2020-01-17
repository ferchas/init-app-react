import React, { useState } from 'react'

import Layout from '../../components/layout'
import SearchBox from '../../components/search-box'
import TravelSummary from '../../components/travel-summary'

const Home = () => {
  const [searchSubmitted, setSearchSubmitted] = useState(false)
  return (
    <Layout>
      <div className='main-content'>
        <div className='map-wrapper'>
          <SearchBox setSearchSubmitted={setSearchSubmitted} />
        </div>
        {searchSubmitted && (
          <section>
            <TravelSummary />
          </section>
        )}
      </div>
    </Layout>
  )
}

export default Home
