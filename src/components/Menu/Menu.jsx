import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
import Logicon from '../../assets/menu-1.svg'
import Set from '../../assets/menu-2.svg'
import User from '../../assets/menu-3.svg'
import Shop from '../../assets/menu-4.svg'
import Card from '../../assets/menu-5.svg'

const Menu = () => {
  return (
    <div className='menu'>
      <Link to='All'  className='menu-items'><img className='menu-1' src={Logicon} alt="" /></Link>
      <Link to='Login' className='menu-items'><img src={Set} alt="" /></Link>
      <Link to='User' className='menu-items'><img src={User} alt="" /></Link>
      <Link to='New' className='menu-items'><img src={Card} alt="" /></Link>
      <Link to='Card' className='menu-items'><img src={Shop} alt="" /></Link>
    </div>
  )
}                          
export default Menu