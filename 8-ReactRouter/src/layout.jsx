import React from 'react'
import Header from './components/Header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default layout