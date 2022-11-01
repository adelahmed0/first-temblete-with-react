import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact'
import Index from './Components/Index'
import Navbar from './Components/Navbar'

class App extends Component {
    
  render() {
    return (
      <BrowserRouter basename="/first-temblete-with-react/">
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App