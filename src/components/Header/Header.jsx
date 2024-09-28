import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between mb-[50px] items-center'>
        <Link to="/" className="font-bold text-[1.5rem]">MyLogo</Link>
        <nav className='flex gap-[15px]'>
            <Link to='/login'>Login</Link>
            <Link to = '/register'>Register</Link>
        </nav>
    </header>
  )
}

export default Header