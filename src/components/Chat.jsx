import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Saitama</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddIcon />
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat