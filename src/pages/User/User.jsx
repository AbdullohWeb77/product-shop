import React from 'react'
import Userpng from '../../assets/user.png'
import './User.scss'

const User = () => {
  return (
    <div className='user'>
      <div className="user-con">
        <img src={Userpng} alt="" />
        <h1>Username : Abdulloh</h1>
        <h1>Password : 12345678</h1>
      </div>
    </div>
  )
}

export default User