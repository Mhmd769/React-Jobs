import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLayouts