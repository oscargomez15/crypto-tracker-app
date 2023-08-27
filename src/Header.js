import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSquareFacebook} from '@fortawesome/free-brands-svg-icons'


export const Header = () => {
  return (
    <div className='header-container'>

      <div className='logo-container'>

        <div className='logo'>
          <h1 className='O'>O</h1>
          <div className='logo-divider'></div>
          <div className='hide-divider'></div>
          <h1 className='G'>G</h1>
        </div>

        <div className='name'>
          <p>Oscar Gomez</p>
        </div>

        <div className='role'>
          <p>Web Developer</p>
        </div>

      </div>

      <div className='title-container'>
        <h1 className='app-title'> Crypto Tracker </h1>
        <p> Build your future, invest smart. </p>
      </div>

      <div className='socials-container'>
          <div className='social'>
            <a href='https://www.linkedin.com/in/oscar-gomez-77b472195/' className='social-link' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </a>
          </div>
          
          <div className='social'>
            <a href='https://github.com/oscargomez15' className='social-link' target='_blank'>
            <FontAwesomeIcon icon={faGithub} size='2xl'/>
            </a>
          </div>

          <div className='social'>
            <a href='https://www.facebook.com/oscargomez1998' target='_blank'>
            <FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>
            </a>
          </div>
      </div>

    </div>
  )
}
