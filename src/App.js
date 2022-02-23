import './App.css'
import Contact from './comps/Contact'
import image from './self.jpg'
import Header from './comps/Header'

function App() {
  return (
    <div className='body bg-secondary contrast text-white lg:text-3xl text-2xl font-sans'>
      <Header />
      <main className='mb-5 pt-10 '>
        <img
          src={image}
          alt='Image of Me. Matt Cooke.'
          title='Did you come here looking for something fun after being trained for over a decade by XKCD? 🥚'
          className='sm:w-1/2 md:1/6 lg:h-1/6 xl:1/6 2xl:1/4 mx-auto rounded-lg border-4 border-dashed '
        />
      </main>
      <section className='text-active '>
        {/* To DO add a hover effect of the maryland flag for bmore */}
        <p>Currently living in Baltimore Maryland</p>
      </section>

      <Contact />
    </div>
  )
}

export default App
