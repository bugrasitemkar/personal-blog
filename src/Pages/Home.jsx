import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'

function Home() {
  return (
    <div>
      <Header />
      <div className="hidden md:block">
        <Search />
      </div>
      <IntroPost />
    </div>
  )
}

export default Home