import NavigationLink from './NavigationLink'
import { Link } from 'react-router-dom'

const Header = () => {
  let pages = ['About', 'Projects', 'Contact']
  return (
    <nav
      className='flex justify-start 
        App bg-primary top-0 w-screen p-6
        md:justify-start
        items-center 
        border-b-2 
        py-6 
        text-white
        font-sans
        contrast
        hover:text-active
        border-indigo-100 '
      role='navigation'>
      <Link className='text-4xl mr-3' tabIndex={0} to='/'>
        🚀
      </Link>
      <nav className='navbar navbar-light bg-light'>
        <div className='collapse' id='navbarToggleExternalContent3'>
          {pages.map((page, index) => (
            <NavigationLink
              key={index}
              pageName={page}
              index={index}></NavigationLink>
          ))}
        </div>
        {/* <div className=' lg:hidden container-fluid'>
          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarToggleExternalContent3'
            aria-controls='navbarToggleExternalContent3'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fas fa-bars'></i>
          </button>
        </div> */}
      </nav>
    </nav>
  )
}

export default Header
