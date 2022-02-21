import './App.css'
import Contact from './comps/Contact'
import image from './self.jpg'

function App() {
  return (
    <div className='body bg-secondary contrast text-white lg:text-3xl text-2xl font-sans'>
      <main className='object-center'>
        <img
          src={image}
          alt='Image of Me. Matt Cooke.'
          className='w-1/5 pt-5 mx-auto rounded-full'
        />
      </main>
      <aside className='text-active hover:text-white'>
        Currently living in Baltimore Maryland
      </aside>

      <Contact />
    </div>
  )
}

export default App
