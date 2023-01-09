import React, { useContext } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Messages from './Messages';
import Input from './Input'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddIcon />
          <button id='logout' onClick={()=>signOut(auth)}><LogoutIcon style={{color:'red'}} /></button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat