import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import Menu from './pages/Menu'
import Home from '../src/pages/Home'
import Venu from './pages/Venu'
import Contact from './pages/Contact'
import About from './pages/About'
import Booking from './pages/Booking'
const App = () => {
  return (
    <BrowserRouter>
    <div><Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Venue' element={<Venu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Booking' element={<Booking/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App