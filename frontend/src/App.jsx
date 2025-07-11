import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignUp from './pages/UserSignUp'
import Userlogin from './pages/Userlogin'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-signup' element={<UserSignUp/>}/>
        <Route path='/user-login' element={<Userlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        
      </Routes>
    </div>
  )
}

export default App