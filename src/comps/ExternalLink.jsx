import React from 'react'

const ExternalLink = ({ socialInfo }) => {
  return (
    <button
      className='contrast text-2xl m-2 w-100 text-white font-sans border-2 border-white border-dashed hover:border-0'
      title={'External link to ' + socialInfo.name}>
      <a target='_blank' rel='noreferrer' href={socialInfo.url} className=''>
        <i
          className={
            socialInfo.icon +
            'bg-primary text-white rounded-sm p-4 w-30px transition-all duration-300 hover:rounded-3xl hover:bg-red hover:text-active'
          }
        />
      </a>
    </button>
  )
}

export default ExternalLink
