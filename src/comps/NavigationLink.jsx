import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({ pageName, index }) => {
  return (
    <Link
      to={'/' + pageName}
      tabIndex={index}
      className='text-base font-medium 
      contrast
      text-indigo-100 
      transition-all 
      hover:text-active 
      hover:bg-red
      hover:rounded
      px-5 
      sm:px-4'>
      {pageName}
    </Link>
  )
}

export default NavigationLink
