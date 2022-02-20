import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import About from './comps/About'
import Contact from './comps/Contact'
import Header from './comps/Header'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
