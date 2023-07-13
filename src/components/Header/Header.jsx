import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../assets/nav-log.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="left">
          <h3>Товары</h3>
          <p>Главная / Товары</p>
        </div>
        <div className="right">
          <Link to='Login'><button className='log-btn'><img src={Logout} alt="exit"/>Выйти</button></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header