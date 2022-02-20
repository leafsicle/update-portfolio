import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ pageName }) => {
  return (
    <Link
      to={'/' + pageName}
      className='text-base font-medium text-indigo-100 hover:text-emerald-400 px-4 sm:px-6'>
      {pageName}
    </Link>
  )
}

export default NavLink
