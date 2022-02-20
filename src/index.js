import React from 'react'
import ReactDOM, { render } from 'react-dom'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Content from './comps/Content'
import Contact from './comps/Contact'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/About' element={<Content />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)
