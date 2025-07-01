import React from 'react'
import Hero from '../../components/User/hero/Hero'
import Welcome from '../../components/User/welcome/Welcome'
import Services from '../../components/services/Services'
import HotelStatsSection from '../../components/User/section-counter/Count'
import Instagram from '../../components/User/instagram/Instagram'
import Rooms from '../../components/User/rooms/Rooms'

const Home = () => {
  return (
    <>
        <Hero/>
        <Welcome/>
        <Services/>
        <Rooms/>
        <HotelStatsSection/>
        <Instagram/>
    </>
  )
}

export default Home