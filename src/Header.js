import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='socials-container'>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Facebook</p>
      </div>

      <div className='title-container'>
        <h1 className='app-title'> Crypto Tracker </h1>
        <p> Developed by Oscar Gomez </p>
      </div>

    </div>
  )
}
