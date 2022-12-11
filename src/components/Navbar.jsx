import React from 'react'
import Logout from '../assets/logout.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat-a-Lot</span>
      <div className='user'>
        <img src='https://tinyurl.com/user-saitama' alt='' />
        <span>SUBS</span>
        <button style={{display: 'none'}} id='logout'>Logout</button>
        <label htmlFor='logout'><img src={Logout} alt=''/></label>
      </div>
    </div>
  )
}

export default Navbar