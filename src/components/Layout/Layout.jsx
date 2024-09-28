import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Layout