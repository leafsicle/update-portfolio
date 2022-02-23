import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import About from './comps/About'
import Projects from './comps/Projects'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
