import React from 'react'
import Header from './Header'
import ExternalLink from './ExternalLink'

let socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/cookem529/',
    alt: 'External link to linkedin',
    icon: 'temp',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/Leafsicle#7877',
    alt: 'External link to Discord',
    icon: 'temp',
  },
  {
    name: 'Github',
    url: 'https://github.com/leafsicle',
    alt: 'External link to GitHub',
    icon: 'temp',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/M__cooke',
    alt: 'External link to Twitter',
    icon: 'temp',
  },
]
const Contact = () => {
  return (
    <div className='mx-auto body bg-secondary '>
      <Header />
      <main className='contrast'>
        {socials.map((social, index) => (
          <ExternalLink socialInfo={social} key={index} />
        ))}
      </main>
    </div>
  )
}

export default Contact
