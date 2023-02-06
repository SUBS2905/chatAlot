import React, { useContext } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
import { confirmAlert } from 'react-confirm-alert';
import options from './ModalOptions';

const Chat = () => {

  const {data} = useContext(ChatContext);

  const handleLogout = () =>{
    confirmAlert(options);
  }

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddIcon />
          <button id='logout' onClick={handleLogout}><LogoutIcon style={{color:'red'}} /></button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat