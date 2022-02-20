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
        border-indigo-100'
      role='navigation'>
      <Link className='text-4xl mr-3' tabIndex={0} to='/'>
        🚀
      </Link>

      {pages.map((page, index) => (
        <NavigationLink
          key={index}
          pageName={page}
          index={index}></NavigationLink>
      ))}
    </nav>
  )
}

export default Header
