import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLink = ({ pageName }) => {
  return (
    <Link
      to={pageName}
      className='text-base 
      font-medium 
      py-2
      contrast
      text-indigo-100 
      transition-all 
      hover:text-active 
      hover:bg-red
      hover:rounded
     border-2
      border-white
      border-dashed
      lg:text-xl
      px-5 
      sm:px-4'>
      {pageName}
    </Link>
  )
}

export default NavigationLink
