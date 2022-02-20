import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavLink from './NavLink'
const Header = () => {
  let pages = ['About', 'Projects', 'Contacts']
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <nav
        className='flex justify-between items-center border-b-2 border-indigo-100 py-6 md:justify-start md:space-x-10'
        role='navigation'>
        <li>
          <a href='/' className='text-indigo-200 hover:text-emerald-400'>
            <FontAwesomeIcon icon='fa-solid fa-code' />
          </a>
        </li>
        <li className='text-indigo-200 hover:text-emerald-400 '>
          {pages.map((page, index) => (
            <NavLink key={index} pageName={page}></NavLink>
          ))}
        </li>
      </nav>
    </div>
  )
}

export default Header
