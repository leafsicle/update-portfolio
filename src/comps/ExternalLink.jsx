import React from 'react'

const ExternalLink = ({ socialInfo }) => {
  return (
    <button
      role='button'
      className='contrast text-2xl text-white font-sans'
      title={'External link to ' + socialInfo.name}>
      <a target='_blank' rel='noopener' href={socialInfo.url}>
        <i
          className={
            socialInfo.icon +
            'bg-primary text-white rounded-md p-2 m-5 hover:bg-red hover:text-active '
          }
        />
      </a>
    </button>
  )
}

export default ExternalLink
