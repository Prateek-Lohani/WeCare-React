import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserLogin from '../components/UserLogin'
import Home from '../components/Home'
import UserSignup from '../components/UserSignup'
import CoachLogin from '../components/CoachLogin'
import CoachSignup from '../components/CoachSignup'

const Routing = () => {
    
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/UserLogin' element={<UserLogin/>}></Route>
          <Route path='/UserSignup' element={<UserSignup/>}></Route>
          <Route path='/CoachLogin' element={<CoachLogin/>}></Route>
          <Route path='/CoachSignup' element={<CoachSignup/>}></Route>
        </Routes>
    </>

  )
}

export default Routing