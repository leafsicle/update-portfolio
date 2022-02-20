import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({ pageName, index }) => {
  return (
    <Link
      to={'/' + pageName}
      tabIndex={index}
      className='text-base font-medium 
      text-indigo-100 
      hover:text-active 
      hover:bg-red
      px-5 
      shadow-sm
      sm:px-4'>
      {pageName}
    </Link>
  )
}

export default NavigationLink
