import NavLink from './NavLink'
const Header = () => {
  let pages = ['About', 'Projects', 'Contact']
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <div className='flex justify-between items-center border-b-2 border-indigo-100 py-6 md:justify-start md:space-x-10'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <a href='/' className='text-indigo-200 hover:text-emerald-400'>
            Icon
          </a>
        </div>
        {pages.map((page, index) => (
          <NavLink key={index} pageName={page}></NavLink>
        ))}
      </div>
    </div>
  )
}

export default Header
