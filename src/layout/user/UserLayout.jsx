import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from '../../components/User/header/Header'

const UserLayout = () => {
  return (
    <> 
    <Header/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default UserLayout