import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Messages from './Messages';
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Saitama</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddIcon />
          <button id='logout'><LogoutIcon style={{color:'white'}} /></button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat