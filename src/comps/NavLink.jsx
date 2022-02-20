import React from 'react'

const NavLink = ({ pageName }) => {
  return (
    <a
      href='/${pageName}'
      className='text-base font-medium text-indigo-100 hover:text-emerald-400'>
      {pageName}
    </a>
  )
}

export default NavLink
