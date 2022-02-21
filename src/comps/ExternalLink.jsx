import React from 'react'

const ExternalLink = ({ socialInfo }) => {
  return (
    <button
      role='button'
      className='contrast text-2xl m-2 w-100 text-white font-sans '
      title={'External link to ' + socialInfo.name}>
      <a target='_blank' rel='noopener' href={socialInfo.url} className=''>
        <i
          className={
            socialInfo.icon +
            'bg-primary text-white rounded-sm p-4 w-30px hover:bg-red hover:text-active transition-all hover:rounded-3xl'
          }
        />
      </a>
    </button>
  )
}

export default ExternalLink
