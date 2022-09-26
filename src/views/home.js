import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Assurance Coordinator</title>
        <meta property="og:title" content="Internal Assurance Coordinator" />
      </Helmet>
    </div>
  )
}

export default Home
