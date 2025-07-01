import React from 'react'
import Hero from '../../components/User/hero/Hero'
import Welcome from '../../components/User/welcome/Welcome'
import Services from '../../components/services/Services'
import HotelStatsSection from '../../components/User/section-counter/Count'
import Instagram from '../../components/User/instagram/Instagram'

const Home = () => {
  return (
    <>
        <Hero/>
        <Welcome/>
        <Services/>
        <HotelStatsSection/>
        <Instagram/>
    </>
  )
}

export default Home