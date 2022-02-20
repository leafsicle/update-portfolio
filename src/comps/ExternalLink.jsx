import React from 'react'

const ExternalLink = ({ socialInfo }) => {
  return (
    <button
      role='button'
      className='contrast mr-8 text-2xl text-white font-sans'
      title={'External link to ' + socialInfo.name}>
      <a target='_blank' rel='noopener' href={socialInfo.url}>
        {socialInfo.icon}
      </a>
    </button>
  )
}

export default ExternalLink
