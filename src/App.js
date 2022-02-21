import './App.css'
import Contact from './comps/Contact'
import image from './self.jpg'

function App() {
  return (
    <div className='body bg-secondary contrast text-white lg:text-3xl text-2xl font-sans'>
      <main className='mb-5'>
        <img
          src={image}
          alt='Image of Me. Matt Cooke.'
          title='Did you come here looking for something fun after being trained for over a decade by XKCD? 🥚'
          className='w-1/5 pt-5 mx-auto rounded-full'
        />
      </main>
      <section className='text-active hover:text-red  mb-5'>
        <a
          target='_blank'
          rel='noopener'
          href='https://goo.gl/maps/HRPNGhGiPNufj7zA6'
          alt='link to google map of Baltimore, MD'>
          Currently living in Baltimore Maryland
        </a>
      </section>

      <Contact />
    </div>
  )
}

export default App
