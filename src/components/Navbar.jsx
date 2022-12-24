import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { grey } from '@mui/material/colors';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat-a-Lot</span>
      <div className='user'>
        <img src='https://tinyurl.com/user-saitama' alt='' />
        <span>SUBS</span>
        <button id='logout'><LogoutIcon style={{color: grey[300]}} /></button>
      </div>
    </div>
  )
}

export default Navbar