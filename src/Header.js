import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'


export const Header = () => {
  return (
    <div className='header-container'>
      <div className='socials-container'>
          <a href='https://www.linkedin.com/in/oscar-gomez-77b472195/' className='social-link' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
          </a>
          <a href='https://github.com/oscargomez15' className='social-link' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </a>
          <a href='https://www.facebook.com/oscargomez1998' target='_blank'>
          <FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>
          </a>
      </div>

      <div className='title-container'>
        <h1 className='app-title'> Crypto Tracker </h1>
        <p> Developed by Oscar Gomez </p>
      </div>

      <div className='empty-container'></div>
    </div>
  )
}
