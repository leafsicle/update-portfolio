import './App.css'
import Contact from './comps/Contact'
import image from './self.jpg'
import Header from './comps/Header'

function App() {
  return (
    <div className='body bg-secondary contrast text-white lg:text-3xl text-2xl font-sans'>
      <Header />
      <section className='text-active '>
        {/* To DO add a hover effect of the maryland flag for bmore */}
        <p>Currently living in Baltimore Maryland</p>
      </section>
      <Contact />

      <main className='mb-5 mt-10 w-1/4 mx-auto object-contain'>
        <img
          src={image}
          alt='Matt Cooke.'
          title='Did you come here looking for something fun after being trained for over a decade by XKCD? 🥚'
          className='border-4 border-dashed '
        />
      </main>
    </div>
  )
}

export default App
