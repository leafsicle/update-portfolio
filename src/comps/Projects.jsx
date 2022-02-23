import React from 'react'
import Header from './Header'

const Projects = () => {
  return (
    <div className='body bg-secondary contrast text-white lg:text-3xl text-xl font-sans'>
      <Header />
      <main className=''>
        <div className=' text-4xl mb-4'>Coming Soon</div>
        <span className='text-3xl hover:text-5xl     transition-all '>🚧</span>
      </main>
    </div>
  )
}

export default Projects
