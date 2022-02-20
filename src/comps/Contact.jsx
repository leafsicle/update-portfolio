import React from 'react'
import Header from './Header'
import ExternalLink from './ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let socials = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/cookem529/',
    alt: 'External link to linkedin',
    icon: 'fa-brands fa-linkedin ',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/Leafsicle#7877',
    alt: 'External link to Discord',
    icon: 'fa-brands fa-discord ',
  },
  {
    name: 'Github',
    url: 'https://github.com/leafsicle',
    alt: 'External link to GitHub',
    icon: 'fa-brands fa-github ',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/M__cooke',
    alt: 'External link to Twitter',
    icon: 'fa-brands fa-twitter ',
  },
]
const Contact = () => {
  return (
    <div className='mx-auto body bg-secondary '>
      <Header />
      <main className=''>
        {socials.map((social, index) => (
          <ExternalLink socialInfo={social} key={index} />
        ))}
      </main>
    </div>
  )
}

export default Contact
