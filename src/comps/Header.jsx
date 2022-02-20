import NavLink from './NavLink'
import { Link } from 'react-router-dom'

const Header = () => {
  let pages = ['About', 'Projects', 'Contact']
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 bg-blue-900'>
      <nav
        className='flex justify-between items-center border-b-2 border-indigo-100 py-6 md:justify-start md:space-x-10'
        role='navigation'>
        <Link className='text-indigo-200 hover:text-emerald-400' to='/'>
          ICON!!
        </Link>

        {pages.map((page, index) => (
          <NavLink key={index} pageName={page}></NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Header
