import {Link, withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'

import {IoMdClose} from 'react-icons/io'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const {history} = props

  const navigateToHome = () => history.push('/')

  const navigateToAbout = () => {
    history.push('/about')
  }

  const overlayStyle = {
    'background-color': '#ffffff',
  }

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <img
          className="navbar-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-button" />
          </button>
        }
        overlayStyle={overlayStyle}
      >
        {close => (
          <div className="modal-container">
            <button
              className="button"
              type="button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose className="close-button" />
            </button>
            <ul className="modal-content">
              <li className="li">
                <Link className="link" to="/">
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      close()
                      navigateToHome()
                    }}
                  >
                    <h1 className="modal-content-heading">
                      <AiFillHome className="modal-content-logo" />
                      Home
                    </h1>
                  </button>
                </Link>
              </li>
              <li className="li">
                <Link className="link" to="/about">
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      close()
                      navigateToAbout()
                    }}
                  >
                    <h1 className="modal-content-heading">
                      <BsInfoCircleFill className="modal-content-logo" />
                      About
                    </h1>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  )
}

export default withRouter(Header)
