import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import IndexPage from './components/Pages/IndexPage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {
          <IndexPage />
        }></Route>
        <Route path='/login' element = {
          <LoginPage />
        }></Route>
        <Route path='/register' element = {
          <RegisterPage />
        }></Route>
      </Route>
    </Routes>

  )
}

export default App
